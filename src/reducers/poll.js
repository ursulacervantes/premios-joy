import { GET_POLL } from '../constants';

export default function service(state = {}, action) {
  switch (action.type) {
    case GET_POLL:
      return Object.assign({}, state, {
        list: action.questions,
      });
    default:
      return state;
  }
}
