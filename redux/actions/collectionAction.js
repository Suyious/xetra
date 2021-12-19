import { CLEAR_ERRORS, COLLECTION_FAIL, COLLECTION_REQUEST, COLLECTION_SUCCESS } from "../types/collectionTypes"
import { COLLECTION_PRODUCTS_FAIL, COLLECTION_PRODUCTS_REQUEST, COLLECTION_PRODUCTS_SUCCESS } from "../types/collectionTypes"
import axios from "../../utils/axios"

export const getCollections = () => async(dispatch) => {
    try {
        dispatch({
            type: COLLECTION_REQUEST
        })

        const {data} = await axios.get("/api/v1/collections")

        dispatch({
            type: COLLECTION_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: COLLECTION_FAIL,
            payload: error
        })
    }
}

export const getCollectionProducts = (collection_id) => async(dispatch) => {
    try{
        dispatch({
            type: COLLECTION_PRODUCTS_REQUEST
        })
        
        const {data} = await axios.get(`/api/v1/collection/${collection_id}`)

        dispatch({
            type: COLLECTION_PRODUCTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: COLLECTION_PRODUCTS_FAIL,
            payload: error
        })
    }
}

export const clearErrors = () => async(dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}