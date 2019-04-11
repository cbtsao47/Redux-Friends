import {
  GET_FRIENDS_START,
  GET_FRIENDS_SUCCESS,
  GET_FRIENDS_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGIN_START
} from "../actions/index";
const initState = {
  friends: [],
  gettingFriends: false,
  error: "",
  isLoggedIn: false,
  isLogging: false
};

const friendsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_FRIENDS_START:
      return {
        ...state,
        gettingFriends: true,
        error: ""
      };
    case GET_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: payload,
        gettingFriends: false,
        error: ""
      };
    case GET_FRIENDS_FAIL:
      return {
        ...state,
        gettingFriends: false,
        error: payload
      };
    case LOGIN_START:
      return {
        ...state,
        isLogging: true,
        isLoggedIn: false,
        error: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogging: false,
        isLoggedIn: true,
        error: ""
      };
    case LOGIN_FAIL:
      return {
        ...LOGIN_FAIL.state,
        isLogging: false,
        isLoggedIn: false,
        error: payload
      };
    default:
      return state;
  }
};

export default friendsReducer;
