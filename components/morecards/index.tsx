import OtherButtons from "@/components/otherbuttons";
import React, {useState} from "react";
import Link from "next/link";
import ImageCart from "@/components/swipercart/imagecart";
import DescriptionCart from "@/components/swipercart/descriptioncart";
import TitleCart from "@/components/swipercart/titlecart";
import styles from './morecards.module.css'

interface Props {
  data?: any
}

const MoreCards: React.FC<Props> = ({data}) => {
  const [slide, setSlide] = useState(0)

  return (
    <>
      <div style={{marginTop: '50px'}}>
        <TitleCart title="Все товары"/>
        <div className={styles.wrapper_more_cards}
             style={{
               display: "grid",
               gap: '20px',
               gridTemplateColumns: "repeat(6, 1fr)",
               gridTemplateRows: "1fr"
             }}>
          {data.slice(0, 10 + slide).map((data: { slug: any; }) => {
            return (
              <>
                <div className='swiper-slide' style={{margin: "50px 0 0 0"}}>
                  <Link style={{textDecoration: 'none'}} href={`/catalog/${data.slug}`}>
                    <ImageCart stylesBlockWidth={"100%"} data={data}/>
                    <DescriptionCart data={data}/>
                  </Link>
                </div>
              </>
            )
          })}
        </div>
      </div>
      <OtherButtons functionClick={() => {
        setSlide(slide + 10)
      }}/>
    </>
  )
}

export default MoreCards