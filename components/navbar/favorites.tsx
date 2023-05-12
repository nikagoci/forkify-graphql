import { useContext, useState } from "react";
import { AiFillHeart } from "react-icons/ai";

import { Context } from "@/context";
import SingleRecipe from "../sidebar/single-recipe";

const Favorites = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { recipes } = useContext(Context);
  return (
    <div className="relative">
      {recipes.length > 0 && (
        <AiFillHeart
          onClick={() => setShowMenu((prev) => !prev)}
          size={30}
          className="cursor-pointer text-orange"
        />
      )}

      {showMenu && (
        <div className="absolute top-[40px] -right-[20px] z-30 py-6 bg-white">
          <div className="flex flex-col w-full gap-y-3">
            {recipes.map((recipe) => (
              <SingleRecipe setShowMenu={setShowMenu} px recipe={recipe} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorites;
