import { AppThunk } from "./redux-store"
import { getAuthUser } from "./authReducer"

export enum INITIALIZED_ACTIONS_TYPE {
	SET_INITIALIZED = 'SET_INITIALIZED',
}

export type appActionsTypes = ReturnType<typeof setInitializedSuccess>



let initialState = {
	initialized: false
}

export type InitialAuthStateType = typeof initialState;


const appReducer = (state: InitialAuthStateType = initialState, action: appActionsTypes): InitialAuthStateType => {
	switch (action.type) {
		case INITIALIZED_ACTIONS_TYPE.SET_INITIALIZED: {
			return {
				...state,
				initialized: true
			}
		}
		default:
			return state
	}
}

export const setInitializedSuccess = () => ({ type: INITIALIZED_ACTIONS_TYPE.SET_INITIALIZED } as const)

export const getInitializeApp = (): AppThunk => async dispatch => {
	const promise = await dispatch(getAuthUser());

	Promise.all([promise])
		.then(() => {
			dispatch(setInitializedSuccess())
		})

}


export default appReducer;