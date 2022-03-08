import React from "react";
import Link from "next/link";
import Head from "next/head";
// import Script from "next/script";

function post() {
  return (
    <>
      <Head>
        <title>Blog Post</title>
        {/* <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        /> */}
      </Head>
      <h3>Post</h3>
      <Link href="/">Geri Dön</Link>
    </>
  );
}

export default post;
