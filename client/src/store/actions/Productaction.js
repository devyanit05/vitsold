export const getProducts = () => {
    return async (dispatch) => {
        const response = await fetch(
            "http://localhost:5005/getproducts",
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
                type: 'PRODUCTS',
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