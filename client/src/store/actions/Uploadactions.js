export const uploadProduct = (creds) => {
    return async (dispatch) => {
        const response = await fetch(
            "http://localhost:5000/uploadproduct",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // "auth-token": token
                },
                body: JSON.stringify(creds),
            },
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