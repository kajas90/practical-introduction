import * as types from './actionTypes';

//basic counter action creators

export const addSeanDeath = (death) => (
  { type: types.ADD_SEAN_DEATH, death }
);

export const clearAll = () => (
{ type: types.CLEAR_ALL }
);

//async action

export const clearAllWithDelay = (delay) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(clearAll());
    }, delay);
  };
};
