import React from "react";
import Link from "next/link";
import Head from "next/head";
function home() {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <h3>Blog Page</h3>
      <Link href="/">Geri Dön</Link>
    </>
  );
}

export default home;
