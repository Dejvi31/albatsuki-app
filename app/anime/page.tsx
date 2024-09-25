"use client";

import Link from "next/link";

const Anime = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-center text-gray-300 mb-8">
        Shiko Anime
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full px-4">
        <Link href="/anime/dublim">
          <div className="bg-green-500 text-white flex justify-center items-center h-32 rounded-lg text-lg cursor-pointer">
            Dublim Shqip
          </div>
        </Link>
        <Link href="/anime/titra">
          <div className="bg-yellow-500 text-white flex justify-center items-center h-32 rounded-lg text-lg cursor-pointer">
            Titra Shqip
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Anime;
