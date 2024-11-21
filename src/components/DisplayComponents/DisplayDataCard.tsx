import { DisplayDataCardProps } from "../../types/Types";
import FavouriteToggleButton from "../ButtonComponents/FavouriteToggleButton";
import ReadingHistoryButton from "../ButtonComponents/ReadingHistoryButton";

const DisplayDataCard = ({
  imgUrl,
  title,
  subTitle,
  otherInfo,
  userRating,
  userReview,
  userNumPages,
  onDelete,
  isFavourite = false,
  isRead = false,
  onToggleFavourite,
  onOpenReviewForm,
}: DisplayDataCardProps) => {
  return (
    <article className=" bg-bg-card max-h-min w-11/12 p-5 rounded-lg flex justify-between text-text-primary leading-loose">
      <section className="flex">
        <img
          src={imgUrl}
          alt={`Book cover of ${title}`}
          className="h-52 object-contain object-center rounded mr-5"
        />
        <section>
          <h2>{title}</h2>
          <h3>{subTitle}</h3>
          {otherInfo}
      <p>{userRating}</p>
      <p>{userReview}</p>
      <p>{userNumPages}</p>
        </section>
      </section>
      <section className="flex flex-col items-center justify-between">
        {onToggleFavourite && (
          <FavouriteToggleButton
            isFavourite={isFavourite}
            onToggleFavourite={onToggleFavourite}
          />
        )}
        {onOpenReviewForm && (
          <ReadingHistoryButton
            isRead={isRead}
            onOpenReviewForm={onOpenReviewForm}
          />
        )}
        {onDelete && (
          <button
            className="my-5 px-5 py-2 bg-red-400 rounded-lg"
            onClick={onDelete}
          >
            Delete
          </button>
        )}
      </section>
    </article>
  );
};

export default DisplayDataCard;
