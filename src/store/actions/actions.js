export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUB = "SUB";
export const ADD_RESULT = "ADD_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const add = payload => {
  return {
    type: ADD,
    value: payload.value
  };
};

export const sub = payload => {
  return {
    type: SUB,
    value: payload.value
  };
};

export const addResult = payload => {
  return {
    type: ADD_RESULT,
    value: payload.value
  };
};
export const deleteResult = payload => {
  return {
    type: DELETE_RESULT,
    id: payload.id
  };
};
