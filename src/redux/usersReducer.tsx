// import { ActionsTypes } from "./redux-store";

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';

export type followActionType = ReturnType<typeof followAC>;
export type unfollowActionType = ReturnType<typeof unfollowAC>;
export type setUsersActionType = ReturnType<typeof setUsersAC>;

export type usersActionsTypes = followActionType | unfollowActionType | setUsersActionType;


export type userType = {
	id: string,
	photoUrl: string
	followed: boolean,
	fullname: string,
	status: string,
	location: {
		city: string
		country: string
	}
}
export type InitialProfileStateType = {
	users: userType[]
}


let initialState: InitialProfileStateType = {
	users: []
	/* [
		{ id: '1', photoUrl: 'https://www.meme-arsenal.com/memes/fd51570fb8df5c3bde2532971bf8df80.jpg', followed: false, fullname: 'Dmitry', status: 'i am a boss', location: { city: 'Minsk', country: 'Belarus' } },
		{ id: '2', photoUrl: 'https://www.meme-arsenal.com/memes/fd51570fb8df5c3bde2532971bf8df80.jpg', followed: true, fullname: 'Sasha', status: 'i am a boss too', location: { city: 'Moscow', country: 'Russia' } },
		{ id: '3', photoUrl: 'https://www.meme-arsenal.com/memes/fd51570fb8df5c3bde2532971bf8df80.jpg', followed: false, fullname: 'Andrey', status: 'i am a boss too', location: { city: 'Kiev', country: 'Ukraine' } },
	] */
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
			return { ...state, users: [...state.users, ...action.users] }
		}
		default:
			return state
	}
}

export const followAC = (userId: string) => ({ type: FOLLOW, userId } as const)
export const unfollowAC = (userId: string) => ({ type: UNFOLLOW, userId } as const)
export const setUsersAC = (users: userType[]) => ({ type: SET_USERS, users } as const)


export default usersReducer;