import Page from "@/components/page";
import TapBar from "@/components/tapbar";
import React from "react";
import Error from "@/components/error";
import MainContent from "@/components/maincontent";
import MoreCards from "@/components/morecards";
import TitleCatalog from "@/components/catalog/titlecatolog";
import TagsWrapper from "@/components/catalog/tagswrapper";

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
  const category = data.catalog.find((category: { href: string }) => category.href === `${slugContext}`);
  let tags = category ? category.tags : [];

  if (tags.length === 0) {
    tags = data.catalog
      .filter((category: { tags: { href: string; }[]; }) =>
        category.tags.some((tag: { href: string; }) => tag.href === `${slugContext}`))
      .flatMap((category: { tags: any; }) => category.tags);
  }

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

