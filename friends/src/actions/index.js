import axiosAuth from "../utils/axiosAuth";
import axios from "axios";

const URL = "http://localhost:5000/api";

//get Friends
export const GET_FRIENDS_START = "GET_FRIENDS_START";
export const GET_FRIENDS_SUCCESS = "GET_FRIENDS_SUCCESS";
export const GET_FRIENDS_FAIL = "GET_FRIENDS_FAIL";

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
//login
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post(`${URL}/login`, creds)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAIL, payload: err.response });
    });
};
