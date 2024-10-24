import styles from "@/components/catalog/catalog.module.css";
import TagsContainer from "@/components/catalog/tagscontainer";
import React, { createRef, useEffect, useState, useRef } from "react";
import useWindowSize from "@/hook/useWindowsSize";

interface Props {
  data?: any;
}

const TagsWrapper: React.FC<Props> = ({ data = [] }) => {
  const [height, setHeight] = useState(42);
  const [bool, setBool] = useState(false);
  const [tagsListHeight, setTagsListHeight] = useState(42);
  const tagsListRef = useRef<HTMLDivElement>(null);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (bool) {
      if (tagsListRef.current) {
        setHeight(tagsListRef.current.clientHeight);
      }
    }
  }, [bool, windowSize.width, windowSize.height]);

  useEffect(() => {
    if (tagsListRef.current) {
      setTagsListHeight(tagsListRef.current.clientHeight);
    }
  })

  return (
    <div className={`${styles.tags_container}`} style={{
      height: '100%',
      display: "flex",
      justifyContent: "space-between"
    }}>
      <div className={styles.wrapper_tags_list} style={{height: `${height}px`}}>
        <div className={styles.tags_list} ref={tagsListRef}>
          {data.map((data: { href: any; title: any; }) => {
            return (
              <>
                <TagsContainer href={`${data.href}`} title={`${data.title}`}/>
              </>
            );
          })}
        </div>
      </div>
      {!bool && tagsListHeight != 42 ? (
        <div className={styles.tags_list_more} onClick={() => {
          setBool(true);
        }}>
          <div className={styles.tags_items}>
            Показать ещё
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TagsWrapper;
