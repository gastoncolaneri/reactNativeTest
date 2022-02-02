import React, { useReducer } from 'react';
import SwitcherReducer from './SwitcherReducer';
import SwitcherContext from './SwitcherContext';
import { GET_SWITCHER } from '../types';

export default function SwitcherState(props) {
  const initialState = { switcher: false };
  const [state, dispatch] = useReducer(SwitcherReducer, initialState);

  const getSwitcher = () => {
    dispatch({
      type: GET_SWITCHER,
      payload: state.switcher ? false : true,
    });
  };

  return (
    <SwitcherContext.Provider value={{ switcher: state.switcher, getSwitcher }}>
      {props.children}
    </SwitcherContext.Provider>
  );
}
