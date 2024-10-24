import Page from "@/components/page";
import TapBar from "@/components/tapbar";
import React, {useState} from "react";
import styles from '../../components/catalog/catalog.module.css'
import Error from "@/components/error";
import MainContent from "@/components/maincontent";
import ProductTag from "@/components/catalog/producttag";
import copy from 'copy-to-clipboard';
import response from "@/public/games/all_shop.json";
import Link from "next/link";
import Copy from "@/components/icons/copy";
import ProductDescription from "@/components/catalog/productdescription";

interface Props {
  catalog?: any
}

const PageCatalog: React.FC<Props> = ({catalog}) => {
  if (!catalog) {
    return <Error status={404}></Error>
  }
  const isPreOrderAvailable = catalog.tags.some((tag: { ru_name: string; }) => tag.ru_name === 'Предзаказы');
  const isRegion: any = {
    "Весь мир": true,
    "Россия+СНГ": true,
    "Россия": true,
  }

  const foundGames = response.data.filter((game) => game.name.toLowerCase().includes(catalog.name.toLowerCase()))
  const [activeTab, setActiveTab] = useState('description');

  const handleTabClick = (tabId: React.SetStateAction<string>) => {
    setActiveTab(tabId);
  };


  return (
    <Page title={catalog.name}>
      <MainContent height={"100%"} margin={"100px 0 0 0"}>
        <div className={styles.wrapper_catalog_slug}>
          <div style={{display: 'flex'}}>
            <div className={styles.image}>
              <div className={styles.image_container}>
                <img src={catalog.picture_url} alt={catalog.name}/>
              </div>
            </div>
            <div className={styles.main_info_title}>
              <h1>
                <span>
                  {catalog.name}
                </span>
              </h1>
              <div className={styles.main_info_tags}>
                {isPreOrderAvailable && (
                  <ProductTag
                    alt={"No Image"}
                    src={'/is-preorder.svg'}
                    title={'Предзаказ'}
                    text={'Доставка в день релиза'}
                    tags={false}/>
                )}
                <ProductTag
                  alt={"No Image"}
                  src={`/games/public_logo_games/${catalog.external_data.platform}.svg`}
                  title={`Платформа`}
                  text={`${catalog.external_data.platform}`}
                  tags={false}/>
                {isRegion[catalog.external_data.region] == true ?
                  <>
                    <ProductTag
                      alt={"No Image"}
                      src={`/games/public_logo_flags/tag-flag.webp`}
                      title={`Территория активации`}
                      text={`Доступно в РФ`}
                      tags={true}/>
                  </>
                  : <></>}
              </div>
              <div className={`${styles.main_info_chips} ${styles.chips}`}>
                <div className={styles.chips_header}>
                  <span>Платформа:</span> {catalog.external_data.platform}
                </div>
                <div className={styles.chips_list}>
                  {foundGames
                    .filter((data, index, self) =>
                      index === self.findIndex((d) => d.external_data.platform === data.external_data.platform)
                    )
                    .map((data) => {
                      const isActive = data.external_data.platform === catalog.external_data.platform;
                      return (
                        <div className={`${styles.tags_item} ${isActive ? styles.chips_list_active : ''}`}
                             key={data.slug}>
                          <Link className={styles.tags_items} href={`/catalog/${data.slug}`}>
                            {data.external_data.platform}
                          </Link>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className={`${styles.main_info_chips} ${styles.chips}`}>
                <div className={styles.chips_header}>
                  <span>Издание:</span> {catalog.external_data.product_details.value}
                </div>
                <div className={styles.chips_list}>
                  {foundGames
                    .filter((data, index, self) =>
                      index === self.findIndex((d) => d.external_data.product_details.value === data.external_data.product_details.value)
                    )
                    .map((data) => {
                      const isActive = data.external_data.product_details.value === catalog.external_data.product_details.value;
                      return (
                        <div className={`${styles.tags_item} ${isActive ? styles.chips_list_active : ''}`}
                             key={data.slug}>
                          <Link className={styles.tags_items} href={`/catalog/${data.slug}`}>
                            {data.external_data.product_details.value}
                          </Link>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className={`${styles.main_info_chips} ${styles.chips}`}>
                <div className={styles.chips_header}>
                  <span>Платформа:</span> {catalog.external_data.region}
                </div>
                <div className={styles.chips_list}>
                  {foundGames
                    .filter((data, index, self) =>
                      index === self.findIndex((d) => d.external_data.region === data.external_data.region)
                    )
                    .map((data) => {
                      const isActive = data.external_data.region === catalog.external_data.region;
                      return (
                        <div className={`${styles.tags_item} ${isActive ? styles.chips_list_active : ''}`}
                             key={data.slug}>
                          <Link className={styles.tags_items} href={`/catalog/${data.slug}`}>
                            {data.external_data.region}
                          </Link>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
          <ProductDescription data={catalog} />
        </div>
      </MainContent>
      <TapBar catalog={"1"} main={".5"} cart={".5"}/>
    </Page>
  )
}


export default PageCatalog

