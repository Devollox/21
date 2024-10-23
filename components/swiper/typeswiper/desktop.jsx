import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, EffectFade, FreeMode, Navigation, Pagination, Thumbs} from "swiper/modules";
import CartButton from "./../cartbutton"
import CartBackground from "./../cartbackground";
import { data as data } from "../../../public/games/config.json"

const SwiperDesktop = () => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState()

  return (
    <>
      <Swiper
        autoplay={{
          disableOnInteraction: false,
        }}
        fadeEffect={{
          crossFade: true,
        }}
        allowTouchMove={false}
        speed={2000}
        effect={"fade"}
        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
        modules={[Thumbs, Autoplay, EffectFade]}
        className="swiper_main"
      >
        {data.slice(0, 5).map(data => {
          return (
            <SwiperSlide>
              <CartBackground slug={data.slug} exclusive={data.exclusive} alt={data.title} title={data.title} img={data.idImg} description={data.description} />
            </SwiperSlide>
          )
        })}
      </Swiper>
      <Swiper
        direction={'vertical'}
        onSwiper={setThumbsSwiper}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper_button"
      >
        {data.slice(0, 5).map(data => {
          return (
            <SwiperSlide>
              <CartButton alt={data.title} title={data.title} img={data.idImg} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  )
}

export default SwiperDesktop