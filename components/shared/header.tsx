import { useContext } from "react";
import { useQuery } from "@apollo/client";

import { Context } from "@/context";
import { GET_RECIPES } from "@/libs/graphql/queries";
import Sidebar from "../sidebar";
import ResultSide from "../result-side";
import Spinner from "./spinner";

const RECIPE_PER_PAGE = 7;

const Header = () => {
  const { page } = useContext(Context);

  const skip = RECIPE_PER_PAGE * page - 1;

  const { data, loading, error } = useQuery(GET_RECIPES, {
    variables: { skip, take: RECIPE_PER_PAGE },
  });

  if (loading) {
    return (
      <header className="flex w-full header-height">
        <div className="flex pt-12 justify-center basis-2/5 md:basis-[30%] bg-white">
          <Spinner />
        </div>
      </header>
    );
  }

  if (error) {
    return <h1>error</h1>;
  }

  return (
    <header className="flex w-full header-height">
      <Sidebar
        recipes={data.Recipes.recipes}
        totalCount={data.Recipes.totalCount}
        RECIPE_PER_PAGE={RECIPE_PER_PAGE}
      />
      <ResultSide />
    </header>
  );
};

export default Header;
