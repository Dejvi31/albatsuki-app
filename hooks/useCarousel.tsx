import { useState } from "react";

type CarouselItem = {
  id: number; // Adjust the type based on your actual item structure
  thumbnailUrl: string;
  title: string;
  anime: string;
  music: string;
  // Add any other properties your items might have
};

const useCarousel = (items: CarouselItem[], itemsPerPage: number) => {
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const carouselItems = items.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const isPreviousDisabled = currentPage === 0;
  const isNextDisabled = currentPage >= totalPages - 1;

  return {
    carouselItems,
    handleNext,
    handlePrevious,
    isPreviousDisabled,
    isNextDisabled,
  };
};

export default useCarousel;
