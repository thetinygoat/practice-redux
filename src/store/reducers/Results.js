const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_RESULT":
      return {
        counter: state.counter + 1
      };
    case "DELETE_RESULT":
      return {
        counter: state.counter - 1
      };
    default:
      return state;
  }
};

export default reducer;
