import Image from "next/image";
import React from "react";

interface Props {
  recipe: Recipe;
}

const RecipeDetails = ({ recipe }: Props) => {
  return (
    <div className="relative">
      <Image
        className="w-full h-64"
        src={recipe.image_url}
        alt={recipe.title}
        width={500}
        height={256}
      />
      <div className="absolute z-20 -translate-x-1/2 bottom-4 left-1/2">
        <div className="px-3 py-4 -skew-y-6 bg-orange_to_red w-fit box-decoration-slice">
          <h2 className="text-2xl text-center text-white uppercase ">
            {recipe.title}
          </h2>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full opacity-50 bg-orange_to_red" />
    </div>
  );
};

export default RecipeDetails;
