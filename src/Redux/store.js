import { createStore,applyMiddleware } from "redux";
import rootReduce from "./reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
const store = createStore(rootReduce,composeWithDevTools(applyMiddleware(thunk)) )
export default store