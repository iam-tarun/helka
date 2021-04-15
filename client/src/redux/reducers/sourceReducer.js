import * as sourcesTypes from '../constants/sourcesConstants'

export const sourceReducer = (state = { channels : [] }, action) => {
    switch (action.type) {
        case sourcesTypes.GET_SOURCES_REQUEST:
            return {
                loading: true,
            }
        case sourcesTypes.GET_SOURCES_SUCCESS:
            return {
                loading: false,
                channels: action.payload
            }    
        case sourcesTypes.GET_SOURCES_FAIL:
            return {
                loading: false,
                channels: action.payload
            }
        default:
            return state;
    }
}