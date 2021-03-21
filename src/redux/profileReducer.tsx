import { ActionsTypes, PostType, ProfilePageType } from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type AddPostActionType = {
	type: 'ADD-POST'
}
export type UpdateNewPostTextActionType = {
	type: 'UPDATE-NEW-POST-TEXT'
	newText: string
}


let initialState = {
	posts: [
		{ id: 1, message: 'Hi, how are you?', likesCount: 23 },
		{ id: 2, message: "it's my first post", likesCount: 32 },
		{ id: 3, message: "it's my second post", likesCount: 2 },
		{ id: 4, message: "it's my third post", likesCount: 3 },
	],
	newPostText: 'it-kamasutra.com'
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
	switch (action.type) {
		case ADD_POST:
			let newPost: PostType = {
				id: 5,
				message: state.newPostText,
				likesCount: 0,
			};
			state.posts.push(newPost);
			state.newPostText = '';
			return state

		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText;
			return state
		default:
			return state
	}
}

export const addPostActionCreator = (): AddPostActionType => ({ type: ADD_POST } as const)
export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionType => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text
} as const)


export default profileReducer;