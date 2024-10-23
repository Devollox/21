import styles from './tapbar.module.css'

interface Props {
  main?: string,
  catalog?: string
  cart?: string,
}

const TapBar: React.FC<Props> = ({main, catalog, cart}) => {
  return (
    <>
      <div className={styles.g_tapbar}>
        <a href="/" style={{marginRight: '2rem', opacity: `${main}`}} className={styles.g_tapbar_item} aria-current="page">
          <div className={styles.g_tapbar_icon}>
            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                    d="m11.787 12.334 2.985 3.141a1.687 1.687 0 0 0 2.879-1.483l-1.174-6.037m-9.09-.022V9.4m-.733-.733h1.467m3.666 0h1.467M12.888 5a3.667 3.667 0 0 1 0 7.334H8.854l-2.944 3.1a1.687 1.687 0 0 1-2.877-1.493L4.23 7.947A3.667 3.667 0 0 1 7.827 5h5.06Z"
                    stroke="#fff" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
              </path>
            </svg>
          </div>
          <div className={styles.g_tapbar_title}>Главная</div>
        </a>
        <a href="/catalog/"  style={{marginRight: '2rem', opacity: `${catalog}`}} className={styles.g_tapbar_item} aria-current="page">
          <div className={styles.g_tapbar_icon}>
            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path data-v-fca5a966="" d="m16 16-3-3M5 9a4 4 0 1 0 9 0 4 4 0 0 0-9 0Z" stroke="#fff" stroke-width="1.3"
                    stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
          <div className={styles.g_tapbar_title}>Католог</div>
        </a>
        <a href="/cart/" style={{opacity: `${cart}`}} className={styles.g_tapbar_item} aria-current="page">
          <div className={styles.g_tapbar_icon}>
            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path data-v-fca5a966=""
                    d="M3 11.8889C3.39782 11.8889 3.77936 12.0528 4.06066 12.3445C4.34196 12.6362 4.5 13.0319 4.5 13.4444C4.5 13.857 4.34196 14.2527 4.06066 14.5444C3.77936 14.8361 3.39782 15 3 15C2.60218 15 2.22064 14.8361 1.93934 14.5444C1.65804 14.2527 1.5 13.857 1.5 13.4444C1.5 13.0319 1.65804 12.6362 1.93934 12.3445C2.22064 12.0528 2.60218 11.8889 3 11.8889ZM3 11.8889H11.25M3 11.8889V1H1.5M11.25 11.8889C11.6478 11.8889 12.0294 12.0528 12.3107 12.3445C12.592 12.6362 12.75 13.0319 12.75 13.4444C12.75 13.857 12.592 14.2527 12.3107 14.5444C12.0294 14.8361 11.6478 15 11.25 15C10.8522 15 10.4706 14.8361 10.1893 14.5444C9.90804 14.2527 9.75 13.857 9.75 13.4444C9.75 13.0319 9.90804 12.6362 10.1893 12.3445C10.4706 12.0528 10.8522 11.8889 11.25 11.8889ZM3 2.55556L13.5 3.33333L12.75 8.77778H3"
                    stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
          <div className={styles.g_tapbar_title}>Корзина</div>
        </a>
      </div>
    </>
  )
}

export default TapBar