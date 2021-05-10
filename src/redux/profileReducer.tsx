import { Dispatch } from "redux";
import { authAPI, profileAPI } from "../api/api";

export enum PROFILE_ACTIONS_TYPE {
	ADD_POST = 'ADD-POST',
	SET_USER_PROFILE = "SET_USER_PROFILE",
	SET_STATUS = 'SET_STATUS'
}

export type profileActionsTypes = ReturnType<typeof setStatusUser> | ReturnType<typeof addPostActionCreator> | ReturnType<typeof setUserProfile>;

export type PostType = {
	id: number
	message: string
	likesCount: number
}
export type profileContactsType = {
	facebook: string
	website: string
	vk: string
	twitter: string
	instagram: string
	youtube: string
	github: string
	mainLink: string
}
export type profileType = {
	aboutMe: string
	contacts: profileContactsType
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	userId: number
	photos: {
		small: string | null
		large: string | undefined
	}
}



let initialState = {
	posts: [
		{ id: 1, message: 'Hi, how are you?', likesCount: 23 },
		{ id: 2, message: "it's my first post", likesCount: 32 },
		{ id: 3, message: "it's my second post", likesCount: 2 },
		{ id: 4, message: "it's my third post", likesCount: 3 },
	] as PostType[],
	profile: {
		aboutMe: '',
		contacts: {
			facebook: '',
			website: '',
			vk: '',
			twitter: '',
			instagram: '',
			youtube: '',
			github: '',
			mainLink: '',
		},
		lookingForAJob: true,
		lookingForAJobDescription: '',
		fullName: '',
		userId: 0,
		photos: {
			small: '',
			large: ''
		}
	} as profileType,
	status: ''
}
export type InitialProfileStateType = typeof initialState;

const profileReducer = (state: InitialProfileStateType = initialState, action: profileActionsTypes): InitialProfileStateType => {
	switch (action.type) {
		case PROFILE_ACTIONS_TYPE.ADD_POST:
			let newPost: PostType = {
				id: 5,
				message: action.newPostText,
				likesCount: 0,
			};
			return { ...state, posts: [...state.posts.map(item => ({ ...item })), newPost] };
		case PROFILE_ACTIONS_TYPE.SET_USER_PROFILE:
			return { ...state, profile: { ...action.profile } }
		case PROFILE_ACTIONS_TYPE.SET_STATUS:
			return { ...state, status: action.status }
		default:
			return state
	}
}

export const addPostActionCreator = (newPostText: string) => ({ type: PROFILE_ACTIONS_TYPE.ADD_POST, newPostText }) as const
export const setUserProfile = (profile: profileType) => ({ type: PROFILE_ACTIONS_TYPE.SET_USER_PROFILE, profile }) as const
export const setStatusUser = (status: string) => ({ type: PROFILE_ACTIONS_TYPE.SET_STATUS, status }) as const

export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
	authAPI.getProfile(userId)
		.then(data => {
			dispatch(setUserProfile(data));
		})
}

export const getUserStatusThunk = (userId: string) => (dispatch: Dispatch) => {
	profileAPI.getUserStatus(userId)
		.then(data => {
			dispatch(setStatusUser(data.data))
			console.log(initialState.status);

		})
}

export const updateUserStatusThunk = (status: string) => (dispatch: Dispatch) => {
	profileAPI.updateUserStatus(status)
		.then(data => {
			if (data.resultCode === 0) {
				dispatch(setStatusUser(status))
			}
		})
}

export default profileReducer;