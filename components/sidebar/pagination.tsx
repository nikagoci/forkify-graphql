import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'

const Pagination = () => {
  return (
    <div className="flex justify-between mt-8">
      <button className="text-xs border-none hover:bg-dark_gray gap-x-2 bg-gray text-orange btn">
        <AiOutlineArrowLeft />
        Page 1
      </button>
      <button className="text-xs border-none hover:bg-dark_gray gap-x-2 bg-gray text-orange btn">
        Page 3
        <AiOutlineArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
