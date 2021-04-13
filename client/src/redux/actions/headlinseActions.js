import axios from 'axios'
import * as headlinesTypes from '../constants/headlinesConstants'

export const getHeadlines = () => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("authToken")}`
        },
    };
    try {
        dispatch({type: headlinesTypes.GET_HEADLINES_REQUEST})
        
        const {data} = await axios.get("api/news/headlines", config)

        dispatch({
            type: headlinesTypes.GET_HEADLINES_SUCCESS,
            payload: data.data
        })

    } catch (error) {
        dispatch({
            type: headlinesTypes.GET_HEADLINES_FAIL,
            payload: error.response && error.response.data.message
            ?  error.response.data.message
            :  error.message,
        })
    }
}

export const changeHeadlines = (category, country) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("authToken")}`
        },
    };

    console.log(category)

    try {
        
        dispatch({type: headlinesTypes.CHANGE_HEADLINE_REQUEST})

        const {data} = await axios.post("/api/news/changeHeadlinesCategory", {category, country}, config)

        dispatch({
            type: headlinesTypes.CHANGE_HEADLINE_SUCCESS,
            payload: data.data
        })

    } catch (error) {
        
        dispatch({
            type: headlinesTypes.CHANGE_HEADLINE_FAIL,
            payload: error.response && error.response.data.message
            ?  error.response.data.message
            :  error.message,
        })

    }
}