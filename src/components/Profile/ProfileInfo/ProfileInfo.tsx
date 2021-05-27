import React from 'react';
import { profileType } from '../../../redux/profileReducer';
import { Preloader } from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

type ProfileInfoType = {
	profile: profileType
	status: string
	updateUserStatusThunk: (status: string) => void
}

function ProfileInfo(props: ProfileInfoType) {
	if (!props.profile) {
		return (
			<Preloader />
		)
	}

	return (
		<div>
			{/* <div>
				<img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="" />
			</div> */}
			<div className={s.descriptionBlock}>
				<img src={props.profile.photos.large} alt="" />
				<ProfileStatusWithHooks status={props.status} updateUserStatusThunk={props.updateUserStatusThunk} />
			</div>
		</div>
	)
}


export default ProfileInfo;