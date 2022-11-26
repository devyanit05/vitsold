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

        default: return state
    }
}

export default productsReducer