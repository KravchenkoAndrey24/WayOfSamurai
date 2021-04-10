import React from 'react';
import s from './Profile.module.css';
import Profile from '../Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/redux-store';
import { profileType, setUserProfile } from '../../../redux/profileReducer';


export type mapStateToPropsType = {
	profile: profileType
}
export type mapDispatchToProps = {
	setUserProfile: (profile: profileType) => void
}

export type ProfileContainerType = mapStateToPropsType & mapDispatchToProps;

class ProfileContainer extends React.Component<ProfileContainerType> {
	componentDidMount() {
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
			.then(response => {
				this.props.setUserProfile(response.data);
			})
	}

	render() {
		return (
			<div>
				<Profile {...this.props} profile={this.props.profile} />
			</div>
		)
	}
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
	return {
		profile: state.profilePage.profile
	}
}

export default connect(mapStateToProps, {
	setUserProfile
}
)(ProfileContainer);