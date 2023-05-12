import { useContext } from "react";
import { useQuery } from "@apollo/client";

import { Context } from "@/context";
import { GET_RECIPES } from "@/libs/graphql/queries";
import Sidebar from "../sidebar";
import ResultSide from "../result-side";
import { useRouter } from "next/router";

const RECIPE_PER_PAGE = 7;

const Header = () => {
  const { page, search } = useContext(Context);
  const router = useRouter()

  const skip = RECIPE_PER_PAGE * page - 1;

  // if(!skip || !search ) {
  //   return <header className="flex w-full header-height">
  //     <div className="bg-white basis-2/5 md:basis-[30%] "></div>
  //     <ResultSide />
  //   </header>
  // }

  const { data, loading, error } = useQuery(GET_RECIPES, {
    variables: { skip, take: RECIPE_PER_PAGE, info: search },
    skip: !skip && !search
  });

  if (error) {
    router.push('/error')
    return <div />;
  }

  return (
    <header className="flex w-full header-height">
      <Sidebar
        recipes={data?.Recipes.recipes}
        totalCount={data?.Recipes.totalCount}
        RECIPE_PER_PAGE={RECIPE_PER_PAGE}
        loading={loading}
      />
      <ResultSide />
    </header>
  );
};

export default Header;
