import React from 'react';
import s from './Profile.module.css';
import Profile from './Profile';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { getUserProfile, profileType } from '../../redux/profileReducer';
import { RouteComponentProps, withRouter } from 'react-router';


export type mapStateToPropsType = {
	profile: profileType
}
export type mapDispatchToPropsType = {
	getUserProfile: (userId: string) => void
}

export type pathPatamsType = {
	userId: string
}
export type ProfileContainerType = RouteComponentProps<pathPatamsType> & mapStateToPropsType & mapDispatchToPropsType;


class ProfileContainer extends React.Component<ProfileContainerType> {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = '2';
		}
		this.props.getUserProfile(userId);
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

export const ConnectWithUrlDataContainerComponent = connect(mapStateToProps, { getUserProfile })(withUrlDataContainerComponent);
