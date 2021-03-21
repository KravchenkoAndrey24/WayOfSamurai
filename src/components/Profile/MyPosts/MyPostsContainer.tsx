import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import { StoreType } from '../../../redux/redux-store';
import MyPosts from './MyPosts';


type MyPostsContainerPropsType = {
	store: StoreType
}


function MyPostsContainer(props: MyPostsContainerPropsType) {

	let state = props.store.getState();


	let addPost = () => {
		props.store.dispatch(addPostActionCreator())
	}

	let onPostChange = (text: string) => {
		let action = updateNewPostTextActionCreator(text);
		props.store.dispatch(action)
	}


	return (
		<MyPosts
			updateNewPostText={onPostChange}
			addPost={addPost}
			newPostText={state.profilePage.newPostText}
			posts={state.profilePage.posts}
		/>
	)
}
export default MyPostsContainer;