import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import newsReducer from "./newsReducer";
import profileReducer from "./profileReducer";
import { AddMessageActionType, UpdateNewTextMessageActionType } from "./dialogsReducer";
import { AddNewsActionType, updateTextNewsActionCreator } from "./newsReducer";
import { AddPostActionType, UpdateNewPostTextActionType } from "./profileReducer";
import { RootStateType } from "./store";

export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType | AddMessageActionType | UpdateNewTextMessageActionType | AddNewsActionType | updateTextNewsActionCreator;

export type StoreType = {
	_state: RootStateType
	getState: () => RootStateType
	_callSubscriber: () => void
	subscribe: (callback: () => void) => void
	dispatch: (action: ActionsTypes) => void
}


let reducers = combineReducers({
	profilePage: profileReducer,
	messagesPage: dialogsReducer,
	newsPage: newsReducer,
});

let store: StoreType = createStore(reducers);

export default store;