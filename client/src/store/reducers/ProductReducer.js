const initState = {
    products: null,
    error: null
}

const productsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'PRODUCT_FETCHED':
            return {
                ...state,
                products: action.products
            }
        case 'FETCH_SEARCH':
            return {
                ...state,
                searchProduct: action.searchProduct
            }
        case "LOGOUT":
            return {
                ...state,
                products: null,
                error: null,
            }
        default: return state
    }
}

export default productsReducer