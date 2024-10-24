import React, {useState} from "react";
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { Autoplay, EffectFade, FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import CartButton from "./../cartbutton";
import CartBackground from "./../cartbackground";
import { data } from "../../../public/games/config.json";

const SwiperDesktop: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

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
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[Thumbs, Autoplay, EffectFade]}
        className="swiper_main"
      >
        {data.slice(0, 5).map(item => {
          return (
            <SwiperSlide key={item.slug}>
              <CartBackground
                slug={item.slug}
                exclusive={item.exclusive}
                alt={item.title}
                title={item.title}
                img={item.idImg}
                description={item.description}
              />
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
        {data.slice(0, 5).map(item => {
          return (
            <SwiperSlide key={item.slug}>
              <CartButton alt={item.title} title={item.title} img={item.idImg} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default SwiperDesktop;
