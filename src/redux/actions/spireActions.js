import { FETCH_SPIRES, CREATE_SPIRE } from "../types/types";
import axios from "axios";

// Fetch spires action
export const fetchSpires = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/spires");
    dispatch({ type: FETCH_SPIRES, payload: response.data });
  } catch (error) {
    console.error("Error fetching spires", error);
  }
};

// Create spire action
export const createSpire = (spire) => async (dispatch) => {
  try {
    const response = await axios.post("/api/tweets", tweet);
    dispatch({ type: CREATE_SPIRE, payload: response.data });
  } catch (error) {
    console.error("Error creating spire", error);
  }
};
