import {ThemeProvider} from 'next-themes'
import Head from "@/components/head";
import '../styles/globals.css';
import '../styles/swiper.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import MainContent from "@/components/maincontent";
import Footer from "@/components/footer";
import TapBar from "@/components/tapbar";
import React from "react";
import MarqueeSlide from "@/components/marquee";
import Navbar from "@/components/navbar";

interface Props {
  Component: typeof Head
  pageProps: {}
}

const MyApp: React.FC<Props> = ({Component, pageProps}) => {
  return (
    <>
      <Head/>
      <ThemeProvider defaultTheme={"light"}>
        <div style={{display: "flex", flexDirection: "column", minHeight: '100vh', justifyContent: "space-between"}}>
          <div>
            <Navbar/>
            <Component {...pageProps} />
          </div>
          <div>
            <MarqueeSlide/>
            <MainContent height={"100%"} margin={'0 0 0 0'}>
              <Footer/>
            </MainContent>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}
export default MyApp