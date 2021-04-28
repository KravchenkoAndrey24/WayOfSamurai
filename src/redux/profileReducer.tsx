import { Dispatch } from "redux";
import { authAPI } from "../api/api";

export enum PROFILE_ACTIONS_TYPE {
	ADD_POST = 'ADD-POST',
	UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
	SET_USER_PROFILE = "SET_USER_PROFILE"
}

export type profileActionsTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator> | ReturnType<typeof setUserProfile>;

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

export type InitialProfileStateType = {
	posts: PostType[]
	newPostText: string
	profile: profileType

}


let initialState: InitialProfileStateType = {
	posts: [
		{ id: 1, message: 'Hi, how are you?', likesCount: 23 },
		{ id: 2, message: "it's my first post", likesCount: 32 },
		{ id: 3, message: "it's my second post", likesCount: 2 },
		{ id: 4, message: "it's my third post", likesCount: 3 },
	],
	newPostText: 'it-kamasutra.com',
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
	}
}

const profileReducer = (state: InitialProfileStateType = initialState, action: profileActionsTypes): InitialProfileStateType => {
	switch (action.type) {
		case PROFILE_ACTIONS_TYPE.ADD_POST:
			let newPost: PostType = {
				id: 5,
				message: state.newPostText,
				likesCount: 0,
			};
			return { ...state, posts: [...state.posts.map(item => ({ ...item })), newPost], newPostText: '' };

		case PROFILE_ACTIONS_TYPE.UPDATE_NEW_POST_TEXT:
			return { ...state, newPostText: action.newText }
		case PROFILE_ACTIONS_TYPE.SET_USER_PROFILE:
			return { ...state, profile: { ...action.profile } }
		default:
			return state
	}
}

export const addPostActionCreator = () => ({ type: PROFILE_ACTIONS_TYPE.ADD_POST }) as const
export const updateNewPostTextActionCreator = (text: string) => ({
	type: PROFILE_ACTIONS_TYPE.UPDATE_NEW_POST_TEXT,
	newText: text
}) as const
export const setUserProfile = (profile: profileType) => ({ type: PROFILE_ACTIONS_TYPE.SET_USER_PROFILE, profile }) as const

export const getUserProfile = (userId: string) => {
	return (dispatch: Dispatch) => {
		authAPI.getProfile(userId)
			.then(data => {
				console.log(data);

				dispatch(setUserProfile(data));
			})
	}
}



export default profileReducer;