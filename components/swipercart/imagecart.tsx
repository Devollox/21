import styles from "@/components/swipercart/swipercart.module.css";
import React from "react";

interface Props {
  data?: any
  stylesBlockWidth?: any
}

const ImageCart:React.FC<Props> = ({data, stylesBlockWidth}) => {
  const regions: any = {
    "Весь мир": "globe-showing-asia-australia-svgrepo-com",
    "Весь мир (Без СНГ)": "globe-showing-asia-australia-svgrepo-com",
    "Весь мир (Без РФ)": "globe-showing-asia-australia-svgrepo-com",
    "Россия+СНГ": 'flag-for-flag-russia-svgrepo-com',
    "Россия": 'flag-for-flag-russia-svgrepo-com',
    "СНГ (Без РФ и РБ)": 'flag-for-flag-kazakhstan-svgrepo-com'

  }

  return (
    <>
      <div style={{width: `${stylesBlockWidth}`}} className={styles.cart}>
        <div className={styles.mixing_cart}>
          <div className={styles.product_card_tag_top}>
            <div className={styles.product_card_tag}>
              <img className={styles.product_logo}
                   src={`/games/public_logo_flags/${regions[data.external_data.region]}.svg`} alt="/"/>
            </div>
          </div>
          <div className={styles.product_card_tags_bottom}>
            <div className={styles.product_card_tag_bottom}>
              <img className={styles.product_description_logo}
                   src={`/games/public_logo_games/${data.external_data.platform}.svg`}
                   alt="Иконка Rockstar."/>
              <span>{data.external_data.platform}</span>
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          width={1920}
          height={1080}
          style={{borderRadius: "12px"}}
          className={styles.banner_carousel_slide_image}
          src={`${data.picture_url}`}
          alt={`${data.name}`}
        />
      </div>
    </>
  )
}

export default ImageCart