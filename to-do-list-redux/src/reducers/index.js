import taskReducers from "./taskReducers";
import { combineReducers } from "redux";
//Ở đay chúng ta có thể gộp nhiều reducers
// Ở ví dụ này mình chỉ có 1 reducers là noteReducers
export default combineReducers({
  task: taskReducers,
});
// /Chúng ta sẽ gộp các reducer lại với nhau bằng hàm combineReducer.ss
