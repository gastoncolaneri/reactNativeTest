import { GET_SWITCHER } from '../types';

export default function SwitcherReducer(state, action) {
  const { payload, type } = action;

  switch (type) {
    case GET_SWITCHER:
      return { ...state, switcher: payload };
    default:
      return state;
  }
}
