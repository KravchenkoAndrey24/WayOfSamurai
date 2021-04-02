import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import { followAC, setUsersAC, unfollowAC, userType } from '../../redux/usersReducer';
import Users from './Users';

type mapStateToPropsType = {
	users: userType[]
}

type mapDispatchToPropsType = {
	follow: (userId: string) => void
	unfollow: (userId: string) => void
	setUsers: (users: userType[]) => void
}

export type usersPropsType = mapStateToPropsType & mapDispatchToPropsType;

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
	return {
		users: state.usersPage.users
	}
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
	return {
		follow: (userId: string) => {
			dispatch(followAC(userId))
		},
		unfollow: (userId: string) => {
			dispatch(unfollowAC(userId))
		},
		setUsers: (users: userType[]) => {
			dispatch(setUsersAC(users))
		},
	}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;