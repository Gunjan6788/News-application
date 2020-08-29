import {
  GET_TOP_HEADLINES_REQUEST,
  GET_TOP_HEADLINES_SUCCESS,
  BUSINESS_NEWS,
} from "./actionTypes";

const initState = {
  topHeadlines: [],
  business: [],
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
    case BUSINESS_NEWS:
      return {
        ...state,
        business: payload,
      };
    default:
      return state;
  }
};

export default reducer;
