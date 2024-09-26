import { useState } from "react";
import { content } from "@/data/content"; // Adjust the path according to your project structure

const useAnimeSearch = () => {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");

  // Filter the content based on user selection (All, Movies, Serials)
  const filteredContent =
    filter === "All" ? content : content.filter((item) => item.type === filter);

  // Filter content further based on the submitted search query
  const searchedContent = filteredContent.filter((item) =>
    item.title.toLowerCase().includes(submittedQuery.toLowerCase())
  );

  // Suggestions based on the search query before submitting
  const suggestions = content.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to handle the form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedQuery(searchQuery);
    setSearchQuery(""); // Clear the search input after submitting
  };

  // Function to handle clicking on a suggestion
  const handleSuggestionClick = (title: string) => {
    setSearchQuery(""); // Clear the search input
    setSubmittedQuery(title); // Perform the search with the selected title
  };

  return {
    filter,
    setFilter,
    searchQuery,
    setSearchQuery,
    submittedQuery,
    searchedContent,
    suggestions,
    handleSubmit,
    handleSuggestionClick,
  };
};

export default useAnimeSearch;
