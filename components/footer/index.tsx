import styles from './footer.module.css'
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className={styles.footer_container}>
        <div className={styles.footer_links}>
          <p className={styles.footer_links_title}>
            Продукты
          </p>
          <a className={styles.footer_links_link}>
            Ключи Steam
          </a>
          <a style={{marginTop: '16px'}} className={styles.footer_links_link}>
            Ключи Rockstar
          </a>
          <a style={{marginTop: '16px'}} className={styles.footer_links_link}>
            Ключи Nintendo
          </a>
          <a style={{marginTop: '16px'}} className={styles.footer_links_link}>
            Ключи Epic Games
          </a>
          <a style={{marginTop: '16px'}} className={styles.footer_links_link}>
            Ключи PlayStation
          </a>
          <a style={{marginTop: '16px'}} className={styles.footer_links_link}>
            Ключи Xbox
          </a>
          <a style={{marginTop: '16px'}} className={styles.footer_links_link}>
            Ключи Apple
          </a>
        </div>
        <div className={styles.footer_links}>
          <p className={styles.footer_links_title}>
            Связаться с нами
          </p>
          <a className={styles.footer_links_link}>
            Steam
          </a>
          <a style={{marginTop: '16px'}} className={styles.footer_links_link}>
            Discord
          </a>
          <a style={{marginTop: '16px'}} className={styles.footer_links_link}>
            Reddit
          </a>
        </div>
        <div className={styles.footer_links} style={{width: '372px'}}>
          <p className={styles.footer_links_title} style={{marginBottom: '0px'}}>
            Продукты
          </p>
          <div className={styles.footer_socials}>
            <p className={styles.footer_socials_name}>
              YouTube
            </p>
            <p className={styles.footer_socials_name}>
              VK
            </p>
            <p className={styles.footer_socials_name}>
              Telegram
            </p>
            <p className={styles.footer_socials_name}>
              DTF
            </p>
            <p className={styles.footer_socials_name}>
              Twitch
            </p>
            <p className={styles.footer_socials_name}>
              Ozon
            </p>
          </div>
          <div className={styles.footer_widget}>
            <p className={styles.footer_widget_title}>
              Добавь виджет на свой сайт и зарабатывай вместе с GlShop
            </p>
            <Link href={'/'} style={{textDecoration: 'none'}}>
              <span className={styles.footer_widget_link}>
                Подробнее
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer