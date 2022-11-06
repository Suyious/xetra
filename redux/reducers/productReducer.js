import { 
  CLEAR_ERRORS,
  PRODUCTS_FAIL,
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST 
} from "../types/productTypes"

export const productsReducer = (state = {products: []}, action) => {
  switch(action.type){
    case PRODUCTS_REQUEST:
      return {
        loading: true,
        products: []
      }
    case PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload.product,
        productCount: action.payload.productCount,
        resultsInQuery: action.payload.resultsInQuery
      }
    case PRODUCTS_FAIL:
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

export const productDetailsReducer = (state={product: {}}, action) => {
  switch(action.type){
    case PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
        product: []
      }
    case PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload
      }
    case PRODUCT_DETAILS_FAIL:
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

export const productCreateReducer = (state = {product: {}}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return {
        loading: true,
        product: []
      }
    case PRODUCT_CREATE_SUCCESS:
      return {
        loading: false,
        product: action.payload
      }
    case PRODUCT_CREATE_FAIL:
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
