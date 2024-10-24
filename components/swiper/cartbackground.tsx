import React from "react";
import styles from './slider.module.css'
import {data as data} from "../../public/games/config.json"
import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  alt: string;
  img: string;
  description: string;
  exclusive: string;
  slug?: string
  children?: React.ReactNode;
}

const CartBackground: React.FC<Props> = ({title, alt, img, description, exclusive, slug, children}) => {
  const gamesTags = data.find(item => item.idImg === `${img}`)?.tag;
  // @ts-ignore
  const gamesSlugs = data.find((game => game.slug === slug)).slug;

  return (
    <>
      <div className={styles.wrapper_cart}
           style={{position: 'fixed', zIndex: 2, height: '100%', width: '100%',}}>
        <div className="wrapper_container">
          <div className={styles.banner_carousel_slide_tags}>
            <div className="margin_flex_img" style={{display: 'flex'}}>
              <Image
                width={500}
                height={200}
                style={{borderRadius: '12px'}}
                alt={alt}
                title={title}
                loading="lazy"
                className={styles.banner_carousel_slide_logo}
                src={`/games/${img}/logo.webp`}
              />
            </div>
            <div className="margin_flex_content">
              <div style={{marginBottom: '20px', display: 'flex'}}>
                <div className={styles.wrapper_items}>
                  {exclusive === "true" ? (
                      <p className={styles.flex_items_center_exclusive}>
                        Экзклюзив
                      </p>
                    ) :
                    <>
                    </>
                  }
                  {gamesTags?.map(data => {
                    return (
                      <>
                        {`${data}` === "Steam" ? (
                            <p className={styles.flex_items_center}>
                              <img className={styles.steam_logo} src="/games/public_logo_games/Steam.svg" alt="/"/> <a
                              style={{marginLeft: '25px'}}>{data}</a>
                            </p>
                          ) :
                          <p className={styles.flex_items_center}>
                            {data}
                          </p>
                        }
                      </>
                    )
                  })}
                </div>
              </div>
              <p className={styles.banner_carousel_slide_title_text}>{title}</p>
              <p className={styles.banner_carousel_slide_description}>{description}</p>

              <Link style={{textDecoration: 'none'}} href={`/catalog/${gamesSlugs}`}>
                <span className={styles.banner_carousel_slide_link}>Купить</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Image
        width={1920}
        height={1080}
        style={{borderRadius: '12px'}}
        alt={alt}
        title={title}
        src={`/games/${img}/background.webp`}
      />
    </>
  )
}

export default CartBackground