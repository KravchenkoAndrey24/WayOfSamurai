import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import dialogsReducer, { dialogsActionsTypes } from "./dialogsReducer";
import newsReducer, { newsActionsTypes } from "./newsReducer";
import profileReducer, { profileActionsTypes } from "./profileReducer";
import usersReducer, { usersActionsTypes } from "./usersReducer";
import thunkMiddleware from 'redux-thunk';

export type ActionsTypes = profileActionsTypes | dialogsActionsTypes | newsActionsTypes | usersActionsTypes;

export type StoreType = {
	_state: AppStateType
	getState: () => AppStateType
	_callSubscriber: () => void
	subscribe: (callback: () => void) => void
	dispatch: (action: ActionsTypes) => void
}


let rootReducers = combineReducers({
	profilePage: profileReducer,
	messagesPage: dialogsReducer,
	newsPage: newsReducer,
	usersPage: usersReducer,
	auth: authReducer,
});


export type AppStateType = ReturnType<typeof rootReducers>;

let store = createStore(rootReducers, applyMiddleware(thunkMiddleware));

export default store;