import * as bookmarksTypes from '../constants/bookmarksConstants'

export const bookmarks = (state = {bookmarks:[]}, action) => {
    switch (action.type) {
        case bookmarksTypes.GET_BOOKMARKS_REQUEST:
            return {
                loading: true
            }
        case bookmarksTypes.GET_BOOKMARKS_SUCCESS:
            return {
                loading: false,
                bookmarks: action.payload
            }
        case bookmarksTypes.GET_BOOKMARKS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case bookmarksTypes.ADD_BOOKMARKS_REQUEST:
            return {
                loading: true
            }
        case bookmarksTypes.ADD_BOOKMARKS_SUCCESS:
            return {
                loading: false,
                bookmarks: [...bookmarks, action.payload]
            }
        case bookmarksTypes.ADD_BOOKMARKS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case bookmarksTypes.REMOVE_BOOKMARK_REQUEST:
            return {
                loading: true
            }
        case bookmarksTypes.REMOVE_BOOKMARK_SUCCESS:
            return {
                loading: false,
                bookmarks: bookmarks.filter(bookmark => bookmark._id === action.payload)
            }
        case bookmarksTypes.REMOVE_BOOKMARK_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case bookmarksTypes.REMOVE_ALL_BOOKMARKS_REQUEST:
            return {
                loading: true,
            }
        case bookmarksTypes.REMOVE_ALL_BOOKMARKS_SUCCESS:
            return {
                loading: false,
                bookmarks: []
            }
        case bookmarksTypes.REMOVE_ALL_BOOKMARKS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}