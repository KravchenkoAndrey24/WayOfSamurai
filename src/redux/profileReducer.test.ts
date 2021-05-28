import profileReducer, { addPostActionCreator, deletePost, PostType, profileType } from "./profileReducer";
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
test('length of post should be incremented', () => {

	let action = addPostActionCreator('it-kamasutra')

	let newState = profileReducer(initialState, action)

	expect(newState.posts.length).toBe(5);
})

test('message of new post should be currect', () => {

	let action = addPostActionCreator('it-kamasutra')

	let newState = profileReducer(initialState, action)

	expect(newState.posts[4].message).toBe('it-kamasutra');
})

test('after deleting length of messages should be decrement ', () => {

	let action = deletePost(1)

	let newState = profileReducer(initialState, action)

	expect(newState.posts.length).toBe(3);
})

test('after deleting length should"t be decrement if id is incorrect ', () => {

	let action = deletePost(1000)

	let newState = profileReducer(initialState, action)

	expect(newState.posts.length).toBe(4);
})

