import PageTags from "./pagetags";
import useTypeTag from "@/hook/useGameTags";

interface Props {
  catalog?: any;
  slugContext?: string;
}

export const getServerSideProps = (context: { query: { slug: any; }; }) => {
  const {slug} = context.query;
  const response = require("../../../public/games/all_shop.json")

  let foundGame = response.data.filter((game: { tags: { en_name: string; }[]; }) =>
    game.tags.some((tag: { en_name: string; }) => tag.en_name === `${useTypeTag(slug)}`)
  );
  if (foundGame === undefined) {
    return {
      props: { catalog: null },
    };
  }

  return {
    props: {
      catalog: foundGame,
      slugContext: slug
    },
  };
};

const SlugContent: React.FC<Props> = ({ catalog, slugContext }) => {
  console.log(slugContext)

  return <PageTags catalog={catalog} slugContext={slugContext}/>
};

export default SlugContent;