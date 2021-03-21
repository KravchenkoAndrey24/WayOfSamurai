import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { StoreType } from '../../redux/redux-store';


export type ProfileStatePropsType = {
	store: StoreType
}

function Profile(props: ProfileStatePropsType) {

	return (
		<div>
			<ProfileInfo />
			<MyPostsContainer store={props.store} />
		</div >
	)
}
export default Profile;