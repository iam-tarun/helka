import * as headlinesTypes from '../constants/headlinesConstants'

export const getHeadlines = (state = { headlines: [] }, action) => {
    switch (action.type) {
        case headlinesTypes.GET_HEADLINES_REQUEST:
            return {
                loading: true,
            }
        case headlinesTypes.GET_HEADLINES_SUCCESS:
            return {
                loading: false,
                headlines: action.payload
            }
        case headlinesTypes.GET_HEADLINES_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case headlinesTypes.CHANGE_HEADLINE_REQUEST:
            return {
                loading: true,
            }
        case headlinesTypes.CHANGE_HEADLINE_SUCCESS:
            return {
                loading: false,
                headlines: action.payload
            }
        case headlinesTypes.CHANGE_HEADLINE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}
