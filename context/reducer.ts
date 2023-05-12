const reducer = (state: any, action: any) => {
    switch(action.type) {
        case "INCREASE_PAGE":
            return {
                ...state,
                page: state.page + 1
            }

        case "DECREASE_PAGE":
            return {
                ...state,
                page: state.page - 1
            }
        case "ADD_TO_FAVORITES": 
            return {
                ...state,
                recipes: [...state.recipes, action.payload]
            }

        case "REMOVE_FROM_FAVORITES":
            return {
                ...state,
                recipes: state.recipes.filter((recipe: Recipe)  => recipe.id !== action.payload)
            }
        case "ADD_SEARCH_VALUE": 
            return {
                ...state,
                search: action.payload
            } 
    }
}

export default reducer;