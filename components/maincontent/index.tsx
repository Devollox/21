import styles from './maincontent.module.css'
import React from "react";

interface Props {
  margin: any
  height: any
  children: React.ReactNode
}

const MainContent: React.FC<Props> = ({children, height, margin}) => {
  return (
    <>
      <div className={styles.wrapper_container} style={{height:`${height}`, margin: `${margin}`}}>
        <div className={styles.wrapper_swiper}>
          {children}
        </div>
      </div>
    </>
  )
}

export default MainContent