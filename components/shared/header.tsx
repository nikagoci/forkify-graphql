import {useContext} from 'react'
import { useQuery } from '@apollo/client'

import { Context } from '@/context'
import { GET_RECIPES } from '@/libs/graphql/queries'
import Sidebar from '../sidebar'
import ResultSide from '../result-side'

const RECIPE_PER_PAGE = 7

const Header = () => {
  const {page} = useContext(Context)

  const skip = RECIPE_PER_PAGE * page-1

  const { data, loading, error } = useQuery(GET_RECIPES, {
    variables: {skip, take: RECIPE_PER_PAGE}
  })



  if(loading){
    return <h1>Loding</h1>
  }

  if(error){
    return <h1>error</h1>
  }

  return (
    <header className='flex w-full header-height'>
        <Sidebar recipes={data.Recipes.recipes} totalCount={data.Recipes.totalCount} RECIPE_PER_PAGE={RECIPE_PER_PAGE} />
        <ResultSide />
    </header>
  )
}

export default Header