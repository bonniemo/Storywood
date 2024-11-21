type SearchFieldProps = {
  searchType: "Title" | "Author";
  inputValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  onSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SearchField = ({
  searchType,
  inputValue,
  onInputChange,
  onSearch,
  onSelectChange,
}: SearchFieldProps) => {
  return (
    <div className="my-5 rounded-md border-2 w-2/4">
      <select
        name="searchType"
        value={searchType}
        onChange={onSelectChange}
        className="px-3 py-2 w-2/12 bg-white border-r-2 focus:outline-none"
      >
        <option value="Title">Title</option>
        <option value="Author">Author</option>
      </select>
      <input
        type="text"
        placeholder={`Search ${searchType}`}
        value={inputValue}
        onChange={onInputChange}
        className="px-5 py-2 w-8/12 focus:outline-none"
      />
      <button
        onClick={onSearch}
        className="px-5 py-2 w-2/12 bg-bg-primary text-text-primary"
      >
        Search
      </button>
    </div>
  );
};

export default SearchField;
