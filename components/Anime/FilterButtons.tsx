import { Button } from "../ui/button";

interface FilterButtonsProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ filter, setFilter }) => {
  return (
    <div className="flex justify-center mb-8 space-x-4">
      <Button
        variant={filter === "All" ? "secondary" : "default"}
        onClick={() => setFilter("All")}
      >
        All
      </Button>
      <Button
        variant={filter === "Movie" ? "secondary" : "default"}
        onClick={() => setFilter("Movie")}
      >
        Movies
      </Button>
      <Button
        variant={filter === "Serial" ? "secondary" : "default"}
        onClick={() => setFilter("Serial")}
      >
        Serials
      </Button>
    </div>
  );
};

export default FilterButtons;
