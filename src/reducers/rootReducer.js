import { combineReducers } from "redux";
import dataSlices from "../slices/dataSlices";
import uiSlices from "../slices/uiSlices";

const rootReducer = combineReducers({
  data: dataSlices,
  ui: uiSlices,
});

export default rootReducer;
