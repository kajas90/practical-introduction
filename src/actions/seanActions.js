import * as types from './actionTypes';

//basic counter action creators

export const addSeanDeath = (death) => (
  { type: types.ADD_SEAN_DEATH, death }
);

export const removeSeanDeath = (index) => (
  { type: types.REMOVE_SEAN_DEATH, index }
);

export const clearAll = () => (
{ type: types.REMOVE_SEAN_DEATH }
);

//async action

export const clearAllWithDelay = (delay) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(clearAll());
    }, delay);
  };
};
