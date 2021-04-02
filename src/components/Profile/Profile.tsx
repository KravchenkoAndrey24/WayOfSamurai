import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';




function Profile() {

	return (
		<div>
			<ProfileInfo />
			<MyPostsContainer />
		</div >
	)
}
export default Profile;