import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../../constants/index';

const initialState = {
  isFetching: false,
  isAuthenticated: false,
  error: '',
};

const auth = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
      };
    case LOGIN_SUCCESS:
      return {
        isFetching: false,
        isAuthenticated: true,
        error: '',
      };
    case LOGIN_FAILURE:
      return {
        isFetching: false,
        isAuthenticated: false,
        error: action.payload,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
export default auth;
