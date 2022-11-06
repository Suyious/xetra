import { combineReducers } from "redux";
import { collectionProductsReducer, collectionReducer } from "./collectionReducer";
import { productsReducer,productDetailsReducer, productCreateReducer } from "./productReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
    collection: collectionReducer,
    products: productsReducer,
    productDetails: productDetailsReducer,
    productCreate: productCreateReducer,
    collectionProducts: collectionProductsReducer,
    user: userReducer
});

export default rootReducer;
