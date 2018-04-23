/**
 * @entry TODO 页面入口代码
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, Store } from "redux";
import * as utils from "../utils/index";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import App from "../todomvc/components/App";
import MeetingApp from "../todomvc/reducers/index";

const isIE8: boolean = utils.isIE8();
let store: Store<any>;

// IE8 浏览器不支持 redux-logger
if (isIE8) {
  store = createStore(MeetingApp, applyMiddleware(thunkMiddleware));
} else {
  store = createStore(
    MeetingApp,
    applyMiddleware(
      thunkMiddleware, // 允许我们 dispatch() 函数
      createLogger() // 一个很便捷的 middleware，用来打印 action 日志
    )
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);

// if ((module as any).hot) {
//   (module as any).hot.accept();
// }

if ((module as any).hot) {
  (module as any).hot.accept("../todomvc/components/App", () => {
    // tslint:disable-next-line
    const App = require("../todomvc/components/App").default;
    ReactDOM.render(<App store={store} />, document.getElementById("root"));
  });
}
