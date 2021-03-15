import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';
import { ActionsTypes, ProfilePageType } from '../../redux/state';


export type ProfileStatePropsType = {
	profilePage: ProfilePageType
	dispatch: (action: ActionsTypes) => void
}

function Profile(props: ProfileStatePropsType) {

	return (
		<div>
			<ProfileInfo />
			<MyPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} dispatch={props.dispatch} />
		</div >
	)
}
export default Profile;