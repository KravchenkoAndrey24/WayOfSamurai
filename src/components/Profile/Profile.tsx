import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';
import { ProfilePageType } from '../../redux/state';


export type ProfileStatePropsType = {
	profilePage: ProfilePageType
	addPost: () => void
	updateNewPostText: (newText: string) => void
}

function Profile(props: ProfileStatePropsType) {

	return (
		<div>
			<ProfileInfo />
			<MyPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />
		</div >
	)
}
export default Profile;