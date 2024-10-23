import React from "react";
import {data as data_all} from "../../public/games/all_shop.json"
import Marquee from "react-fast-marquee";
import styles from './marquee.module.css'

import Link from "next/link";

const MarqueeSlide = () => {
  return (
    <>
      <Marquee className={styles.marguee} style={{marginBottom: '100px'}}>
        {data_all.slice(0, 200).map(data => {
          return (
            <Link style={{textDecoration: 'none', color: 'white', opacity: '.9'}} href={`/catalog/${data.slug}`}>
              <div className={styles.marquee_item}>
                <img src={`${data.picture_url}`} loading="lazy" alt={`${data.name}`}/>
                <p>{data.name}</p>
              </div>
            </Link>
          )
        })}
      </Marquee>
    </>
  )
}

export default MarqueeSlide