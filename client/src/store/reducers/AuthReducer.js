const initState = {
    token:null,
    user: null,
    error: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN_ERROR":
            return{
                ...state,
                error:action.err
            }

        case "LOGIN_SUCCESS":
            return{
                ...state,
                token:action.authtoken,
                user:action.user,
                error:null,
            }

        case "LOGOUT":
            return{
                ...state,
                token:null,
                error:null,
                user:null
            }
        default: return state
    }
}

export default authReducer