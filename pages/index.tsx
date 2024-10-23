import Page from '../components/page'
import Navbar from "@/components/navbar";
import Slider from "@/components/swiper";
import MainContent from "@/components/maincontent";
import React from "react";
import SwiperCart from "@/components/swipercart";
import {data as data_popular} from "../public/games/popular_shop.json"
import {data as data_hot} from "../public/games/hot_products_shop.json"
import {data as data_pre_order} from "../public/games/pre_order_shop.json"
import {data as data_all} from "../public/games/all_shop.json"
import TapBar from "@/components/tapbar";
import MoreCards from "@/components/morecards";

const Main = () => {
  return (
    <Page
      title="Shop games"
      description="Main page shop."
    >
      <MainContent height={"100%"} margin={"100px 0 0 0"}>
        <Slider />
        <SwiperCart title="Популярные игры" data={data_popular}/>
        <SwiperCart title="Лучшие новинки" data={data_hot}/>
        <SwiperCart title="Предзаказы" data={data_pre_order}/>
        <MoreCards data={data_all}/>
      </MainContent>
      <TapBar catalog={".5"} main={"1"} cart={".5"}/>
    </Page>
  );
}

export default Main
