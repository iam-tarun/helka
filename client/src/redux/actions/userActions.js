import axios from 'axios'
import * as actionTypes from '../constants/UserConstants'



export const getUser = () => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("authToken")}`
        },
    };
    
    try {
        dispatch({type: actionTypes.GET_USER_REQUEST})

        const {data} = await axios.get("/api/dashboard/", config)

        dispatch({
            type: actionTypes.GET_USER_SUCCESS, 
            payload: {
                _id: data.data._id,
                fullname: data.data.fullname,
                username: data.data.username,
                email: data.data.email,
            }
        })
    } catch (error) {
        localStorage.removeItem("authToken")
        dispatch({
            type: actionTypes.GET_USER_FAIL,
            payload: error.response && error.response.data.message
                ?  error.response.data.message
                :  error.message,
        })
        console.log(error)
    }
}