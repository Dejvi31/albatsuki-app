"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";

interface AnimeDetailsProps {
  animeData: {
    title: string;
    imgSrc: string;
    videoSrc: string | string[]; // videoSrc can be a single string or an array
    description: string;
    type: string; // "Serial" or "Movie"
    episodes?: string[];
  };
}

const AnimeDetails: React.FC<AnimeDetailsProps> = ({ animeData }) => {
  // State to manage the current episode index
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);

  // Function to handle the Previous button click
  const handlePrevious = () => {
    if (currentEpisodeIndex > 0) {
      setCurrentEpisodeIndex(currentEpisodeIndex - 1);
    }
  };

  // Function to handle the Next button click
  const handleNext = () => {
    if (currentEpisodeIndex < (animeData.episodes?.length || 0) - 1) {
      setCurrentEpisodeIndex(currentEpisodeIndex + 1);
    }
  };

  // Determine the current video source based on type
  let currentVideoSrc: string;

  if (animeData.type === "Serial" && Array.isArray(animeData.videoSrc)) {
    currentVideoSrc = animeData.videoSrc[currentEpisodeIndex]; // Use the current episode's video
  } else {
    currentVideoSrc = animeData.videoSrc as string; // For movies, just use the single videoSrc
  }

  return (
    <div className="p-4 text-white">
      <div className="flex flex-col mb-4">
        <div className="flex w-full mb-4">
          <img
            src={animeData.imgSrc}
            alt={animeData.title}
            className="w-1/3 h-auto mr-4"
          />
          <div className="w-2/3">
            <h1 className="text-xl font-bold">{animeData.title}</h1>
            <p className="mt-2">{animeData.description}</p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <iframe
          src={currentVideoSrc}
          width="100%"
          height="500px"
          allowFullScreen
        ></iframe>
      </div>

      {animeData.type === "Serial" && (
        <div className="flex flex-col items-center mt-4">
          <p className="mb-2">
            Duke shikuar: Episode {currentEpisodeIndex + 1}
          </p>
          <div className="flex space-x-4 mb-2">
            <Button
              onClick={handlePrevious}
              className="bg-blue-500 hover:bg-blue-700"
            >
              Previous
            </Button>
            <Button
              onClick={handleNext}
              className="bg-blue-500 hover:bg-blue-700"
            >
              Next
            </Button>
          </div>

          {animeData.episodes && (
            <div className="mt-4 flex flex-wrap justify-center">
              <h2 className="text-lg font-semibold text-center w-full">
                Episodet:
              </h2>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {animeData.episodes.map((episode, index) => (
                  <Button
                    key={index}
                    variant="secondary"
                    onClick={() => setCurrentEpisodeIndex(index)} // Set the episode index on button click
                    className={`hover:underline ${
                      index === currentEpisodeIndex ? "font-bold" : ""
                    }`}
                  >
                    {episode}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AnimeDetails;
