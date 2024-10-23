import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import React from "react";
import TapBar from "@/components/tapbar";
import Page from "@/components/page";
import MainContent from "@/components/maincontent";

const Cart = () => {
  return (
    <>
     <Page title={"Cart"}>
       <MainContent height={"100%"} margin={'0 0 0 0'}>
         <></>
       </MainContent>
       <TapBar catalog={".5"} cart={"1"} main={".5"} />
     </Page>
    </>
  )
}

export default Cart