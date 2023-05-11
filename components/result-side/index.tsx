import RecipeDetails from "./recipe-details";
import ServingTime from "./serving-time";
import RecipeIngredients from "./recipe-ingredients";
import RecipeCook from "./recipe-cook";

const recipe = {
  id: "1",
  publisher: "101 Cookbok",
  ingredients: ["bla1adssssssssssssssssssssssssss", "blaadsssssssssss2", "blaasddd3", "baa aaaa asad ddddddddddddddddd ddddddd4"],
  image_url:
    "http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg",
  publisher_url: "http://www.101cookbooks.com",
  title: "best pizza dough recipe",
};

const ResultSide = () => {
  return (
    <div className="h-full basis-3/5 bg-gray md:basis-[70%] ">
      <div>
        <RecipeDetails recipe={recipe} />
        <ServingTime />
        <RecipeIngredients ingredients={recipe.ingredients} />
        <RecipeCook publisher_url={recipe.publisher_url} publisher={recipe.publisher} />
      </div>
    </div>
  );
};

export default ResultSide;
