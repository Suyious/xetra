import { combineReducers } from "redux";
import { collectionProductsReducer, collectionReducer } from "./collectionReducer";
import { productsReducer,productDetailsReducer } from "./productReducer";

const rootReducer = combineReducers({
    collection: collectionReducer,
    products: productsReducer,
    productDetails: productDetailsReducer,
    collectionProducts: collectionProductsReducer
});

export default rootReducer;