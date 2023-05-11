import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import RecipeDetails from "./recipe-details";
import ServingTime from "./serving-time";
import RecipeIngredients from "./recipe-ingredients";
import RecipeCook from "./recipe-cook";
import { useQuery } from "@apollo/client";
import { GET_SINGLE_RECIPE } from "@/libs/graphql/queries";

const recipe = {
  id: "1",
  publisher: "101 Cookbok",
  ingredients: [
    "bla1adssssssssssssssssssssssssss",
    "blaadsssssssssss2",
    "blaasddd3",
    "baa aaaa asad ddddddddddddddddd ddddddd4",
  ],
  image_url:
    "http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg",
  publisher_url: "http://www.101cookbooks.com",
  title: "best pizza dough recipe",
};

const ResultSide = () => {
  const [recipeId, setRecipeId] = useState("")
  const {data,loading, error} = useQuery(GET_SINGLE_RECIPE, {
    variables: {id: recipeId}
  })

  const router = useRouter();

  useEffect(() => {
    const {recipe} = router.query as {recipe: string | undefined}
    if(recipe) {
      setRecipeId(recipe)
    } 

  }, [router.query.recipe]);


  if(loading) {
    return <h1>Loading</h1>
  }

  if(error) {
    return <h1>error</h1>
  }

  return (
    <div className="h-full basis-3/5 bg-gray md:basis-[70%] ">
      <div>
        <RecipeDetails recipe={data?.Recipe} />
        <ServingTime />
        <RecipeIngredients ingredients={data?.Recipe?.ingredients} />
        <RecipeCook
          publisher_url={data?.Recipe?.publisher_url}
          publisher={data?.Recipe?.publisher}
        />
      </div>
    </div>
  );
};

export default ResultSide;
