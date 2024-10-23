import styles from "@/pages/catalog/catalog.module.css";
import React, {useState} from "react";
import Link from "next/link";

interface Props {
  title?: string;
  href?: any ;
}

const TagsContainer: React.FC<Props> = ({title, href}) => {
  return (
    <>
      <div className={styles.tags_item}>
        <Link className={styles.tags_items} href={href}>
          {title}
        </Link>
      </div>
    </>
  )
}

export default TagsContainer;