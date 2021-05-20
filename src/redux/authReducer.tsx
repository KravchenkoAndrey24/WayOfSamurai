import { Dispatch } from "redux"
import { authAPI } from "../api/api"
import { ThunkAction } from 'redux-thunk'
import { ActionsTypes, AppStateType, AppThunk } from "./redux-store"
import { stopSubmit } from "redux-form"

export enum AUTH_ACTIONS_TYPE {
	SET_USER_DATA = 'SET_USER_DATA',
}

export type authActionsTypes = ReturnType<typeof setAuthUserData>



let initialState = {
	id: null as number | null,
	email: null as string | null,
	login: null as string | null,
	isAuth: false
}

export type InitialAuthStateType = typeof initialState;


const authReducer = (state: InitialAuthStateType = initialState, action: authActionsTypes): InitialAuthStateType => {
	switch (action.type) {
		case AUTH_ACTIONS_TYPE.SET_USER_DATA: {
			return {
				...state,
				id: action.payload.userId,
				email: action.payload.email,
				login: action.payload.login,
				isAuth: action.payload.isAuth
			}
		}
		default:
			return state
	}
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {
	return {
		type: AUTH_ACTIONS_TYPE.SET_USER_DATA,
		payload: { userId, email, login, isAuth }
	} as const
}

export const getAuthUser = (): AppThunk => (dispatch) => {
	return authAPI.authMe()
		.then((data) => {
			if (data.resultCode === 0) {
				let { id, email, login } = data.data;
				dispatch(setAuthUserData(id, email, login, true));
			}
		})
}
export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunk => (dispatch) => {
	authAPI.login(email, password, rememberMe)
		.then((response) => {
			if (response.data.resultCode === 0) {
				debugger
				dispatch(getAuthUser())
			} else {
				let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error';
				dispatch(stopSubmit("login", { _error: message }));
			}
		})
}

export const logoutTC = (): AppThunk => (dispatch) => {
	authAPI.logout()
		.then((response) => {
			if (response.data.resultCode === 0) {
				dispatch(setAuthUserData(null, null, null, false));
			}
		})
}

export default authReducer;