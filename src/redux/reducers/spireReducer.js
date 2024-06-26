import { FETCH_SPIRES, CREATE_SPIRE } from "../types/types";

const initialState = {
  spires: [],
  loading: true,
};

const spireReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SPIRES:
      return {
        ...state,
        spires: action.payload,
        loading: false,
      };
    case CREATE_SPIRE:
      return {
        ...state,
        spires: [action.payload, ...state.spires],
      };
    default:
      return state;
  }
};

export default spireReducer;
