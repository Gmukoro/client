import { FETCH_TWEETS, CREATE_TWEET } from "../types/types";
import axios from "axios";

// Fetch tweets action
export const fetchTweets = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/tweets");
    dispatch({ type: FETCH_TWEETS, payload: response.data });
  } catch (error) {
    console.error("Error fetching tweets", error);
  }
};

// Create tweet action
export const createTweet = (tweet) => async (dispatch) => {
  try {
    const response = await axios.post("/api/tweets", tweet);
    dispatch({ type: CREATE_TWEET, payload: response.data });
  } catch (error) {
    console.error("Error creating tweet", error);
  }
};
