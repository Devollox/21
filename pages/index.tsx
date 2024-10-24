import Page from '../components/page'
import Navbar from "@/components/navbar";
import Slider from "@/components/swiper";
import MainContent from "@/components/maincontent";
import React from "react";
import SwiperCart from "@/components/swipercart";
import TapBar from "@/components/tapbar";
import MoreCards from "@/components/morecards";
import useFilterGamesByTag from "@/hook/useFilterGamesByTag";

const Main = () => {
  const response = require("../public/games/all_shop.json")

  const newItemsGames = useFilterGamesByTag(response.data, "new items");
  const preOrderGames = useFilterGamesByTag(response.data, "pre-order");
  const popularGames = useFilterGamesByTag(response.data, "popular games");
  const allGames = useFilterGamesByTag(response.data, "game");

  return (
    <Page
      title="Shop games"
      description="Main page shop."
    >
      <MainContent height={"100%"} margin={"100px 0 0 0"}>
        <Slider />
        <SwiperCart title="Популярные игры" data={popularGames}/>
        <SwiperCart title="Лучшие новинки" data={newItemsGames}/>
        <SwiperCart title="Предзаказы" data={preOrderGames}/>
        <MoreCards data={allGames}/>
      </MainContent>
      <TapBar catalog={".5"} main={"1"} cart={".5"}/>
    </Page>
  );
}

export default Main
