import { COLLECTION_FAIL, COLLECTION_REQUEST, COLLECTION_SUCCESS, CLEAR_ERRORS } from "../types/collectionTypes";
import { COLLECTION_PRODUCTS_REQUEST, COLLECTION_PRODUCTS_SUCCESS, COLLECTION_PRODUCTS_FAIL } from "../types/collectionTypes";

export const collectionReducer = (state = {collections: []}, action) => {
    switch(action.type){
        case COLLECTION_REQUEST:
            return {
                loading: true,
                collections: []
            }
        case COLLECTION_SUCCESS:
            return {
                loading: false,
                collections: action.payload.collections,
            }
        case COLLECTION_FAIL:
            return{
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS: 
            return{
                ...state,
                error: null
            }
        default:
            return state;

    }
}

export const collectionProductsReducer = (state = {products: []}, action) => {
    switch(action.type){
        case COLLECTION_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: []
            }
        case COLLECTION_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
                name: action.payload.name,
                productCount: action.payload.count
            }
        case COLLECTION_PRODUCTS_FAIL:
            return{
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS: 
            return{
                ...state,
                error: null
            }
        default:
            return state;

    }
}

