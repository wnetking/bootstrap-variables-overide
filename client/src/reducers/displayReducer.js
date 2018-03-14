import * as t from '../constants';

const initState = {
  input: [],
  result: null,
  lastAction: null
};

const addOperation = (state, action) => {
  if (!state.input.length) return [];
  if (state.result) return [];

  if (state.lastAction === action.type) {
    return state.input.map(
      (item, index, array) =>
        index === array.length - 1 ? action.payload.data : item
    );
  } else {
    return [...state.input, action.payload.data];
  }
};

const addNumber = (state, action) => {
  if (state.result) return [];

  if (state.lastAction === action.type && state.input.length) {
    return state.input.map(
      (item, index, array) =>
        index === array.length - 1 ? item + action.payload.data : item
    );
  } else {
    return [...state.input, action.payload.data];
  }
};

export default function displayReducer(state = initState, action) {
  switch (action.type) {
    case t.ADD_NUMBER:
      return {
        ...state,
        ...{
          input: addNumber(state, action),
          lastAction: action.type,
          result: state.result ? null : state.result
        }
      };
    case t.ADD_OPERATION:
      return {
        ...state,
        ...{
          input: addOperation(state, action),
          lastAction: action.type
        }
      };
    case t.EQUALLY:
      return {
        ...state,
        ...{
          lastAction: action.type,
          result: eval(state.input.join(''))
        }
      };
    default:
      return state;
  }
}
