import styles from "./navbar.module.css"
import Basket from "@/components/icons/basket";
import Link from "next/link";
import Main from "@/components/icons/main";
import SearchComponent from "@/components/navbar/search";



const Navbar = ({block}: any) => {
  return (
    <>
    <div className={styles.navbar} style={{zIndex: 999}}>
      <div className={styles.container}>
        <Link href="/catalog" className={styles.basket}
              style={{display: `${block}`, width: '164px', marginRight: "12px", textDecoration: 'none'}}>
          <div className={styles.control_button} style={{width: '164px'}}>
            <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', width: '100%'}}
                 className={styles.header_control_button}>
                <span style={{marginTop: '3px', marginRight: '5px'}}>
                  <svg width="14" height="24"
                       viewBox="0 0 14 24" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7H13M1 11.5H13M1 16H13" stroke="white" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round"></path>
                  </svg>
                </span>
              <div className={styles.catalog_name}>Каталог</div>
            </div>
          </div>
        </Link>
        <SearchComponent />
        <Link href="/" className={styles.basket}>
          <div className={styles.control_button} style={{marginLeft: '12px'}}>
            <div className={styles.header_control_button}>
                <span style={{marginLeft: '-5px', marginTop: '4px'}}>
                  <svg width="24" height="24"
                       viewBox="0 0 14 24" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <Main/>
                  </svg>
                </span>
            </div>
          </div>
        </Link>
        <Link href="/cart" className={styles.basket}>
          <div className={styles.control_button} style={{marginLeft: '12px'}}>
            <div className={styles.header_control_button}>
                <span>
                  <svg width="14" height="24"
                       viewBox="0 0 14 24" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <Basket/>
                  </svg>
                  <div className={styles.header_control_badge}>19</div>
                </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
    </>
  )
}

export default Navbar