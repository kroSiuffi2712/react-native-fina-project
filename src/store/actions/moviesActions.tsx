import {Dispatch} from 'redux';
//import env from 'react-native-dotenv';
//const {API_URL, API_KEY} = env;
import {config} from '../../../config';

import axiosInstance from '../../utils/axiosIntances';

import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  RESET_MOVIES_LIST,
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILURE,
} from '../../constants/index';

export const fetchMoviesRequest = () => {
  return {
    type: FETCH_MOVIES_REQUEST,
  };
};

export const fetchMoviesSuccess = (movies: any) => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: movies,
  };
};

export const fetchMoviesFailure = (error: string) => {
  return {
    type: FETCH_MOVIES_FAILURE,
    payload: error,
  };
};

export const fetchMoviesByTextRequest = () => {
  return {
    type: SEARCH_MOVIES_REQUEST,
  };
};

export const fetchMoviesByTextSuccess = (movies: any) => {
  return {
    type: SEARCH_MOVIES_SUCCESS,
    payload: movies,
  };
};

export const fetchMoviesByTextFailure = (error: string) => {
  return {
    type: SEARCH_MOVIES_FAILURE,
    payload: error,
  };
};

export const reseMovies = () => {
  return {
    type: RESET_MOVIES_LIST,
  };
};

export const fetchMovies = () => {
  const path = `${config.API_URL}/movie/popular?api_key=${config.API_KEY}&language=en-US&page=1`;
  return async (dispatch: Dispatch) => {
    dispatch(fetchMoviesRequest());
    axiosInstance
      .get(path)
      .then((response: any) => {
        const data = response.data;
        dispatch(fetchMoviesSuccess(data));
      })
      .catch((error: any) => {
        const errorMsg = error.message;
        dispatch(fetchMoviesFailure(errorMsg));
      });
  };
};

export const resetMoviesList = () => {
  return (dispatch: Dispatch) => {
    dispatch(reseMovies());
  };
};

export const fetchMoviesByText = (value: string) => {
  const path = `${config.API_URL}/search/movie?api_key=${config.API_KEY}&language=en-US&page=1&include_adult=false&query=${value}`;
  return async (dispatch: Dispatch) => {
    dispatch(fetchMoviesByTextRequest());
    axiosInstance
      .get(path)
      .then((response: any) => {
        const data = response.data;
        dispatch(fetchMoviesByTextSuccess(data));
      })
      .catch((error: any) => {
        const errorMsg = error.message;
        dispatch(fetchMoviesByTextFailure(errorMsg));
      });
  };
};
