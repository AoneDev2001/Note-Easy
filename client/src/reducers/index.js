
import { combineReducers } from "redux";
import { customerReducer1 } from "./customerReducer"; 


const rootReducer = combineReducers({
  user: customerReducer1,
});

export default rootReducer;