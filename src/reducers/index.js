import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

import service from './service';

export default combineReducers({
  service,
  firebase: firebaseReducer,
});
