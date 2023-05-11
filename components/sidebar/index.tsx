import Pagination from "./pagination";
import SingleRecipe from "./single-recipe";

interface Props {
  recipes: Recipe[]
  totalCount: number
  RECIPE_PER_PAGE: number
}

const Sidebar = ({recipes, totalCount, RECIPE_PER_PAGE}: Props) => {
  return (
    <div className="bg-white basis-2/5 md:basis-[30%] ">
      <div className="flex flex-col h-screen mx-2 mt-4 gap-y-4">
        {recipes.map((recipe) => (
          <SingleRecipe key={recipe.id} recipe={recipe} />
        ))}
        <Pagination totalCount={totalCount} RECIPE_PER_PAGE={RECIPE_PER_PAGE} />
      </div>
    </div>
  );
};

export default Sidebar;
