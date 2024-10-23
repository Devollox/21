import styles from "@/components/swipercart/swipercart.module.css";
import path from "path";
import React from "react";

interface Props {
  data?: any
}

const DescriptionCart:React.FC<Props> = ({data}) => {
  const calculateDiscount = (originalPrice: number, discountedPrice: number): number =>{
    const discountAmount = originalPrice - discountedPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;
    return Math.round(discountPercentage);
  }

  return (
    <>
      <div className={styles.wrapper_description}>
        <div className={styles.product_card_prices}>
          <div className={styles.product_price}>
            {data.old_price != null ?
              <>
                <div className={styles.prices_discount}>{-calculateDiscount(data.old_price, data.price)}%
                </div>
              </>
              :
              <>
              </>
            }
            <div className={styles.prices_price}>{data.price.toLocaleString('ru-RU')}
              <span style={{marginLeft: '3px'}}>
                <svg width="16" height="16" viewBox="0 0 201 201"
                     fill="none" xmlns="http://www.w3.org/2000/svg"
                     className="w-[16px] h-[16px] ml-[2px] mb-[1px]">
                <g data-v-08588fab="" clip-path="url(#clip0_3259_1300)">
                  <path data-v-08588fab="" fill-rule="evenodd" clip-rule="evenodd"
                        d="M100.5 201C156.005 201 201 156.005 201 100.5C201 44.9954 156.005 0 100.5 0C44.9954 0 0 44.9954 0 100.5C0 156.005 44.9954 201 100.5 201ZM59.5086 150.75H84.3823V107.774L122.246 150.75H152.509L108.151 98.5151L145.599 54.0188H115.751L84.3823 90.9148V54.0188H59.5086V150.75Z"
                        fill="#09ba82"></path>
                </g>
              </svg>
              </span>
            </div>
            <div className={styles.prices_currency_price}>{data.old_price === null ?
              <div>{parseInt(data.price_in_gold).toLocaleString('ru-RU')} ₽</div> :
              <div style={{textDecorationLine: 'line-through', display: 'flex'}}>
                {data.old_price.toLocaleString('ru-RU')} ₽
              </div>
            }
            </div>
          </div>
          <div className={styles.product_card_name}>{data.name}</div>
          <div className={styles.product_card_sub_name}>{data.external_data.product_details.value}</div>
        </div>
      </div>
    </>
  )
}

export default DescriptionCart