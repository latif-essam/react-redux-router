import { loadingBarReducer } from "react-redux-loading";
import { combineReducers } from "redux";

export default combineReducers({
  //first reducer ex tweets
  //second reducer ex users
  LoadingBar: loadingBarReducer,
});
