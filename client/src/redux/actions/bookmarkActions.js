import axios from "axios";
import * as bookmarksTypes from "../constants/bookmarksConstants";

export const getBookmarks = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  };

  try {
    dispatch({ type: bookmarksTypes.GET_BOOKMARKS_REQUEST });

    const { data } = await axios.get("/api/bookmarks/getBookmarks", config);

    dispatch({
      type: bookmarksTypes.GET_BOOKMARKS_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: bookmarksTypes.GET_BOOKMARKS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addBookmark = (article) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  };

  try {
    dispatch({ type: bookmarksTypes.ADD_BOOKMARKS_REQUEST });

    const { data } = await axios.post(
      "/api/bookmarks/addBookmark",
      article,
      config
    );

    dispatch({
      type: bookmarksTypes.ADD_BOOKMARKS_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: bookmarksTypes.ADD_BOOKMARKS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeBookmark = (id) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  };
  try {
    dispatch({type: bookmarksTypes.REMOVE_BOOKMARK_REQUEST})
    await axios.post("/api/bookmarks/removeBookmark", id, config)

    dispatch({type: bookmarksTypes.REMOVE_BOOKMARK_SUCCESS, payload: id})
  } catch (error) {
    dispatch({
      type: bookmarksTypes.REMOVE_BOOKMARK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export const removeAll = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  };
  try {
    dispatch({type: bookmarksTypes.REMOVE_ALL_BOOKMARKS_REQUEST})
    await axios.get("/api/bookmarks/removeall", config)
    dispatch({type: bookmarksTypes.REMOVE_ALL_BOOKMARKS_SUCCESS})
  } catch (error) {
    dispatch({
      type: bookmarksTypes.REMOVE_ALL_BOOKMARKS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    
  }
} 