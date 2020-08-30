import {
  GET_TOP_HEADLINES_SUCCESS,
  GET_TOP_HEADLINES_REQUEST,
  BUSINESS_NEWS,
  TECHNOLOGY_NEWS,
  SEARCH_NEWS,
  SELECTED_SOURCE
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

  axios
    .get(
      "http://127.0.0.1:8000/top_headlines/?country=us&category="
    )
    .then((res) => res.data)
    .then((res) => dispatch(getTopHeadlinesSuccess(res.articles)));
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
      "http://127.0.0.1:8000/top_headlines/?country=us&category=business"
    )
    .then((res) => res.data)
    .then((res) => dispatch(businessNewsSuccess(res.articles)));
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
      "http://127.0.0.1:8000/top_headlines/?country=us&category=technology&category="
    )
    .then((res) => res.data)
    .then((res) => dispatch(technologySuccess(res.articles)));
};

//function to serach using query
export const searchNewsSuccess = (payload) => {
  return {
    type: SEARCH_NEWS,
    payload,
  };
};

export const searchNews = (value, date) => (dispatch) => {
  axios
    .get(
      `http://127.0.0.1:8000/everything/?q=${value}&from=${date}`
    )
    .then((res) => res.data)
    .then((res) => dispatch(searchNewsSuccess(res.articles)));
};

// function for selected sources from navbar
export const selectedSourceSuccess = (payload) => {
  return {
    type: SELECTED_SOURCE,
    payload,
  };
};

export const selectedSource = (payload) => (dispatch) => {
  axios
    .get(
      `http://newsapi.org/v2/top-headlines?sources=${payload}&apiKey=59e8c0a2dd2e41c2b8c96a071a3d5c43`
    )
    .then((res) => res.data)
    .then((res) => dispatch(selectedSourceSuccess(res.articles)));
};