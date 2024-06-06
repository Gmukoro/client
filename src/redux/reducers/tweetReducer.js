import { FETCH_TWEETS, CREATE_TWEET } from "../types/types";

const initialState = {
  tweets: [],
  loading: true,
};

const tweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TWEETS:
      return {
        ...state,
        tweets: action.payload,
        loading: false,
      };
    case CREATE_TWEET:
      return {
        ...state,
        tweets: [action.payload, ...state.tweets],
      };
    default:
      return state;
  }
};

export default tweetReducer;
