import React, {useState} from "react";
import Navbar from "@/components/navbar";
import TapBar from "@/components/tapbar";
import MainContent from "@/components/maincontent";
import Page from "@/components/page";
import SwiperCart from "@/components/swipercart";
import {data as data_top} from "../../public/games/all_shop.json"
import TitleCatalog from "@/components/catalog/titlecatolog";
import TagsWrapper from "@/components/catalog/tagswrapper";
import {catalog as data} from "../../public/games/tags_catalog.json"


const Catalog = () => {
  const filteredGames = data_top.filter(game => {
    return game.tags.some((tag: { ru_name: string; }) => {
      const year = parseInt(tag.ru_name);
      return !isNaN(year) && year >= 2000 && year <= 2024;
    });
  });

  return (
    <>
      <Page title={"Catalog"}>
        <Navbar block={'none'}/>
        <MainContent height={"100%"} margin={"100px 0 0 0"}>
          <TitleCatalog/>
          <TagsWrapper data={data} />
        </MainContent>
        <MainContent height={"100%"} margin={"0px 0 50px 0"}>
          <SwiperCart title="Топ продаж" data={filteredGames}/>
          <TapBar catalog={"1"} main={".5"} cart={".5"}/>
        </MainContent>
      </Page>
    </>
  )
}

export default Catalog

