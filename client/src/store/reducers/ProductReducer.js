const initState = {
    products: null,
    error: null
}

const productsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'PRODUCTS':
            return {
                ...state,
                products: action.products
            }
        case "LOGOUT":
            return{
                ...state,
                products:null,
                error:null,
            }
        default: return state
    }
}

export default productsReducer