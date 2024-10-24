import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import CartBackground from "../cartbackground";
import { data as data } from "../../../public/games/config.json"

const SwiperMobile = () => {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={10}
        autoplay={{
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="swiper_main swiper_main_mobail"
      >
        {data.slice(0, 5).map(data => {
          return (
            <SwiperSlide>
              <CartBackground slug={data.slug} exclusive={data.exclusive} alt={data.title} title={data.title} img={data.idImg} description={data.description} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default SwiperMobile