import {
  GET_TOP_HEADLINES_REQUEST,
  GET_TOP_HEADLINES_SUCCESS,
} from "./actionTypes";

const initState = {
  topHeadlines: [],
  loading: false,
};

const reducer = (state = initState, { type, payload }) => {
  console.log(payload);

  switch (type) {
    case GET_TOP_HEADLINES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_TOP_HEADLINES_SUCCESS:
      return {
        ...state,
        loading: false,
        topHeadlines: payload,
      };
    default:
      return state;
  }
};

export default reducer;
