import React from "react";
import "../public/styles/global.css";
import Header from "../components/header";

function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default App;
