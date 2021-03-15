import React, { ChangeEvent } from 'react';
import { ActionsTypes, addPostActionCreator, PostType, updateNewPostTextActionCreator } from '../../../redux/state';
import s from './MyPosts.module.css';
import Post from './Post/Post';


type MyPostsPropsType = {
	posts: PostType[]
	newPostText: string
	dispatch: (action: ActionsTypes) => void
}


function MyPosts(props: MyPostsPropsType) {
	let postsElements = props.posts.map(item => <Post message={item.message} id={item.id} likesCount={item.likesCount} />)

	let newPostElement = React.createRef<HTMLTextAreaElement>();
	let addPost = () => {
		if (newPostElement.current) {
			props.dispatch(addPostActionCreator())
		}
	}
	let onPostChange = () => {
		if (newPostElement.current?.value) {
			let text = newPostElement.current?.value
			props.dispatch(updateNewPostTextActionCreator(text))
		}

	}
	return (
		<div className={s.postsBlock}>
			<h3>my posts</h3>
			<div>
				<div>
					<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
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