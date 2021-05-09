import { Dispatch } from "redux"
import { authAPI } from "../api/api"

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
				...action.data,
				isAuth: true
			}
		}
		default:
			return state
	}
}

export const setAuthUserData = (userId: number, email: string, login: string) => ({
	type: AUTH_ACTIONS_TYPE.SET_USER_DATA,
	data: { userId, email, login }
}) as const

export const getAuthUser = () => (dispatch: Dispatch) => {
	authAPI.authMe()
		.then((data) => {

			if (data.resultCode === 0) {
				let { id, email, login } = data.data;
				dispatch(setAuthUserData(id, email, login));

			}

		})
}

export default authReducer;