import { combineReducers } from "redux";
import { collectionProductsReducer, collectionReducer } from "./collectionReducer";
import { productReducer } from "./productReducer";

const rootReducer = combineReducers({
    collection: collectionReducer,
    product: productReducer,
    collectionProducts: collectionProductsReducer
});

export default rootReducer;