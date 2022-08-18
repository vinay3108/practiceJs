import { combineReducers } from "redux";
import {movieReducer} from './movieReducers'
import { userReducer } from "./userReducers";
const rootReducer=combineReducers({
    movies:movieReducer,
    user:userReducer,
  });
  export default rootReducer;