import styles from "@/components/catalog/catalog.module.css";
import React from "react";
import Tag from "@/components/icons/tag";

interface Props {
  title: string;
  text: string;
  src: string;
  alt: string;
  tags: boolean;
}

const ProductTag: React.FC<Props> = ({title, text, src, alt, tags = false}) => {
  return (
    <>
      <div className={styles.product_tag} style={{marginRight: '5px'}}>
        <div className={styles.product_tag_img}>
          <img
            src={src}
            alt={alt}
          />
          <span className={styles.nuxt_icon}>
            <svg width="10" height="10" fill="none">
              {tags ? <Tag />: <></>}
            </svg>
          </span>
        </div>
        <div className={styles.product_tag_body}>
          <div className={styles.product_tag_title}>{title}</div>
          <div className={styles.product_tag_text}>{text}</div>
        </div>
      </div>
    </>
  )
}
export default ProductTag