import { GoHeartFill, GoHeart } from "react-icons/go";

export type FavouriteToggleButtonProps = {
  isFavourite: boolean;
  onToggleFavourite: () => void;
};

const FavouriteToggleButton = ({
  isFavourite,
  onToggleFavourite,
}: FavouriteToggleButtonProps) => {
  return (
    <button
      className="mt-5"
      onClick={onToggleFavourite}
    >
      {isFavourite ? (
        <GoHeartFill className="text-3xl text-p text-like-icon" />
      ) : (
        <GoHeart className="text-3xl" />
      )}
    </button>
  );
};

export default FavouriteToggleButton;
