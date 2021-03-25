import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import newsReducer, { updateTextNewsActionCreatorType } from "./newsReducer";
import profileReducer from "./profileReducer";
import { AddMessageActionType, UpdateNewTextMessageActionType } from "./dialogsReducer";
import { AddNewsActionType } from "./newsReducer";
import { AddPostActionType, UpdateNewPostTextActionType } from "./profileReducer";

export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType | AddMessageActionType | UpdateNewTextMessageActionType | AddNewsActionType | updateTextNewsActionCreatorType;

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
});


export type AppStateType = ReturnType<typeof rootReducers>;

let store = createStore(rootReducers);

export default store;