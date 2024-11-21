import { FaBook } from "react-icons/fa6";
import { GiSpellBook } from "react-icons/gi";

export type ReadingHistoryButtonProps = {
  isRead: boolean;
  onOpenReviewForm: () => void;
};

const ReadingHistoryButton = ({
  isRead,
  onOpenReviewForm,
}: ReadingHistoryButtonProps) => {
  return (
    <button className="mb-5" onClick={onOpenReviewForm}>
      {isRead ? (
        <GiSpellBook className=" text-4xl" />
      ) : (
        <FaBook className=" text-3xl" />
      )}
    </button>
  );
};

export default ReadingHistoryButton;
