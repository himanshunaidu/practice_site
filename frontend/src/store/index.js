import { createStore } from "redux";
import * as actionTypes from "./actions/index";

const rootReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case actionTypes.checkCounter:
      console.log(state.counter);
      return { counter: state.counter + 1 };
  }
  return state;
};

const store = createStore(rootReducer);

export default store;
