// import { ActionsTypes } from "./redux-store";

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

export type followActionType = ReturnType<typeof followAC>;
export type unfollowActionType = ReturnType<typeof unfollowAC>;
export type setUsersActionType = ReturnType<typeof setUsersAC>;
export type setCurrentPageActionType = ReturnType<typeof setCurrentPageAC>;
export type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountAC>;

export type usersActionsTypes = setTotalUsersCountActionType | followActionType | unfollowActionType | setUsersActionType | setCurrentPageActionType;


export type userType = {
	id: string,
	photoUrl: string
	followed: boolean,
	name: string,
	status: string,
	location: {
		city: string
		country: string
	},
	photos: {
		small: undefined | string,
		large: undefined | string
	},
}
export type InitialProfileStateType = {
	users: userType[],
	pageSize: number,
	totalUsersCount: number,
	currentPage: number
}


let initialState: InitialProfileStateType = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1
}

const usersReducer = (state: InitialProfileStateType = initialState, action: usersActionsTypes): InitialProfileStateType => {
	switch (action.type) {
		case FOLLOW: {
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
		case UNFOLLOW: {
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
		case SET_USERS: {
			return { ...state, users: action.users }
		}
		case SET_CURRENT_PAGE: {
			return { ...state, currentPage: action.currentPage }
		}
		case SET_TOTAL_COUNT: {
			return { ...state, totalUsersCount: action.totalCount }

		}
		default:
			return state
	}
}

export const followAC = (userId: string) => ({ type: FOLLOW, userId }) as const
export const unfollowAC = (userId: string) => ({ type: UNFOLLOW, userId }) as const
export const setUsersAC = (users: userType[]) => ({ type: SET_USERS, users }) as const
export const setCurrentPageAC = (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage }) as const
export const setTotalUsersCountAC = (totalCount: number) => ({ type: SET_TOTAL_COUNT, totalCount }) as const


export default usersReducer;