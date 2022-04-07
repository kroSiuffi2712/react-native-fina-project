import {
  FETCH_TVSHOWS_REQUEST,
  FETCH_TVSHOWS_SUCCESS,
  FETCH_TVSHOWS_FAILURE,
  RESET_TVSHOWS_LIST,
} from '../../constants/index';
import {IResults, result} from './moviesReducer';

export interface ITVShowData {
  page: number;
  results: IResults[];
  total_pages: number;
  total_results: number;
}

export const tvShowsData: ITVShowData = {
  page: 0,
  results: [result],
  total_pages: 0,
  total_results: 0,
};
const initialState = {
  loading: false,
  data: tvShowsData,
  error: '',
};

const tvShowsReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case FETCH_TVSHOWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TVSHOWS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: '',
      };
    case FETCH_TVSHOWS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case RESET_TVSHOWS_LIST:
      return initialState;
    default:
      return state;
  }
};

export default tvShowsReducer;
