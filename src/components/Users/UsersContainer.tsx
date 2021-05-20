import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { followThunk, getUsers, toggleIsFollowingProgress, setCurrentPage, userType, unfollowThunk } from '../../redux/usersReducer';
import { Users } from './Users';
import { Preloader } from '../common/preloader/Preloader';
import { getAllUsers, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getСurrentPage } from '../../redux/usersSelectors';


export type ResponseItemType = {
	'name': string
	'id': string
	'uniqueUrlName': null | string
	'photos': {
		'small': null | string
		'large': null | string
	},
	'status': null | string
	'followed': boolean
}

export type ServerData = {
	'items': ResponseItemType[]
	'totalCount': number
	'error': null | string
}


class UsersContainer extends React.Component<usersPropsType> {

	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (pageNumber: number) => {
		this.props.getUsers(pageNumber, this.props.pageSize);
	}
	render() {
		return (
			<>
				{this.props.isFetching && <Preloader />}
				<Users
					users={this.props.users}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					totalUsersCount={this.props.totalUsersCount}
					followingInProgress={this.props.followingInProgress}
					onPageChanged={this.onPageChanged}
					followThunk={this.props.followThunk}
					unfollowThunk={this.props.unfollowThunk}
				/>
			</>)
	}

}

type mapStateToPropsType = {
	users: userType[]
	pageSize: number
	totalUsersCount: number
	currentPage: number
	isFetching: boolean
	followingInProgress: string[]
}

type mapDispatchToPropsType = {
	setCurrentPage: (currentPage: number) => void
	toggleIsFollowingProgress: (isFollowing: boolean, userId: string) => void
	getUsers: (currentPage: number, pageSize: number) => void
	followThunk: (userId: string) => void
	unfollowThunk: (userId: string) => void
}

export type usersPropsType = mapStateToPropsType & mapDispatchToPropsType;



/* const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress
	}
} */
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
	return {
		users: getAllUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getСurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state)
	}
}
export default connect(mapStateToProps, {
	setCurrentPage,
	toggleIsFollowingProgress,
	getUsers,
	followThunk,
	unfollowThunk
})(UsersContainer);


