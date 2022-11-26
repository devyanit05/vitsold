export const uploadProject = (creds) => {
    return async (dispatch) => {
        const response = await fetch("http://localhost:5005/uploadproduct", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(creds),
        });
        const json = await response.json();
        if (!json.error) {
            localStorage.setItem('token', json.token);
            dispatch({
                type: "UPLOAD_SUCCESS",
                authtoken: json.token,
                user: json.user
            });
        } else {
            localStorage.setItem('auth-error', json.error);
            dispatch({
                type: "UPLOAD_ERROR",
                err: json.error,
            });
        }
    };
};