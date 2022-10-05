import React from "react";
import data from "../tutorial.json";

export default function Seventhset() {
  return (
    <section className="py-24 bg-[url('https://www.digitalocean.com/_next/static/media/ctaWave.6a631f6e.svg')] bg-repeat-x bg-bottom">
      <div className="flex gap-6 flex-wrap max-w-screen-2xl p-6 mx-auto items-start justify-center">
        {data.map((sdata) => {
          return (
            <div
              key={sdata.id}
              className="flex flex-col gap-10 max-w-xs bg-white rounded-2xl pb-5 cursor-pointer shadow-card transition-all duration-200 delay-75 hover:scale-95"
            >
              <img
                src={require(`../images/${sdata.isrc}.jpg`)}
                alt={sdata.isrc}
                className="p-0 rounded-none rounded-t-2xl"
              />
              <div className="flex flex-col gap-2 pl-8 pr-2">
                <h1 className="text-lg text-gray-500">{sdata.type}</h1>
                <p className="font-medium text-zinc-800 text-xl">
                  {sdata.intro}
                </p>
              </div>
              <p className="pl-8 text-gray-500">{sdata.date}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
