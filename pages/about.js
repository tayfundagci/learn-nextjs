import React from "react";
import Link from "next/link";
import Head from "next/head";
function About() {
  return (
    <div>
      <Head>
        <title>Hakkında</title>
      </Head>
      <h3 style={{ textAlign: "center", fontSize: "30px", marginTop: "20px" }}>
        About Page
      </h3>

      <style jsx>{`
        h3 {
          font-size: 20px;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}

export default About;
