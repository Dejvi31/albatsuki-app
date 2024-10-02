"use client";
import React from "react";
import useSearchAndFilter from "@/hooks/useSearchAndFilter"; // Use the same hook as Dublim
import { titra } from "@/data/content"; // Import anime content data
import SearchBar from "@/components/Anime/SearchBar";
import FilterButtons from "@/components/Anime/FilterButtons";
import AnimeItem from "@/components/Anime/AnimeItem";
import { usePathname } from "next/navigation";
import { useBreadCrumbs } from "@/hooks/useBreadCrumbs";
import Breadcrumbs from "@/components/Breadcrumbs";

const Titra = () => {
  const {
    filter,
    setFilter,
    searchQuery,
    setSearchQuery,
    submittedQuery,
    searchedContent,
    suggestions,
    handleSubmit,
    handleSuggestionClick,
  } = useSearchAndFilter(titra); // Pass the anime data to the hook

  const currentPath = usePathname(); // Get the current path
  const breadCrumbs = useBreadCrumbs(currentPath); // Generate breadcrumbs
  return (
    <>
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <div className="p-4">
        {/* Search Bar */}
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSubmit={handleSubmit}
          suggestions={suggestions}
          handleSuggestionClick={handleSuggestionClick}
          placeholder="Kerko Anime Titra Shqip"
        />

        {/* Filter Buttons */}
        <FilterButtons filter={filter} setFilter={setFilter} />

        {/* Display the submitted search query */}
        {submittedQuery && (
          <h2 className="text-white text-center mb-2">
            Rezultate per: <strong>{submittedQuery}</strong>
          </h2>
        )}

        {/* Grid displaying the filtered content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {searchedContent.length > 0 ? (
            searchedContent.map((item) => (
              <AnimeItem
                key={item.id}
                title={item.title}
                imgSrc={item.imgSrc}
                urlTitle={item.urlTitle}
                basePath="/anime/titra"
              />
            ))
          ) : (
            <p className="col-span-2 md:col-span-4 text-center text-white">
              Nuk egziston.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Titra;
