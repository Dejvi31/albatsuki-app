"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"; // Import the carousel components
import { Button } from "@/components/ui/button"; // Import the Button component from ShadCN

// Define the type for the AMV item
interface AmvItem {
  id: number; // Ensure this is a number
  anime: string;
  title: string;
  music: string;
  thumbnailUrl: string;
}

// Define the props for the CarouselAmv component
interface CarouselAmvProps {
  carouselItems: AmvItem[]; // Ensure carouselItems are of type AmvItem[]
  handleNext: () => void;
  handlePrevious: () => void;
  isNextDisabled: boolean;
  isPreviousDisabled: boolean;
}

const CarouselAmv: React.FC<CarouselAmvProps> = ({
  carouselItems,
  handleNext,
  handlePrevious,
  isNextDisabled,
  isPreviousDisabled,
}) => {
  return (
    <div className="relative w-full">
      <Carousel>
        <div className="flex items-center justify-center overflow-hidden relative">
          <Button
            variant="outline"
            className="absolute left-0 z-10 p-2"
            onClick={handlePrevious}
            disabled={isPreviousDisabled}
          >
            &#8249; {/* Left arrow */}
          </Button>
          <CarouselContent className="mb-2 flex justify-center overflow-x-auto snap-x snap-mandatory">
            {carouselItems.map((item) => (
              <CarouselItem
                key={item.id}
                className="flex flex-col items-center snap-center relative bg-gray-200 rounded-lg overflow-hidden"
              >
                {/* Overlay with anime title */}
                <div className="absolute top-0 left-4 bg-black bg-opacity-70 text-white text-xs p-1 rounded-br-lg">
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <Button
            variant="outline"
            className="absolute right-0 z-10 p-2"
            onClick={handleNext}
            disabled={isNextDisabled}
          >
            &#8250; {/* Right arrow */}
          </Button>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselAmv;
