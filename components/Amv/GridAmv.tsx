"use client";
import React from "react";

// Define the type for the AMV item
interface AmvItem {
  id: number;
  anime: string;
  title: string;
  music: string;
  thumbnailUrl: string;
}

// Define the props for the GridAmv component
interface GridAmvProps {
  searchedContent: AmvItem[];
}

const GridAmv: React.FC<GridAmvProps> = ({ searchedContent }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {searchedContent.length > 0 ? (
        searchedContent.map((item) => (
          <div
            key={item.id}
            className="relative bg-gray-200 rounded-lg overflow-hidden"
          >
            {/* Overlay with anime title */}
            <div className="absolute top-0 left-0 bg-black bg-opacity-70 text-white text-xs p-1 rounded-br-lg">
              {item.anime}
            </div>
            {/* Poster Image */}
            <img
              src={item.thumbnailUrl}
              alt={item.title}
              className="w-full h-56 object-cover"
            />

            {/* Overlay with title and music */}
            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 flex flex-col justify-center items-center py-2">
              <p className="text-white text-md font-bold text-center">
                {item.title}
              </p>
              <p className="text-white text-xs text-center">{item.music}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="col-span-2 md:col-span-4 text-center text-white">
          No AMVs found.
        </p>
      )}
    </div>
  );
};

export default GridAmv;
