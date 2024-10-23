import Page from "@/components/page";
import TapBar from "@/components/tapbar";
import React from "react";
import Error from "@/components/error";
import MainContent from "@/components/maincontent";
import MoreCards from "@/components/morecards";
import TitleCatalog from "@/pages/catalog/titlecatolog";
import TagsWrapper from "@/pages/catalog/tagswrapper";

interface Props {
  catalog?: any;
  slugContext?: any;
}

const PageTags: React.FC<Props> = ({ catalog, slugContext }) => {
  if (!catalog || catalog.length === 0) {
    return <Error status={"Простите, пока тут ничего нет"}></Error>;
  }

  const title = slugContext.charAt(0).toUpperCase() + slugContext.slice(1)
  const data = require("../../../public/games/tags_catalog.json");
  const category = data.catalog.find((category: { title: string }) => category.title === "Игры");
  const tags = category ? category.tags : [];

  return (
    <Page title={title}>
      <MainContent height={"100%"} margin={"100px 0 0 0"}>
        <TitleCatalog />
        <TagsWrapper data={tags} />
      </MainContent>
      <MainContent height={"100%"} margin={"0 0 0 0"}>
        <MoreCards data={catalog} />
      </MainContent>
      <TapBar catalog={"1"} main={".5"} cart={".5"} />
    </Page>
  );
};
export default PageTags

