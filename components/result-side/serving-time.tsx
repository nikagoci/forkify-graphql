import { Context } from "@/context";
import { useEffect, useState, useContext } from "react";

import {
  AiOutlineClockCircle,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { BsPeople, BsBookmark, BsBookmarkFill } from "react-icons/bs";

interface Props {
  recipe: Recipe;
}

const ServingTime = ({ recipe }: Props) => {
  const [serving, setServing] = useState(4);
  const [timeLimit, setTimeLimit] = useState(0);
  const {recipes, addToFavorites, removeFromFavorites} = useContext(Context);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (recipe.ingredients.length >= 0 && recipe.ingredients.length <= 10) {
      setTimeLimit(30);
    } else if (
      recipe.ingredients.length >= 10 &&
      recipe.ingredients.length <= 15
    ) {
      setTimeLimit(45);
    } else if (
      recipe.ingredients.length >= 15 &&
      recipe.ingredients.length <= 25
    ) {
      setTimeLimit(60);
    } else if (
      recipe.ingredients.length >= 25 &&
      recipe.ingredients.length <= 35
    ) {
      setTimeLimit(75);
    }
  }, [recipe.ingredients]);

  useEffect(() => {
    for (let i = 0; i < recipes.length; i++) {
      const signleRecipe: Recipe = recipes[i];

      if (signleRecipe.id === recipe.id) {
        setIsFavorite(true)
        break;
      } else {
        setIsFavorite(false)
      }
    }
  }, [recipes, recipe])

  const handleIncrease = () => {
    setServing((prev) => prev + 1);
    if (serving === 20) {
      setServing(20);
    }
  };
  const handleDecrease = () => {
    setServing((prev) => prev - 1);
    if (serving === 1) {
      setServing(1);
    }
  };

  const handleAddFavorite = () => {
    setIsFavorite(true);
    addToFavorites(recipe);
  };

  const handleRemoveFavorite = () => {
    setIsFavorite(false);
    removeFromFavorites(recipe.id);
  };

  return (
    <div className="flex items-center justify-around py-12 ">
      <div className="flex items-center justify-center text-xs gap-x-8">
        <div className="flex items-center gap-x-2">
          <AiOutlineClockCircle className="text-orange" size={20} />
          <h4 className="font-semibold">{timeLimit} MINUTES</h4>
        </div>
        <div className="flex items-center gap-x-2">
          <BsPeople className="text-orange" size={20} />
          <h4 className="font-semibold">{serving} SERVINGS</h4>
        </div>
        <div className="flex items-center gap-x-1">
          <AiOutlineMinusCircle
            onClick={handleDecrease}
            className="transition duration-200 cursor-pointer text-orange hover:-translate-y-2"
            size={20}
          />
          <AiOutlinePlusCircle
            onClick={handleIncrease}
            className="transition duration-200 cursor-pointer text-orange hover:-translate-y-2"
            size={20}
          />
        </div>
      </div>
      {!isFavorite ? (
        <div
          onClick={handleAddFavorite}
          className="p-2 transition duration-200 rounded-full cursor-pointer bg-orange_to_red hover:-translate-y-2"
        >
          <BsBookmark className="text-white " size={20} />
        </div>
      ) : (
        <div
          onClick={handleRemoveFavorite}
          className="p-2 transition duration-200 rounded-full cursor-pointer bg-orange_to_red hover:-translate-y-2"
        >
          <BsBookmarkFill className="text-white " size={20} />
        </div>
      )}
    </div>
  );
};

export default ServingTime;
