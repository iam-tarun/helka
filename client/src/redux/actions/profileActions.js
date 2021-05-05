import axios from 'axios'
import * as profileTypes from '../constants/profileConstants'

export const getProfile = () => async (dispatch) => {
    const config = {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };
    try {
        dispatch({type: profileTypes.GET_PROFILE_REQUEST})
        const {data} = await axios.get("/api/profile/profile", config)
        dispatch({type: profileTypes.GET_PROFILE_SUCCESS, payload: data.data })
    } catch (error) {
        dispatch({type: profileTypes.GET_PROFILE_FAIL, payload: error.response && error.response.data.message
            ?  error.response.data.message
            :  error.message,})
    }
}

export const createProfile = (profile) => async (dispatch) => {
    const config = {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };
    try {
        dispatch({type: profileTypes.CREATE_PROFILE_REQUEST})
        const {data} = await axios.post("/api/profile/create", profile, config)
        dispatch({type: profileTypes.CREATE_PROFILE_SUCCESS, payload: data.data})
    } catch (error) {
        dispatch({type: profileTypes.CREATE_PROFILE_FAIL, payload: error.response && error.response.data.message
            ?  error.response.data.message
            :  error.message,})
    }

}
export const updateProfile = (profile) => async (dispatch) => {
    const config = {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };
    try {
        dispatch({type: profileTypes.UPDATE_PROFILE_REQUEST})
        const {data} = await axios.post("/api/profile/update", profile, config)
        console.log(data.data)
        dispatch({type: profileTypes.UPDATE_PROFILE_SUCCESS, payload: data.data})
    } catch (error) {
        dispatch({type: profileTypes.UPDATE_PROFILE_FAIL, payload: error.response && error.response.data.message
            ?  error.response.data.message
            :  error.message,})
    }

}