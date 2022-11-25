export const login = (creds) => {
    return async (dispatch) => {
      const response = await fetch("http://localhost:5005/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(creds),
      });
      const json = await response.json();
      // console.log(json)
      if (!json.error) {
        localStorage.setItem('token', json.token);
        dispatch({
          type: "LOGIN_SUCCESS",
          authtoken: json.token,
          user:json.user
        });
      } else {
        localStorage.setItem('auth-error', json.error);
        dispatch({
          type: "LOGIN_ERROR",
          err: json.error,
        });
      }
    };
  };
  
  export const createUser = (creds) => {
    return async (dispatch) => {
      const response = await fetch("http://localhost:5005/signup", {
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
          type: "LOGIN_SUCCESS",
          authtoken: json.token,
          user:json.user
        });
      } else {
        localStorage.setItem('auth-error', json.error);
        dispatch({
          type: "LOGIN_ERROR",
          err: json.error,
        });
      }
    };
  };
  
  
  export const logout = () => {
    localStorage.clear()
    return({
        type: "LOGOUT"
      })
  }