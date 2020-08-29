import {
  GET_TOP_HEADLINES_REQUEST,
  GET_TOP_HEADLINES_SUCCESS,
  BUSINESS_NEWS,
  TECHNOLOGY_NEWS,
} from "./actionTypes";

const initState = {
  topHeadlines: [],
  business: [],
  technology: [],
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
    case TECHNOLOGY_NEWS:
        return {
            ...state,
            technology: payload
        }
    default:
      return state;
  }
};

export default reducer;
