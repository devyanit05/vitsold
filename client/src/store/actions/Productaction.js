export const getProducts = () => {
    return async (dispatch) => {
        const response = await fetch(
            "https://sellsoldered-api.onrender.com/getproducts",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    // "auth-token": token
                },
            }
        );
        const json = await response.json();
        console.log(json);
        if (!json.error) {
            dispatch({
                type: 'PRODUCT_FETCHED',
                products: json,
            })
        }
        else {
            localStorage.setItem('product-error', json.error);
            dispatch({
                type: 'PRODUCT_ERROR',
                error: json.error
            })
        }
    }
}


export const searchProduct = (creds) => {
    return async (dispatch) => {
        const response = await fetch(
            "https://sellsoldered-api.onrender.com/search",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // "auth-token": token
                },
                body: JSON.stringify(creds)
            }
        );
        const json = await response.json();
        console.log(json);
        dispatch({
            type: 'FETCH_SEARCH',
            searchProduct: json,
        })
    }
}