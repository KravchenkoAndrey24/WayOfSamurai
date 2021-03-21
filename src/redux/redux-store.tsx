import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import newsReducer from "./newsReducer";
import profileReducer from "./profileReducer";



let reducers = combineReducers({
	profilePage: profileReducer,
	messagesPage: dialogsReducer,
	newsPage: newsReducer,
});

let store = createStore(reducers);

export default store;