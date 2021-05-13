import React from 'react';
import s from './Profile.module.css';
import Profile from './Profile';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { getUserProfile, profileType, getUserStatusThunk, updateUserStatusThunk } from '../../redux/profileReducer';
import { Redirect, RouteComponentProps, withRouter } from 'react-router';
import { WithAuthRedirect } from '../hoc/WithAuthRedirect';
import { compose } from 'redux';


export type mapStateToPropsType = {
	profile: profileType
	status: string
	authorizedUserId: number | null
	isAuth: boolean
}

export type mapDispatchToPropsType = {
	getUserProfile: (userId: string) => void
	getUserStatusThunk: (userId: string) => void
	updateUserStatusThunk: (status: string) => void
}

export type pathPatamsType = {
	userId: string
}
export type ProfileContainerType = RouteComponentProps<pathPatamsType> & mapStateToPropsType & mapDispatchToPropsType;


class ProfileContainer extends React.Component<ProfileContainerType> {

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.authorizedUserId ? this.props.authorizedUserId.toString() : '';
		}
		console.log(this.props.authorizedUserId);

		this.props.getUserProfile(userId);
		this.props.getUserStatusThunk(userId);
	}

	render() {
		return (
			<div>
				<Profile {...this.props}
					updateUserStatusThunk={this.props.updateUserStatusThunk}
					profile={this.props.profile} />
			</div>
		)
	}
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
	return {
		profile: state.profilePage.profile,
		status: state.profilePage.status,
		authorizedUserId: state.auth.id,
		isAuth: state.auth.isAuth,
	}
}


export default compose<React.ComponentType>(
	connect(mapStateToProps, { getUserProfile, getUserStatusThunk, updateUserStatusThunk }),
	withRouter,
	WithAuthRedirect
)(ProfileContainer)