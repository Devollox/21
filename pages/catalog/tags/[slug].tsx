import PageTags from "./pagetags";

interface Props {
  catalog?: any;
  slugContext?: string;
}

export const getServerSideProps = (context: { query: { slug: any; }; }) => {
  const {slug} = context.query;
  const response = require("../../../public/games/all_shop.json")

  const typeTags: { [key: string]: string } = {
    "game": 'Game',
    "rockstar": 'Rockstar',
    "steam": 'Steam',
    "nintendo": 'Nintendo',
    "dlc": 'DLC',
    "action": 'Action',
    "popular games": 'Popular Games',
  };

  let foundGame = response.data.filter((game: { tags: { en_name: string; }[]; }) =>
    game.tags.some((tag: { en_name: string; }) => tag.en_name === `${typeTags[slug]}`)
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