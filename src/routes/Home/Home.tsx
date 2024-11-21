import { useState } from "react";
import bg_desktop from "../../Assets/img-desktop.png";
import FetchData from "../../components/FetchData";
import { Author, Book } from "../../types/Types";
import AuthorSearchResult from "./AuthorSearchResult";
import SearchField from "./SearchField";
import TitleSearchResult from "./TitleSearchResult";

const Home = () => {
  const [searchType, setSearchType] = useState<"Title" | "Author">("Title");
  const [searchUrl, setSearchUrl] = useState("");
  const [searchInputs, setSearchInputs] = useState({
    Title: "",
    Author: "",
  });

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value as "Title" | "Author";
    setSearchType(selectedValue);
    setSearchUrl("");
    setSearchInputs({
      ...searchInputs,
      [selectedValue]: "",
    });
  };

  const handleSearch = () => {
    const baseUrl =
      searchType === "Title"
        ? "https://openlibrary.org/search.json?title="
        : "https://openlibrary.org/search/authors.json?q=";

    const searchValue = searchInputs[searchType];
    if (searchValue.trim() !== "") {
      setSearchUrl(`${baseUrl}${encodeURIComponent(searchValue)}`);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchInputs({
      ...searchInputs,
      [searchType]: value,
    });
  };

  return (
    <>
      <article className="text-text-secondary grid grid-cols-1">
        <img
          src={bg_desktop}
          alt=""
          className="col-start-1 row-start-1 w-full"
        />
        <section className="col-start-1 row-start-1 row-end-2 grid content-center">
          <h1 className="text-center text-h1 mb-10">Storywood</h1>
          <p className="text-hero_p w-2/4 mx-auto mb-10">
            Explore a magical forest of books and authors, save your favorites
            and track your reading history. Dive into the enchantment of
            reading!
          </p>
          <section className="flex justify-center">
            <SearchField
              searchType={searchType}
              inputValue={searchInputs[searchType]}
              onInputChange={handleInputChange}
              onSearch={handleSearch}
              onSelectChange={handleSelect}
            />
          </section>
        </section>
      </article>
      <section className="p-4">
        {searchUrl &&
          (searchType === "Title" ? (
            <FetchData<Book>
              componentProp={TitleSearchResult}
              url={searchUrl}
            />
          ) : (
            <FetchData<Author>
              componentProp={AuthorSearchResult}
              url={searchUrl}
            />
          ))}
      </section>
    </>
  );
};

export default Home;
