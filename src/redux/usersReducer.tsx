// import { ActionsTypes } from "./redux-store";


export enum USERS_ACTIONS_TYPE {
	FOLLOW = 'FOLLOW',
	UNFOLLOW = 'UNFOLLOW',
	SET_USERS = 'SET_USERS',
	SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
	SET_TOTAL_COUNT = 'SET_TOTAL_COUNT',
	TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
}

export type usersActionsTypes = ReturnType<typeof follow>
	| ReturnType<typeof unfollow>
	| ReturnType<typeof setUsers>
	| ReturnType<typeof setCurrentPage>
	| ReturnType<typeof setTotalUsersCount>
	| ReturnType<typeof toggleIsFetching>


export type userType = {
	'name': string
	'id': string
	'uniqueUrlName': null | string
	'photos': {
		'small': null | string
		'large': null | string
	},
	'status': null | string
	'followed': boolean
}
export type InitialProfileStateType = {
	users: userType[],
	pageSize: number,
	totalUsersCount: number,
	currentPage: number
	isFetching: boolean
}


let initialState: InitialProfileStateType = {
	users: [] as userType[],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true
}

const usersReducer = (state: InitialProfileStateType = initialState, action: usersActionsTypes): InitialProfileStateType => {
	switch (action.type) {
		case USERS_ACTIONS_TYPE.FOLLOW: {
			return {
				...state,
				users: state.users.map(item => {
					if (item.id === action.userId) {
						return { ...item, followed: true }
					}
					return item
				})
			}
		}
		case USERS_ACTIONS_TYPE.UNFOLLOW: {
			return {
				...state,
				users: state.users.map(item => {
					if (item.id === action.userId) {
						return { ...item, followed: false }
					}
					return item
				})
			}
		}
		case USERS_ACTIONS_TYPE.SET_USERS: {
			return { ...state, users: action.users }
		}
		case USERS_ACTIONS_TYPE.SET_CURRENT_PAGE: {
			return { ...state, currentPage: action.currentPage }
		}
		case USERS_ACTIONS_TYPE.SET_TOTAL_COUNT: {
			return { ...state, totalUsersCount: action.totalCount }
		}
		case USERS_ACTIONS_TYPE.TOGGLE_IS_FETCHING: {
			return { ...state, isFetching: action.isFetching }
		}
		default:
			return state
	}
}

export const follow = (userId: string) => ({ type: USERS_ACTIONS_TYPE.FOLLOW, userId }) as const
export const unfollow = (userId: string) => ({ type: USERS_ACTIONS_TYPE.UNFOLLOW, userId }) as const
export const setUsers = (users: userType[]) => ({ type: USERS_ACTIONS_TYPE.SET_USERS, users }) as const
export const setCurrentPage = (currentPage: number) => ({ type: USERS_ACTIONS_TYPE.SET_CURRENT_PAGE, currentPage }) as const
export const setTotalUsersCount = (totalCount: number) => ({ type: USERS_ACTIONS_TYPE.SET_TOTAL_COUNT, totalCount }) as const
export const toggleIsFetching = (isFetching: boolean) => ({ type: USERS_ACTIONS_TYPE.TOGGLE_IS_FETCHING, isFetching }) as const


export default usersReducer;