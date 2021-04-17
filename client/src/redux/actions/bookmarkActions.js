import axios from 'axios'
import * as bookmarksTypes from '../constants/bookmarksConstants'

export const getBookmarks = () => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("authToken")}`
        },
    };

    try {
        
        dispatch({type: bookmarksTypes.GET_BOOKMARKS_REQUEST})

        const {data} = await axios.get('/api/bookmarks/getBookmarks', config)

        dispatch({
            type: bookmarksTypes.GET_BOOKMARKS_SUCCESS,
            payload: data.data
        })

    } catch (error) {
        
        dispatch({
            type: bookmarksTypes.GET_BOOKMARKS_FAIL,
            payload: error.response && error.response.data.message
            ?  error.response.data.message
            :  error.message,
        })

    }
}

export const addBookmark = (article) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("authToken")}`
        },
    };

    try {
        
        dispatch({type: bookmarksTypes.ADD_BOOKMARKS_REQUEST})

        const {data} = await axios.post('/api/bookmarks/addBookmark', article, config)

        dispatch({
            type: bookmarksTypes.ADD_BOOKMARKS_SUCCESS,
            payload: data.data
        })

    } catch (error) {
        
        dispatch({
            type: bookmarksTypes.ADD_BOOKMARKS_FAIL,
            payload: error.response && error.response.data.message
            ?  error.response.data.message
            :  error.message,
        })

    }
}