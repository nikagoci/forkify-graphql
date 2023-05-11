import SingleRecipe from "./single-recipe";

interface Props {
  recipes: Recipe[]
}

const Sidebar = ({recipes}: Props) => {
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
