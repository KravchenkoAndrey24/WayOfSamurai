import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC, userType } from '../../redux/usersReducer';
import Users from './Users';
import UsersClass from './UsersClass';

type mapStateToPropsType = {
	users: userType[],
	pageSize: number,
	totalUsersCount: number,
	currentPage: number
}

type mapDispatchToPropsType = {
	follow: (userId: string) => void
	unfollow: (userId: string) => void
	setUsers: (users: userType[]) => void
	setCurrentPage: (currentPage: number) => void
	setTotalUsersCount: (totalCount: number) => void
}

export type usersPropsType = mapStateToPropsType & mapDispatchToPropsType;

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage
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
		setCurrentPage: (currentPage: number) => {
			dispatch(setCurrentPageAC(currentPage))
		},
		setTotalUsersCount: (totalCount: number) => {
			dispatch(setTotalUsersCountAC(totalCount))
		}
	}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);

export default UsersContainer;

