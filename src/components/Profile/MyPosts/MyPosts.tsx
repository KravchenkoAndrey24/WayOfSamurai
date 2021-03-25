import React, { ChangeEvent } from 'react';
import s from './MyPosts.module.css';
import { MyPostsPropsType } from './MyPostsContainer';
import Post from './Post/Post';




function MyPosts(props: MyPostsPropsType) {

	let postsElements = props.profilePage.posts.map(item => <Post key={item.id} message={item.message} id={item.id} likesCount={item.likesCount} />)
	let newPostText = props.profilePage.newPostText;

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