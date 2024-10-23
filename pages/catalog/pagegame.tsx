import Page from "@/components/page";
import Navbar from "@/components/navbar";
import TapBar from "@/components/tapbar";
import React from "react";
import {redirect} from "next/navigation";
import { useRouter } from 'next/navigation'
import Error from "@/components/error";
import MainContent from "@/components/maincontent";

interface Props {
  catalog?: any
}

const PageGame: React.FC<Props> = ({catalog}) => {
  if (!catalog) {
    return <Error status={404}></Error>
  }

  return (
    <Page title={catalog.name}>
      <MainContent height={"100%"} margin={"0 0 0 0"}>
        <div style={{color: "white", marginTop: '100px'}}>
          {catalog.name}
          {catalog.price}
        </div>
      </MainContent>
      <TapBar catalog={"1"} main={".5"} cart={".5"}/>
    </Page>
  )
}


export default PageGame

