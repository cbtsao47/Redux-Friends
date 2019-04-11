import axiosAuth from "../utils/axiosAuth";
export const GET_FRIENDS_START = "GET_FRIENDS_START";
export const GET_FRIENDS_SUCCESS = "GET_FRIENDS_SUCCESS";
export const GET_FRIENDS_FAIL = "GET_FRIENDS_FAIL";
const URL = "http://localhost:5000/api";
export const getFriends = () => dispatch => {
  dispatch({ type: GET_FRIENDS_START });
  axiosAuth()
    .get(`${URL}/friends`)
    .then(res => {
      dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_FRIENDS_FAIL, payload: err.response });
    });
};
