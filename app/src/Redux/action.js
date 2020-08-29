import {
  GET_TOP_HEADLINES_SUCCESS,
  GET_TOP_HEADLINES_REQUEST,
  BUSINESS_NEWS,
  TECHNOLOGY_NEWS
} from "./actionTypes";
import axios from "axios";

// functions to get top headlines of home page
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
    .then((res) => dispatch(getTopHeadlinesSuccess(res.articles)))
};

//function to get business news
export const businessNewsSuccess = (payload) => {
  return {
    type: BUSINESS_NEWS,
    payload,
  };
};

export const businessNews = () => (dispatch) => {
  axios
    .get(
      "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=59e8c0a2dd2e41c2b8c96a071a3d5c43"
    )
    .then((res) => res.data)
    .then((res) => dispatch(businessNewsSuccess(res.articles)))
};

//function to get technology news
export const technologySuccess = (payload) => {
    return {
      type: TECHNOLOGY_NEWS,
      payload,
    };
  };
  
  export const technologyNews = () => (dispatch) => {
    axios
      .get(
        "http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=59e8c0a2dd2e41c2b8c96a071a3d5c43"
      )
      .then((res) => res.data)
      .then((res) => dispatch(technologySuccess(res.articles)));
  };
