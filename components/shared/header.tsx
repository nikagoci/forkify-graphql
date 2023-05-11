import Sidebar from '../sidebar'
import ResultSide from '../result-side'

import { useQuery } from '@apollo/client'
import { GET_RECIPES } from '@/libs/graphql/queries'

const Header = () => {
  const { data, loading, error } = useQuery(GET_RECIPES)

  if(loading){
    return <h1>Loading</h1>
  }

  if(error){
    return <h1>error</h1>
  }

  return (
    <header className='flex w-full header-height'>
        <Sidebar recipes={data.Recipes} />
        <ResultSide />
    </header>
  )
}

export default Header