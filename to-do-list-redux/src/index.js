import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";
//Gọi reducers
import reducers from "./reducers/index";
//Tạo store
const store = createStore(reducers);
ReactDOM.render(
  //Để các component khác có thể lấy dữ liệu chúng ta cần phải bọc các component vào trong Provider
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
