import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  RESET_MOVIES_LIST,
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILURE,
} from '../../constants/index';

export interface IResults {
  id: number;
  overview: string;
  poster_path: string;
  release_date?: string;
  title?: string;
  first_air_date?: string;
  name?: string;
}

export interface IMoviesData {
  page: number;
  results: IResults[];
  total_pages: number;
  total_results: number;
}

export const result: IResults = {
  id: 0,
  overview: '',
  poster_path: '',
  release_date: '',
  title: '',
};

export const moviesData: IMoviesData = {
  page: 0,
  results: [result],
  total_pages: 0,
  total_results: 0,
};
const initialState = {
  loading: false,
  data: moviesData,
  error: '',
};

const moviesReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
    case SEARCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MOVIES_SUCCESS:
    case SEARCH_MOVIES_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: '',
      };
    case FETCH_MOVIES_FAILURE:
    case SEARCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case RESET_MOVIES_LIST:
      return initialState;
    default:
      return state;
  }
};

export default moviesReducer;
