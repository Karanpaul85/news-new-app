import { createWrapper } from "next-redux-wrapper";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer/index";

const store = () => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
};
export const wrapper = createWrapper(store);
