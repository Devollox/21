import React, {useState} from "react";
import Navbar from "@/components/navbar";
import TapBar from "@/components/tapbar";
import MainContent from "@/components/maincontent";
import Page from "@/components/page";
import SwiperCart from "@/components/swipercart";
import {data as data_top} from "../../public/games/top_sell_shop.json"
import TitleCatalog from "@/pages/catalog/titlecatolog";
import TagsWrapper from "@/pages/catalog/tagswrapper";
import {catalog as data} from "../../public/games/tags_catalog.json"


const Catalog = () => {
  return (
    <>
      <Page title={"Catalog"}>
        <Navbar block={'none'}/>
        
      </Page>
    </>
  )
}

export default Catalog

