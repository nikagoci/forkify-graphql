import { createContext, useReducer, ReactNode} from 'react'
import reducer from './reducer'

const initialState = {
    page: 1,
    recipes: [],
    increasePage: () => {},
    decreasePage: () => {},
    addToFavorites: (recipe: Recipe) => {},
    removeFromFavorites: (id: string) => {},
}

export const Context = createContext(initialState)

interface ValueInterface {
    page: number
    recipes: []
    increasePage: () => void
    decreasePage: () => void
    addToFavorites: (recipe: Recipe) => void
    removeFromFavorites: (id: string) => void
}

export const ContextProvider = ({children}: {children: ReactNode}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const increasePage = () => {
        dispatch({ type: "INCREASE_PAGE"})
    }

    const decreasePage = () => {
        dispatch({ type: "DECREASE_PAGE"})
    }

    const addToFavorites = (recipe: Recipe) => {
        dispatch({ type: "ADD_TO_FAVORITES", payload: recipe})
    } 

    const removeFromFavorites = (id: string) => {
        dispatch({ type: "REMOVE_FROM_FAVORITES", payload: id})
    }

    const value: ValueInterface = {
        page: state.page,
        recipes: state.recipes,
        increasePage,
        decreasePage,
        addToFavorites,
        removeFromFavorites
    }

    return <Context.Provider value={value}>
        {children}
    </Context.Provider>
}
