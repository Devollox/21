import MainContent from "@/components/maincontent";
import Navbar from "@/components/navbar";
import TitleCatalog from "@/pages/catalog/titlecatolog";
import TagsWrapper from "@/pages/catalog/tagswrapper";
import React from "react";

const CatalogTags = () => {
  return (
    <>
      <Navbar block={'none'}/>
      <MainContent height={"100%"} margin={"100px 0 0 0"}>
        <TitleCatalog/>
      </MainContent>
    </>
  )
}

export default CatalogTags