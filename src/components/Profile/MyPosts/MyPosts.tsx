import React, { ChangeEvent } from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import { ActionsTypes, ProfilePageType } from '../../../redux/store';
import s from './MyPosts.module.css';
import Post from './Post/Post';


type MyPostsPropsType = {
	state: ProfilePageType
	dispatch: (action: ActionsTypes) => void
}


function MyPosts(props: MyPostsPropsType) {

	let postsElements = props.state.posts.map(item => <Post message={item.message} id={item.id} likesCount={item.likesCount} />)
	let newPostText = props.state.newPostText;

	let addPost = () => {
		props.dispatch(addPostActionCreator())
	}
	let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		let text = e.currentTarget.value;
		props.dispatch(updateNewPostTextActionCreator(text))
	}


	return (
		<div className={s.postsBlock}>
			<h3>my posts</h3>
			<div>
				<div>
					<textarea onChange={onPostChange} value={newPostText} />
				</div>
				<button onClick={addPost}>Add post</button>
				<button>Remove</button>
			</div>
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	)
}
export default MyPosts;