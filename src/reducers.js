import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  // other reducers here
  form: formReducer
});

export default rootReducer;
