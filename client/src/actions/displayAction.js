import * as t from '../constants';

export const addNumber = data => ({
  type: t.ADD_NUMBER,
  payload: {
    data
  }
});

export const addOperation = data => ({
  type: t.ADD_OPERATION,
  payload: {
    data
  }
});

export const equally = () => ({
  type: t.EQUALLY,
  payload: {}
});
