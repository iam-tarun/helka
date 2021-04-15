import * as sourcesTypes from '../constants/sourcesConstants'
import axios from 'axios'

export const getChannels = () => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("authToken")}`
        },
    };

    try {
        
        dispatch({type: sourcesTypes.GET_SOURCES_REQUEST})

        const {data} = await axios.get("/api/news/channels", config)

        dispatch({
            type: sourcesTypes.GET_SOURCES_SUCCESS,
            payload: data.data
        })

    } catch (error) {
        dispatch({
            type: sourcesTypes.GET_SOURCES_FAIL,
            payload:  error.response && error.response.data.message
            ?  error.response.data.message
            :  error.message,
        })
    }
}