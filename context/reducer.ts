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
    }
}

export default reducer;