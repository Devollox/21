import React from "react";
import styles from './slider.module.css'
import Image from "next/image"

interface Props {
  title: string
  img: string
  alt: string
}

const CartButton: React.FC<Props> = ({alt, img, title}) => {
  return (
    <>
      <div className={styles.banner_carousel_pagination_button_container}>
        <Image
          width={64}
          height={64}
          style={{borderRadius: "12px"}}
          className={styles.banner_carousel_slide_image}
          src={`/games/${img}/thumbnail.webp`}
          quality={100}
          alt={alt}
        />
        <div className={styles.banner_carousel_pagination_button_information}>
          <span className={styles.banner_carousel_pagination_button_title}>
            {title}
          </span>
        </div>
      </div>
    </>
  )
}

export default CartButton