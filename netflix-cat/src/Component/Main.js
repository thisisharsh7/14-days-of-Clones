import React from "react";
import Url from "./Url.json";
import Reel from "./Reel";

export default function Main() {
  return (
    <>
      <main>
        {Url.map((data, idx) => {
          return <Reel key={idx} head={data.name} lnk={data.link} />;
        })}
      </main>
    </>
  );
}
