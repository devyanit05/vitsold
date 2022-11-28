import { combineReducers } from 'redux'
import authReducer from './AuthReducer';
import productsReducer from './ProductReducer';

const RootReducer = combineReducers({
    auth: authReducer,
    products: productsReducer,
    searchProduct: productsReducer
})

export default RootReducer;