import { combineReducers } from "redux";
import { collectionProductsReducer, collectionReducer } from "./collectionReducer";
import { productsReducer,productDetailsReducer } from "./productReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
    collection: collectionReducer,
    products: productsReducer,
    productDetails: productDetailsReducer,
    collectionProducts: collectionProductsReducer,
    user: userReducer
});

export default rootReducer;