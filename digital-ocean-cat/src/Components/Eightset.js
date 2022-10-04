import React from "react";

export default function Eightset() {
  return (
    <section>
      <div className="flex flex-col items-center gap-8 pb-32 pt-16 px-10 bg-sky-400  bg-opacity-60 bg-[url('https://www.digitalocean.com/_next/static/media/footerWave.40ccbc0c.svg')] bg-repeat-x bg-bottom">
        <div className="flex flex-col gap-3 text-center">
          <h1 className="text-4xl text-sky-900">Start building today</h1>
          <p className="max-w-xl text-gray-600">
            Sign up now and you'll be up and running on DigitalOcean in just
            minutes.
          </p>
        </div>
        <button className="bg-white font-medium border-2 px-4 py-1 rounded-md">
          Sign up to get started
        </button>
      </div>
    </section>
  );
}
