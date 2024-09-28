import { Button } from "../ui/button";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
  suggestions: { id: number; title: string }[];
  handleSuggestionClick: (title: string) => void;
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
  handleSubmit,
  suggestions,
  handleSuggestionClick,
  placeholder,
}) => {
  return (
    <form onSubmit={handleSubmit} className="relative mb-6 flex justify-center">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full md:w-1/2 p-2 border rounded-lg shadow-sm"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button type="submit" variant="secondary" className="ml-2">
        Search
      </Button>

      {/* Suggestions List */}
      {searchQuery && suggestions.length > 0 && (
        <ul className="absolute top-full w-full transform -translate-x-1/2 left-1/2 bg-white border rounded-lg shadow-lg mt-2 z-10">
          {suggestions.slice(0, 5).map((suggestion) => (
            <li
              key={suggestion.id}
              className="p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSuggestionClick(suggestion.title)}
            >
              {suggestion.title}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default SearchBar;
