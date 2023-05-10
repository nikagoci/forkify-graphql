import {
  AiOutlineClockCircle,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { BsPeople, BsBookmark, BsBookmarkFill } from "react-icons/bs";

const ServingTime = () => {
  return (
    <div className="flex items-center justify-around py-12 ">
      <div className="flex items-center justify-center text-xs gap-x-8">
        <div className="flex items-center gap-x-2">
          <AiOutlineClockCircle className="text-orange" size={20} />
          <h4 className="font-semibold">75 MINUTES</h4>
        </div>
        <div className="flex items-center gap-x-2">
          <BsPeople className="text-orange" size={20} />
          <h4 className="font-semibold">4 SERVINGS</h4>
        </div>
        <div className="flex items-center gap-x-1">
          <AiOutlineMinusCircle
            className="transition duration-200 cursor-pointer text-orange hover:-translate-y-2"
            size={20}
          />
          <AiOutlinePlusCircle
            className="transition duration-200 cursor-pointer text-orange hover:-translate-y-2"
            size={20}
          />
        </div>
      </div>
      <div className="p-2 transition duration-200 rounded-full cursor-pointer bg-orange_to_red hover:-translate-y-2">
        <BsBookmark className="text-white " size={20} />
      </div>
    </div>
  );
};

export default ServingTime;
