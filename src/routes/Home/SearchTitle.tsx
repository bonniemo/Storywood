import { useFormInput } from "../../hooks/useFormInput";
import { useSearch } from "../../hooks/useSearch";

type SearchTitleProps = {
  onSearch: (url: string) => void;
}
const SearchTitle = ({ onSearch }:SearchTitleProps) => {
  const baseUrl = "https://openlibrary.org/search.json?title=";
  const searchInput = useFormInput("");
  const { handleClick, searchUrl } = useSearch(baseUrl, searchInput.value);

  const handleSearch = () => {
    handleClick();
    onSearch(searchUrl); // Pass the searchUrl to the parent component (Home)
  };

  return (
    <>
      <input
        className="my-5 px-5 py-2 w-80 border-l-2 border-t-2 border-b-2 border-black"
        type="text"
        placeholder="Title"
        {...searchInput}
      />
      <button
        className="my-5 px-5 py-2 bg-pink-300 border-black border-t-2 border-b-2 border-r-2 rounded-r-md rounded-l-none hover:bg-purple-400"
        onClick={handleSearch}
      >
        Search
      </button>
    </>
  );
};

export default SearchTitle;
