import React from 'react';
import { profileType } from '../../../redux/profileReducer';
import { Preloader } from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';

type ProfileInfoType = {
	profile: profileType
}

function ProfileInfo(props: ProfileInfoType) {
	if (!props.profile) {
		return (
			<Preloader />
		)
	}

	return (
		<div>
			<div>
				<img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="" />
			</div>
			<div className={s.descriptionBlock}>
				<img src={props.profile.photos.large} alt="" />
				ava + description
			</div>
		</div>
	)
}


export default ProfileInfo;