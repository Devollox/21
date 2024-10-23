import Head from "@/components/head";

interface Props {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

const Page: React.FC<Props> = ({
    title,
    description,
    children,
}) => {
  return (
    <>
      <Head
        title={`${title ? `${title} - ` : ''}GlShop`}
        description={description}
      />

      <main>{children}</main>
    </>
  )
}

export default Page