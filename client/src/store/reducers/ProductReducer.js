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
        case 'GET_CAT':
            let prod=state.products.filter((product) => {
                return product.title.category === action.category
            })

            return {
                ...state,
                products:prod
            }
        default: return state
    }
}

export default productsReducer