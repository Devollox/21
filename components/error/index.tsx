import Head from 'next/head'
import Navbar from "@/components/navbar";
import TapBar from "@/components/tapbar";
import React from "react";

interface Props {
  status?: number | string | null;
  children?: React.ReactNode
}

const Error: React.FC<Props> = ({
    status,
    children
}) => {
  return (
    <>
      <Head>
        <title>{status} — Devollox</title>
      </Head>
      <Navbar />
      <TapBar catalog={".5"} main={".5"} cart={".5"}/>
      <main>{children}</main>
    </>
  )
}

export default Error