// import { ActionsTypes } from "./redux-store";

import { usersAPI } from "../api/api"
import { ServerData } from "../components/Users/UsersContainer"


export enum USERS_ACTIONS_TYPE {
	FOLLOW = 'FOLLOW',
	UNFOLLOW = 'UNFOLLOW',
	SET_USERS = 'SET_USERS',
	SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
	SET_TOTAL_COUNT = 'SET_TOTAL_COUNT',
	TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
	TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'
}

export type usersActionsTypes = ReturnType<typeof follow>
	| ReturnType<typeof unfollow>
	| ReturnType<typeof setUsers>
	| ReturnType<typeof setCurrentPage>
	| ReturnType<typeof setTotalUsersCount>
	| ReturnType<typeof toggleIsFetching>
	| ReturnType<typeof toggleIsFollowingProgress>


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
	followingInProgress: string[]
}


let initialState: InitialProfileStateType = {
	users: [] as userType[],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: []
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
		case USERS_ACTIONS_TYPE.TOGGLE_IS_FOLLOWING_PROGRESS: {
			return {
				...state,
				followingInProgress: action.isFollowing
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id !== action.userId)
			}
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
export const toggleIsFollowingProgress = (isFollowing: boolean, userId: string) => ({ type: USERS_ACTIONS_TYPE.TOGGLE_IS_FOLLOWING_PROGRESS, isFollowing, userId }) as const


export const getUsers = (currentPage: number, pageSize: number) => {
	return (
		(dispatch: any) => {
			dispatch(toggleIsFetching(true));
			dispatch(setUsers([]));
			usersAPI.getUsers(currentPage, pageSize)
				.then((data: ServerData) => {
					dispatch(toggleIsFetching(false));
					dispatch(setUsers(data.items));
					dispatch(setTotalUsersCount(data.totalCount));
				})
		}
	)
}

export const followThunk = (userId: string) => {
	return (
		(dispatch: any) => {
			dispatch(toggleIsFollowingProgress(true, userId));
			usersAPI.followUser(userId)
				.then((data) => {
					if (data.resultCode === 0) {
						dispatch(follow(userId))
					}
					dispatch(toggleIsFollowingProgress(false, userId));
				})

		}
	)
}

export const unfollowThunk = (userId: string) => {
	return (
		(dispatch: any) => {
			dispatch(toggleIsFollowingProgress(true, userId));
			usersAPI.unfollowUser(userId)
				.then((data) => {
					if (data.resultCode === 0) {
						dispatch(unfollow(userId))
					}
					dispatch(toggleIsFollowingProgress(false, userId));
				})

		}
	)
}

export default usersReducer;