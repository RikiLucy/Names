import { ADD_RESULT } from '../constants';

const initialState = [];

const result = (state = initialState, action) =>
{
  switch (action.type) {
    case ADD_RESULT:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default result;
