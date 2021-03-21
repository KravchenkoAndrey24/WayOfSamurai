import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';
import { ActionsTypes, ProfilePageType } from '../../redux/store';


export type ProfileStatePropsType = {
	profilePage: ProfilePageType
	dispatch: (action: ActionsTypes) => void
}

function Profile(props: ProfileStatePropsType) {

	return (
		<div>
			<ProfileInfo />
			<MyPosts state={props.profilePage} dispatch={props.dispatch} />
		</div >
	)
}
export default Profile;