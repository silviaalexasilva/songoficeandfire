import {createStore} from "redux";
// import { combineReducers } from 'redux';
import reducer from "./reducers";

// var combinedReducer = combineReducers({appState, nothingReducer})
// var store = createStore(combinedReducer, initialState);

// export {store};

export default createStore(reducer);