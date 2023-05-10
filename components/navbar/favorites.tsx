import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Favorites = () => {
  return (
    <div className="transition duration-200 cursor-pointer hover:-translate-y-2" >
      <AiFillHeart size={30} className="text-orange" />
    </div>
  );
};

export default Favorites;
