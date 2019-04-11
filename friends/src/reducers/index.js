import {
  GET_FRIENDS_START,
  GET_FRIENDS_SUCCESS,
  GET_FRIENDS_FAIL
} from "../actions/index";
const initState = {
  friends: [],
  gettingFriends: false,
  error: ""
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
    default:
      return state;
  }
};

export default friendsReducer;
