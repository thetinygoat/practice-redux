import * as actionTypes from "../actions/actions";
const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_RESULT:
      return {
        results: state.results.concat({ value: action.value, id: new Date() })
      };
    case actionTypes.DELETE_RESULT:
      return {
        results: state.results.filter(r => {
          return r.id !== action.id;
        })
      };
    default:
      return state;
  }
};

export default reducer;
