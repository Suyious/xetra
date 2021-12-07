import { COLLECTION_FAIL, COLLECTION_REQUEST, COLLECTION_SUCCESS, CLEAR_ERRORS } from "../types/collectionTypes";

const initialState = {
    collections: []
}

export const collectionReducer = (state = initialState, action) => {
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