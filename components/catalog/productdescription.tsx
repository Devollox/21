import React, { useState } from 'react';
import Link from 'next/link';
import styles from "@/components/catalog/catalog.module.css";
import copy from "copy-to-clipboard";
import Copy from "@/components/icons/copy";

interface ProductDescriptionProps {
  data: any;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState('description');

  const handleTabClick = (tabId: React.SetStateAction<string>) => {
    setActiveTab(tabId);
  };

  return (
    <div style={{height: '100%', width: '100%'}}>
      <div className={styles.wrapper_description}>
        <div className={styles.description_title}>Описание товара</div>
        <div className={`${styles.description_tabs} ${styles.tabs}`}>
          <div
            id='description'
            className={`${styles.tab} ${activeTab === 'description' ? styles.tab_active : ''}`}
            onClick={() => handleTabClick('description')}
          >
            Описание
          </div>
          <div
            id='instructions'
            className={`${styles.tab} ${activeTab === 'instructions' ? styles.tab_active : ''}`}
            onClick={() => handleTabClick('instructions')}
          >
            Инструкция по активации
          </div>
          <div
            id='characteristics'
            className={`${styles.tab} ${activeTab === 'characteristics' ? styles.tab_active : ''}`}
            onClick={() => handleTabClick('characteristics')}
          >
            Характеристики
          </div>
        </div>
        <div>
          {activeTab === 'description' && (
            <div id='descriptionContent' className={styles.chips_header}>
              <span style={{display: 'flex', flexWrap: 'wrap', margin: '20px 0', height: 'auto', width: '100%'}}>
                {data.tags.map((data: {
                  en_name: boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<React.AwaitedReactNode> | React.Key | null | undefined;
                }) => (
                  <div className={`${styles.tags_item}`} style={{height: 'auto', width: 'auto', margin: '5px'}}>
                    <Link className={styles.tags_items} href={`/catalog/tags/${data.en_name}`}>
                      {data.en_name}
                    </Link>
                  </div>
                ))}
              </span>
              <span style={{}}>Артикуль:</span> {data.external_id}
              <span className={`${styles.cursor_pointer}`} onClick={() => {
                copy(data.external_id)
              }}>
                <Copy/>
              </span>
            </div>
          )}
          {activeTab === 'instructions' && (
            <div id='instructionsContent' className={styles.chips_header}>
              <div className={styles.additional}>
                <div className={`${styles.additional_content} ${styles.whitespace_pre}`}>
                  {data.external_data.instructions}
                </div>
              </div>
            </div>
          )}
          {activeTab === 'characteristics' && (
            <div id='characteristicsContent' className={styles.chips_header}>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
