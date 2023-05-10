import Image from "next/image";
import RecipeDetails from "./recipe-details";
import ServingTime from "./serving-time";

const recipe = {
  id: "1",
  publisher: "101 Cookbok",
  ingredients: ["bla1", "bla2", "bla3", "bla4"],
  image_url:
    "http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg",
  publisher_url: "http://www.101cookbooks.com",
  title: "best pizza dough recipe",
};

const ResultSide = () => {
  return (
    <div className="basis-3/5">
      <div>
        <RecipeDetails recipe={recipe} />
        <ServingTime />
      </div>
    </div>
  );
};

export default ResultSide;
