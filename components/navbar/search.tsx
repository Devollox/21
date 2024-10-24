import Search from "@/components/icons/search";
import React, { useEffect, useRef, useState } from 'react';
import styles from './navbar.module.css';
import data from '../../public/games/all_shop.json';
import stylesCount from '../swipercart/swipercart.module.css'
import Link from "next/link";

interface Game {
  id: number
  name: string
  price: number
  currency: string
  picture_url: string
  external_data: any
  old_price: any
  price_in_gold: any
  slug: string
}

const SearchComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredGames, setFilteredGames] = useState<Game[]>(
    data.data.slice().sort((a, b) => a.name.localeCompare(b.name))
  );
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (block: React.ChangeEvent<HTMLInputElement>) => {
    const value = block.target.value.toLowerCase().replace(/[.:`']/g, '');
    setSearchTerm(value);

    if (value.trim() !== '') {
      const results = data.data.filter((game: Game) =>
        game.name.toLowerCase().replace(/[.:`']/g, '').includes(value)
      );
      setFilteredGames(results.slice().sort((a, b) => a.name.localeCompare(b.name))); // Создаем копию массива
    } else {
      setFilteredGames(data.data.slice().sort((a, b) => a.name.localeCompare(b.name))); // Создаем копию массива
    }
  };

  const handleInputClick = () => {
    setIsPopupVisible(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setIsPopupVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const calculateDiscount = (originalPrice: number, discountedPrice: number): number => {
    const discountAmount = originalPrice - discountedPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;
    return Math.round(discountPercentage);
  }


  return (
    <div className={styles.search_button}>
      <span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5">
            <Search />
          </g>
        </svg>
      </span>
      <input
        className={styles.header_search_input}
        type="text"
        placeholder="Найти что-то конкретное.."
        value={searchTerm}
        onChange={handleSearch}
        onClick={handleInputClick}
        ref={inputRef}
      />
      {isPopupVisible && (
        <div className={styles.header_search_popup} ref={popupRef}>
          {filteredGames.length === 0 ? (
            <div style={{display: 'flex', justifyContent: 'center', marginBottom: '10px'}}
                 className={stylesCount.product_card_name}>Ничего не найдено</div>
          ) : (
            filteredGames.map((game) => (
              <Link href={`/catalog/${game.slug}`} style={{textDecoration: 'none'}}>
                <div className={styles.wrapper_cart} style={{display: 'flex', justifyContent: 'space-between', margin: '0 0 0 0'}}
                     key={game.id}>
                  <div style={{display: 'flex', margin: '10px 0 12px 0px'}}>
                    {/*<img style={{height: '40px'}} src={game.picture_url} alt={game.name}/> */}
                    <div style={{marginLeft: '12px'}}>
                      <div style={{marginTop: '0'}} className={stylesCount.product_card_name}>{game.name}</div>
                      <div className={stylesCount.product_card_sub_name}>{game.external_data.product_details.value}</div>
                    </div>
                  </div>
                  <p style={{display: 'flex', margin: '25px 0 0 0'}}>
                    <div style={{height: '30px', marginRight: '5px'}}>
                      {game.old_price != null ?
                        <>
                          <div className={stylesCount.prices_discount}>{-calculateDiscount(game.old_price, game.price)}%                        </div>
                        </>
                        :
                        <>
                        </>
                      }
                    </div>
                    <div className={stylesCount.prices_price}>{game.price.toLocaleString('ru-RU')}
                      <span style={{marginLeft: '3px'}}>
                <svg width="16" height="16" viewBox="0 0 201 201"
                     fill="none" xmlns="http://www.w3.org/2000/svg"
                     className="w-[16px] h-[16px] ml-[2px] mb-[1px]">
                <g clip-path="url(#clip0_3259_1300)">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M100.5 201C156.005 201 201 156.005 201 100.5C201 44.9954 156.005 0 100.5 0C44.9954 0 0 44.9954 0 100.5C0 156.005 44.9954 201 100.5 201ZM59.5086 150.75H84.3823V107.774L122.246 150.75H152.509L108.151 98.5151L145.599 54.0188H115.751L84.3823 90.9148V54.0188H59.5086V150.75Z"
                        fill="#09ba82"></path>
                </g>
              </svg>
              </span>
                    </div>
                    <div style={{marginTop: '2px', marginLeft: '5px', marginRight: "12px"}}
                         className={stylesCount.prices_currency_price}>{game.old_price === null ?
                      <div>{parseInt(game.price_in_gold).toLocaleString('ru-RU')} ₽</div> :
                      <div style={{textDecorationLine: 'line-through', display: 'flex'}}>
                        {game.old_price.toLocaleString('ru-RU')} ₽
                      </div>
                    }
                    </div>
                  </p>
                </div>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
