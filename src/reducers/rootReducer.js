import { combineReducers } from "redux";
import dataSlices from "../slices/dataSlices";

const rootReducer = combineReducers({
  data: dataSlices,
});

export default rootReducer;
