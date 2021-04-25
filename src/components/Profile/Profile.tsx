import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { ProfileContainerType } from './ProfileContainer';



function Profile(props: ProfileContainerType) {
	return (
		<div>
			<ProfileInfo profile={props.profile} />
			<MyPostsContainer />
		</div >
	)
}
export default Profile;