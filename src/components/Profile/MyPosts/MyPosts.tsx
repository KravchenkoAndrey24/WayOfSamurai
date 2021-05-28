import { render } from '@testing-library/react';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import s from './MyPosts.module.css';
import { MyPostsPropsType } from './MyPostsContainer';
import Post from './Post/Post';


const maxLength10 = maxLengthCreator(10);

const AddPostReduxForm = (props: any) => {
	return (
		<form onSubmit={props.handleSubmit} >
			<div>
				<Field validate={[required, maxLength10]} component={Textarea} name={'newPostText'} placeholder={'your post'} />
			</div>
			<button>Add post</button>
		</form>
	)
}

const PostReduxForm = reduxForm({
	// a unique name for the form
	form: 'post'
})(AddPostReduxForm)




const MyPosts = React.memo((props: MyPostsPropsType) => {


	console.log('render MyPosts');

	let postsElements = props.profilePage.posts.map(item => <Post key={item.id} message={item.message} id={item.id} likesCount={item.likesCount} />)

	const onSubmit = (formData: any) => {
		console.log(formData);
		props.addPost(formData.newPostText);
	}

	return (
		<div className={s.postsBlock}>
			<h3>my posts</h3>
			<PostReduxForm onSubmit={onSubmit} />
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	)
})



export default MyPosts;