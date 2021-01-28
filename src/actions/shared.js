import { hideLoading, showLoading } from "react-redux-loading";

const DATA_LOADING = "DATA_LOADING";
export default function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    dispatch(DATA_LOADING);
    dispatch(hideLoading());
  };
}
