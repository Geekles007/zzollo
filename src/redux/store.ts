import {applyMiddleware, combineReducers, createStore} from "redux";
import {searchReducer} from "./searchReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
    repos: searchReducer
})

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
);
