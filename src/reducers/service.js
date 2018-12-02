import { GET_SERVICES } from '../constants';

export default function service(state = {}, action) {
  switch (action.type) {
    case GET_SERVICES:
      return Object.assign({}, state, {
        list: action.services,
      });
    default:
      return state;
  }
}
