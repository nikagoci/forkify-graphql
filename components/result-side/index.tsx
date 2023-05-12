import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { IoMdHappy } from "react-icons/io";

import RecipeDetails from "./recipe-details";
import ServingTime from "./serving-time";
import RecipeIngredients from "./recipe-ingredients";
import RecipeCook from "./recipe-cook";
import { GET_SINGLE_RECIPE } from "@/libs/graphql/queries";
import Spinner from "../shared/spinner";

const ResultSide = () => {
  const [recipeId, setRecipeId] = useState("");
  const router = useRouter();

  const { data, loading, error } = useQuery< {Recipe: Recipe} >(GET_SINGLE_RECIPE, {
    variables: { id: recipeId },
  });


  useEffect(() => {
    const { recipe } = router.query as { recipe: string | undefined };
    if (recipe) {
      setRecipeId(recipe);
    }
  }, [router.query.recipe]);

  if(loading && !recipeId){
    return <div />
  }

  if (loading && recipeId) {
    return (
      <div className="flex justify-center pt-12 h-full basis-3/5 bg-gray md:basis-[70%] ">
        <Spinner />
      </div>
    );
  }

  if (error && !recipeId) {
    return (
      <div className="flex  justify-center pt-12 h-full basis-3/5 bg-gray md:basis-[70%] ">
        <div className="flex items-center h-32 gap-x-2">
          <IoMdHappy size={25} className="text-orange" />
          <p className="w-64">
            Start by searching for a recipe or an ingredient. Have fun!
          </p>
        </div>
      </div>
    );
  }

  if(!data){
    router.push("/error");
    return <div />;
  }

  if (error && recipeId && !data) {
    router.push("/error");
    return <div />;
  }

  return (
    <div className="h-full basis-3/5 bg-gray md:basis-[70%] ">
      <RecipeDetails recipe={data.Recipe} />
      <ServingTime recipe={data.Recipe} />
      <RecipeIngredients ingredients={data.Recipe.ingredients} />
      <RecipeCook
        publisher_url={data.Recipe.publisher_url}
        publisher={data.Recipe.publisher}
      />
    </div>
  );
};

export default ResultSide;
