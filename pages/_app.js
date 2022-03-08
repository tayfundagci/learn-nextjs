import React from "react";
import "../public/styles/global.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />;
    </>
  );
}

export default App;
