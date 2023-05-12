import { useContext } from "react";
import {BiError} from 'react-icons/bi'

import { Context } from "@/context";
import Pagination from "./pagination";
import SingleRecipe from "./single-recipe";
import Spinner from "../shared/spinner";

interface Props {
  recipes: Recipe[]
  totalCount: number
  RECIPE_PER_PAGE: number
  loading: boolean
}

const Sidebar = ({recipes, totalCount, RECIPE_PER_PAGE, loading}: Props) => {
  const {search} = useContext(Context)

  if(!search) {
    return <div className="bg-white basis-2/5 md:basis-[30%] "></div>
  }

  if(search && loading) {
      return (
        <header className="bg-white basis-2/5 md:basis-[30%]">
          <div className="flex justify-center pt-12 ">
            <Spinner />
          </div>
        </header>
      );
  }

  if(recipes.length < 1) {
    return (
      <header className="bg-white basis-2/5 md:basis-[30%]">
         <div className="flex items-center justify-center h-32 gap-x-2">
          <BiError size={25} className="text-orange" />
          <p className="w-48">
            Start by searching for a recipe or an ingredient. Have fun!
          </p>
        </div>
        </header>
    )
  }

  return (
    <div className="bg-white basis-2/5 md:basis-[30%] ">
      <div className="flex flex-col mx-2 mt-4 gap-y-4">
        {recipes.map((recipe) => (
          <SingleRecipe key={recipe.id} recipe={recipe} />
        ))}
        <Pagination totalCount={totalCount} RECIPE_PER_PAGE={RECIPE_PER_PAGE} />
      </div>
    </div>
  );
};

export default Sidebar;
