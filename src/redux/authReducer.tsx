import { authAPI } from "../api/api"
import { responseTypeItem } from "../components/Header/HeaderContainer"

export enum AUTH_ACTIONS_TYPE {
	SET_USER_DATA = 'SET_USER_DATA',
}

export type authActionsTypes = ReturnType<typeof setAuthUserData>



export type InitialAuthStateType = {
	id: Number | null
	email: string | null
	login: string | null
	isAuth: boolean
}


let initialState: InitialAuthStateType = {
	id: null,
	email: null,
	login: null,
	isAuth: false
}

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

export const setAuthUserData = (userId: Number, email: string, login: string) => ({ type: AUTH_ACTIONS_TYPE.SET_USER_DATA, data: { userId, email, login } }) as const
export const getAuthUser = () => (dispatch: any) => {
	authAPI.authMe()
		.then((data: responseTypeItem) => {
			if (data.resultCode === 0) {
				let { id, email, login } = data.data;
				dispatch(setAuthUserData(id, email, login));
			}

		})
}

export default authReducer;