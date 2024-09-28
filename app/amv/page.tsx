"use client";
import useSearchAndFilter from "@/hooks/useSearchAndFilter";
import { amvs } from "@/data/content"; // AMV content data
import SearchBar from "@/components/Anime/SearchBar";
import useCarousel from "@/hooks/useCarousel"; // Import the custom carousel hook
import CarouselAmv from "@/components/Amv/CarouselAmv";
import GridAmv from "@/components/Amv/GridAmv";

const Amv = () => {
  const {
    searchQuery,
    setSearchQuery,
    submittedQuery,
    searchedContent,
    suggestions,
    handleSubmit,
    handleSuggestionClick,
  } = useSearchAndFilter(amvs); // Pass the AMV data to the hook

  // Use the custom carousel hook with the searched content
  const itemsPerPage = 1; // Number of items to show at a time
  const {
    carouselItems,
    handleNext,
    handlePrevious,
    isPreviousDisabled,
    isNextDisabled,
  } = useCarousel(searchedContent, itemsPerPage); // Call the custom hook

  return (
    <div className="p-4">
      {/* Search Bar */}
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSubmit={handleSubmit}
        suggestions={suggestions}
        handleSuggestionClick={handleSuggestionClick}
        placeholder="Kerko AMV"
      />

      {/* Display the submitted search query */}
      {submittedQuery && (
        <h2 className="text-white text-center mb-2">
          Results for: <strong>{submittedQuery}</strong>
        </h2>
      )}

      {/* Carousel for AMVs */}
      {!submittedQuery &&
        carouselItems.length > 0 && ( // Check for submittedQuery
          <CarouselAmv
            carouselItems={carouselItems}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            isNextDisabled={isNextDisabled}
            isPreviousDisabled={isPreviousDisabled}
          />
        )}

      {/* Grid displaying the filtered content */}
      <GridAmv searchedContent={searchedContent} />
    </div>
  );
};

export default Amv;
