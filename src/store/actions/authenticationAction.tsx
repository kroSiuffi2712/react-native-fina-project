import {Dispatch} from 'redux';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../../constants/index';
import axios from 'axios';

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = (data: any) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

export const loginFailure = (error: any) => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const login = () => {
  return async (dispatch: Dispatch) => {
    dispatch(loginRequest());
    await axios({
      method: 'POST',
      url: 'https://reqres.in/api/login',
      data: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      },
    })
      .then(response => {
        const data = response.data;
        dispatch(loginSuccess(data.token));
      })
      .catch(error => {
        const errorMessage = error.message;
        dispatch(loginFailure(errorMessage));
      });
  };
};
