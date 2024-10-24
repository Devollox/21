import styles from "@/components/catalog/catalog.module.css";
import stylesTitle from "@/components/swipercart/swipercart.module.css";
import React from "react";

const TitleCatalog = () => {
  return (
    <>
      <a className={`${styles.card_list_link} ${stylesTitle.card_list_link}`}>
        <h2 className={stylesTitle.card_list_title} style={{fontSize: '40px'}}>
          <span className={stylesTitle.card_list_title_wrapper}>Каталог</span>
        </h2>
      </a>
    </>
  )
}

export default TitleCatalog;