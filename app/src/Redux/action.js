import {
  GET_TOP_HEADLINES_SUCCESS,
  GET_TOP_HEADLINES_REQUEST,
} from "./actionTypes";
import axios from "axios";

export const getTopHeadlinesRequest = (payload) => {
  return {
    type: GET_TOP_HEADLINES_REQUEST,
    payload,
  };
};

export const getTopHeadlinesSuccess = (payload) => {
  return {
    type: GET_TOP_HEADLINES_SUCCESS,
    payload,
  };
};

export const getTopHeadlines = (payload) => (dispatch) => {
  dispatch(getTopHeadlinesRequest(payload));
  console.log(payload);

  axios
    .get(
      "http://newsapi.org/v2/top-headlines?country=us&apiKey=59e8c0a2dd2e41c2b8c96a071a3d5c43"
    )
    .then((res) => res.data)
    .then((res) => dispatch(getTopHeadlinesSuccess(res.articles)));
};
