import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

import poll from './poll';

export default combineReducers({
  poll,
  firebase: firebaseReducer,
});
