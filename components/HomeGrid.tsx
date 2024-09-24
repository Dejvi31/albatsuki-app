"use client";

import { useState } from "react";
import MisionetPopup from "./MisionetPopup";

const HomeGrid = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="grid grid-cols-1 gap-4 w-4/5 max-w-4xl">
      <div className="bg-red-500 text-white flex justify-center items-center h-48 rounded-lg text-2xl cursor-pointer">
        Shiko Anime
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-green-500 text-white flex justify-center items-center h-32 rounded-lg text-lg cursor-pointer">
          Shiko AMV
        </div>
        <div className="bg-green-500 text-white flex justify-center items-center h-32 rounded-lg text-lg cursor-pointer">
          Shiko Fakte
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-yellow-500 text-white flex justify-center items-center h-32 rounded-lg text-lg cursor-pointer">
          Kuic
        </div>
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
