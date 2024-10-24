import styles from "@/components/catalog/catalog.module.css";
import React, {useState} from "react";
import Link from "next/link";

interface Props {
  title?: string;
  href?: any;
  style?: string;
}

const TagsContainer: React.FC<Props> = ({title, href, style}) => {
  return (
    <>
      <div className={styles.tags_item}>
        <Link className={styles.tags_items} href={`/catalog/tags/${href}`}>
          {title}
        </Link>
      </div>
    </>
  )
}

export default TagsContainer;