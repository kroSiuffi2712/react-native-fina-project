import {combineReducers} from 'redux';

import movies from './moviesReducer';
import tvShows from './tvShowsReducer';
import auth from './authenticationReducer';

const rootReducers = combineReducers({
  movies,
  tvShows,
  auth,
});

export default rootReducers;
