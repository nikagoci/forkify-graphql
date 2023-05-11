import SingleRecipe from "./single-recipe";

const recipes = [
  {
    id: "1",
    publisher: "101 Cookbok",
    ingredients: ["bla1", "bla2", "bla3", "bla4"],
    image_url:
      "http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg",
    publisher_url: "http://www.101cookbooks.com",
    title: "best pizza dough recipe",
  },
  {
    id: "2",
    publisher: "101 Cookbok",
    ingredients: ["bla1", "bla2", "bla3", "bla4"],
    image_url:
      "http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg",
    publisher_url: "http://www.101cookbooks.com",
    title: "best pizza dough recipe",
  },
  {
    id: "3",
    publisher: "101 Cookbok",
    ingredients: ["bla1", "bla2", "bla3", "bla4"],
    image_url:
      "http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg",
    publisher_url: "http://www.101cookbooks.com",
    title: "best pizza dough recipe",
  },
  {
    id: "4",
    publisher: "101 Cookbok",
    ingredients: ["bla1", "bla2", "bla3", "bla4"],
    image_url:
      "http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg",
    publisher_url: "http://www.101cookbooks.com",
    title: "best pizza dough recipeadasd",
  },
];

const Sidebar = () => {
  return (
    <div className="bg-white basis-2/5 md:basis-[30%] ">
      <div className="flex flex-col mx-2 mt-4 gap-y-4">
        {recipes.map((recipe) => (
          <SingleRecipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
