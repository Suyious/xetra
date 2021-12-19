import { CLEAR_ERRORS, PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "../types/productTypes"

const initialState = {
    products: []
}

export const productReducer = (state = initialState, action) => {
    switch(action.type){
        case PRODUCT_REQUEST:
            return {
                loading: true,
                products: []
            }
        case PRODUCT_SUCCESS:
            return {
                loading: false,
                products: action.payload.product,
                productCount: action.payload.productCount,
            }
        case PRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;

    }
}