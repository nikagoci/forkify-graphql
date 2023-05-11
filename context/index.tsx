import { createContext, useReducer, ReactNode} from 'react'
import reducer from './reducer'

const initialState = {
    page: 1,
    increasePage: () => {},
    decreasePage: () => {}
}

export const Context = createContext(initialState)

interface ValueInterface {
    page: number
    increasePage: () => void
    decreasePage: () => void
}

export const ContextProvider = ({children}: {children: ReactNode}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const increasePage = () => {
        dispatch({ type: "INCREASE_PAGE"})
    }

    const decreasePage = () => {
        dispatch({ type: "DECREASE_PAGE"})
    }

    const value: ValueInterface = {
        page: state.page,
        increasePage,
        decreasePage
    }

    return <Context.Provider value={value}>
        {children}
    </Context.Provider>
}
