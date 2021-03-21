import React, { ChangeEvent } from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import { ActionsTypes, PostType, ProfilePageType } from '../../../redux/store';
import s from './MyPosts.module.css';
import Post from './Post/Post';


type MyPostsPropsType = {
	updateNewPostText: (text: string) => void
	addPost: () => void
	newPostText: string
	posts: PostType[]
}


function MyPosts(props: MyPostsPropsType) {

	let postsElements = props.posts.map(item => <Post message={item.message} id={item.id} likesCount={item.likesCount} />)
	let newPostText = props.newPostText;

	let onAddPost = () => {
		props.addPost();
	}
	let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		let text = e.currentTarget.value;
		props.updateNewPostText(text)
	}


	return (
		<div className={s.postsBlock}>
			<h3>my posts</h3>
			<div>
				<div>
					<textarea onChange={onPostChange} value={newPostText} />
				</div>
				<button onClick={onAddPost}>Add post</button>
				<button>Remove</button>
			</div>
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	)
}
export default MyPosts;