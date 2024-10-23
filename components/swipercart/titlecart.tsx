import styles from "@/components/swipercart/swipercart.module.css";
import React from "react";

interface Props {
  title: string | undefined,
}

const TitleCart:React.FC<Props> = ({title}) => {
  return (
    <>
      <a className={styles.card_list_link}>
        <h2 className={styles.card_list_title}>
          <span className={styles.card_list_title_wrapper}>{title}</span>
        </h2>
      </a>
    </>
  )
}

export default TitleCart