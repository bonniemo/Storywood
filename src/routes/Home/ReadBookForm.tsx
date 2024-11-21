import { useFormInput } from "../../hooks/useFormInput";
import { ReadBookProps } from "../../types/Types";
import { useContext } from "react";
import { GlobalContext } from "../../state/GlobalStateContext";
import FormInput from "../../components/FormInput";
import { getBookInfo } from "../../utils/bookUtils";
import SubmitButton from "../../components/ButtonComponents/SubmitButton";
import { useDispatchAdd } from "../../hooks/useDispatchAdd";

const ReadBookForm = ({ setCurrentReviewKey }: ReadBookProps) => {
  const { state } = useContext(GlobalContext);
  const addReadBook = useDispatchAdd("ADD_READ_BOOK");
  const bookToReview = state.bookToReview;

  const userRating = useFormInput("");
  const userReview = useFormInput("");
  const userNumPages = useFormInput("");

  const handleSubmitRead = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (bookToReview) {
      const bookInfo = getBookInfo(bookToReview);
      const bookReview = {
        ...bookInfo,
        userRating: userRating.value,
        userReview: userReview.value,
        userNumPages: userNumPages.value,
      };
      addReadBook(bookReview);
      setCurrentReviewKey("");    
    }
  };
  if (!bookToReview) {
    return <p>Error: No book selected for review.</p>;
  }

  return (
    <>
      <article className="bg-bg-card max-h-min w-11/12 p-5 rounded-lg flex flex-col leading-loose">
        <h2 className="mb-2 text-lg font-bold">
          Add {bookToReview?.title} by {bookToReview.author_name} to my Reading History
        </h2>
        <section className="flex">
          <img
            className="object-contain object-center rounded my-2 mr-16"
            src={`https://covers.openlibrary.org/b/id/${bookToReview.cover_i}-M.jpg`}
            alt={`Book cover of ${bookToReview.title}`}
          />

        <form className="flex flex-col" onSubmit={handleSubmitRead}>
          <FormInput
            label="Rating between 1 and 10"
            type="number"
            inputProps={{
              ...userRating,
              id: "userRating",
              min: "1",
              max: "10",
            }}
          />
          <FormInput
            label="Your Review"
            type="text"
            inputProps={{ ...userReview, id: "userNumPAges" }}
          />
          <FormInput
            label="Number of pages"
            type="number"
            inputProps={{ ...userNumPages, id: " userNumPages" }}
          />
          <SubmitButton />
        </form>
        </section>

      </article>
    </>
  );
};

export default ReadBookForm;
