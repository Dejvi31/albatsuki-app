"use client";

import { useState } from "react";
import MisionetPopup from "../Misionet/MisionetPopup";
import Link from "next/link";

const HomeGrid = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="grid grid-cols-1 gap-4 w-4/5 max-w-4xl">
      <Link href="/anime">
        <div className="bg-red-500 text-white flex justify-center items-center h-48 rounded-lg text-2xl cursor-pointer">
          Shiko Anime
        </div>
      </Link>
      <div className="grid grid-cols-2 gap-4">
        <Link href="/amv">
          <div className="bg-green-500 text-white flex justify-center items-center h-32 rounded-lg text-lg cursor-pointer">
            Shiko AMV
          </div>
        </Link>
        <Link href="fakte">
          <div className="bg-green-500 text-white flex justify-center items-center h-32 rounded-lg text-lg cursor-pointer">
            Shiko Fakte
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Link href="kuic">
          <div className="bg-yellow-500 text-white flex justify-center items-center h-32 rounded-lg text-lg cursor-pointer">
            Kuic
          </div>
        </Link>
        <div
          onClick={handleOpenModal}
          className="bg-yellow-500 text-white flex justify-center items-center h-32 rounded-lg text-lg cursor-pointer"
        >
          Misionet
        </div>
      </div>
      <MisionetPopup isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
};

export default HomeGrid;
