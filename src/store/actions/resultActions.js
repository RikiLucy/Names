import { ADD_RESULT } from '../constants';

export const addResult = (data) => {
  return {
    type: ADD_RESULT,
    payload: data,
  };
};
