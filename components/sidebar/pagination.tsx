import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useContext } from "react";
import { Context } from "@/context";

interface Props {
  totalCount: number;
  RECIPE_PER_PAGE: number;
}

const Pagination = ({ totalCount, RECIPE_PER_PAGE }: Props) => {
  const { increasePage, decreasePage, page } = useContext(Context);

  const totalPages = Math.floor(totalCount / RECIPE_PER_PAGE);

  return (
    <div
      className={`${page > 1 ? "justify-between" : "justify-end"} flex  mt-8`}
    >
      {page > 1 && (
        <button
          onClick={decreasePage}
          className="text-xs border-none hover:bg-dark_gray gap-x-2 bg-gray text-orange btn"
        >
          <AiOutlineArrowLeft />
          Page {page - 1}
        </button>
      )}

      {page < totalPages && (
        <button
          onClick={increasePage}
          className="text-xs border-none hover:bg-dark_gray gap-x-2 bg-gray text-orange btn"
        >
          Page {page + 1}
          <AiOutlineArrowRight />
        </button>
      )}
    </div>
  );
};

export default Pagination;
