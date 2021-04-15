import * as searchTypes from '../constants/searchConstants'

export const searchResults = (state = {results: []}, action) => {
    switch (action.type) {
        case searchTypes.SEARCH_REQUEST:
            return {
                loading: true
            }   
        case searchTypes.SEARCH_SUCCESS:
            return {
                loading: false,
                results: action.payload
            } 
        case searchTypes.SEARCH_FAIL:
            return {
                loading: false,
                results: action.payload
            }
        default:
            return state;
    }
}