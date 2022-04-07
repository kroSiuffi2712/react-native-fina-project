import {Dispatch} from 'redux';
import {config} from '../../../config';

import axiosInstance from '../../utils/axiosIntances';

import {
  FETCH_TVSHOWS_REQUEST,
  FETCH_TVSHOWS_SUCCESS,
  FETCH_TVSHOWS_FAILURE,
  RESET_TVSHOWS_LIST,
} from '../../constants/index';

export const fetchTVShowsRequest = () => {
  return {
    type: FETCH_TVSHOWS_REQUEST,
  };
};

export const fetchTVShowsSuccess = (movies: any) => {
  return {
    type: FETCH_TVSHOWS_SUCCESS,
    payload: movies,
  };
};

export const fetchTVShowsFailure = (error: string) => {
  return {
    type: FETCH_TVSHOWS_FAILURE,
    payload: error,
  };
};

export const resetTVShows = () => {
  return {
    type: RESET_TVSHOWS_LIST,
  };
};

export const fetchTVShows = () => {
  const path = `${config.API_TVSHOWS_URL}/popular?api_key=${config.API_KEY}&language=en-US&page=1`;
  return async (dispatch: Dispatch) => {
    dispatch(fetchTVShowsRequest());
    axiosInstance
      .get(path)
      .then((response: any) => {
        const data = response.data;
        dispatch(fetchTVShowsSuccess(data));
      })
      .catch((error: any) => {
        const errorMsg = error.message;
        dispatch(fetchTVShowsFailure(errorMsg));
      });
  };
};

export const resetTVShowsList = () => {
  return (dispatch: Dispatch) => {
    dispatch(resetTVShows());
  };
};
