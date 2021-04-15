import axios from 'axios'
import * as searchTypes from '../constants/searchConstants'

export const search = (q) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("authToken")}`
        },
    };
    try {
        dispatch({type: searchTypes.SEARCH_REQUEST})

        const {data} = await axios.post("/api/news/search", {q}, config)
        console.log(data)
        dispatch({
            type: searchTypes.SEARCH_SUCCESS,
            payload: data.data,
        })

    } catch (error) {
        dispatch({
            type: searchTypes.SEARCH_FAIL,
            payload: error.response && error.response.data.message
            ?  error.response.data.message
            :  error.message,
        })
    }
}