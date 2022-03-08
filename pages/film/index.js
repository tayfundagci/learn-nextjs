import React from "react";
import { useRouter } from "next/router";

function Film() {
  const router = useRouter();
  const { url } = router.query;

  return <p>Film: {url}</p>;
}

export default Film;
