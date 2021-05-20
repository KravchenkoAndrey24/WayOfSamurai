import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer, { authActionsTypes } from "./authReducer";
import dialogsReducer, { dialogsActionsTypes } from "./dialogsReducer";
import newsReducer, { newsActionsTypes } from "./newsReducer";
import profileReducer, { profileActionsTypes } from "./profileReducer";
import usersReducer, { usersActionsTypes } from "./usersReducer";
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer, { appActionsTypes } from "./appReducer";

export type ActionsTypes = profileActionsTypes | dialogsActionsTypes | newsActionsTypes | usersActionsTypes | authActionsTypes | appActionsTypes;

/* export type StoreType = {
	_state: AppStateType
	getState: () => AppStateType
	_callSubscriber: () => void
	subscribe: (callback: () => void) => void
	dispatch: (action: ActionsTypes) => void
}
 */

let rootReducers = combineReducers({
	profilePage: profileReducer,
	messagesPage: dialogsReducer,
	newsPage: newsReducer,
	usersPage: usersReducer,
	auth: authReducer,
	form: formReducer,
	app: appReducer
});


export type AppStateType = ReturnType<typeof rootReducers>;

let store = createStore(rootReducers, applyMiddleware(thunkMiddleware));


export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionsTypes>

export default store;

let storetest = window;