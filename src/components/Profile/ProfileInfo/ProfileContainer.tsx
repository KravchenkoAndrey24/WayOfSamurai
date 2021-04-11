import React from 'react';
import s from './Profile.module.css';
import Profile from '../Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/redux-store';
import { profileType, setUserProfile } from '../../../redux/profileReducer';
import { RouteComponentProps, withRouter } from 'react-router';


export type mapStateToPropsType = {
	profile: profileType
}
export type mapDispatchToPropsType = {
	setUserProfile: (profile: profileType) => void
}

export type pathPatamsType = {
	userId: string
}
export type ProfileContainerType = RouteComponentProps<pathPatamsType> & mapStateToPropsType & mapDispatchToPropsType;


class ProfileContainer extends React.Component<ProfileContainerType> {
	componentDidMount() {
		console.log(this.props);

		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = '2';
		}
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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

const withUrlDataContainerComponent = withRouter(ProfileContainer);

export const ConnectWithUrlDataContainerComponent = connect(mapStateToProps, { setUserProfile })(withUrlDataContainerComponent);
