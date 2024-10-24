import PageCatalog from "@/pages/catalog/pagecatalog";

interface Props {
  catalog?: any;
}

export const getServerSideProps = (context: { query: { slug: any; }; }) => {
  const { slug } = context.query;
  const response = require("../../public/games/all_shop.json")

  let foundGame = response.data.find((game: {
    slug: any;
    app_id: number; }) => game.slug === slug);


  if (foundGame === undefined) {
    return {
      props: { catalog: null },
    };
  }

  return {
    props: { catalog: foundGame },
  };
};

const SlugContent: React.FC<Props> = ({ catalog }) => {
  return <PageCatalog catalog={catalog} />
};

export default SlugContent;
