import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow, userType } from '../../redux/usersReducer';
import { Users } from './Users';
import { Preloader } from '../common/preloader/Preloader';


type mapStateToPropsType = {
	users: userType[]
	pageSize: number
	totalUsersCount: number
	currentPage: number
	isFetching: boolean
}

type mapDispatchToPropsType = {
	follow: (userId: string) => void
	unfollow: (userId: string) => void
	setUsers: (users: userType[]) => void
	setCurrentPage: (currentPage: number) => void
	setTotalUsersCount: (totalCount: number) => void
	toggleIsFetching: (isFetching: boolean) => void
}

export type usersPropsType = mapStateToPropsType & mapDispatchToPropsType;

class UsersContainer extends React.Component<usersPropsType> {

	componentDidMount() {
		this.props.toggleIsFetching(true)
		this.props.setUsers([]);
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				console.log(response);
				this.props.toggleIsFetching(false)
				this.props.setUsers(response.data.items)
				this.props.setTotalUsersCount(response.data.totalCount)
			})
	}

	onPageChanged = (pageNumber: number) => {
		this.props.setCurrentPage(pageNumber);
		this.props.toggleIsFetching(true);
		this.props.setUsers([]);
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {
				console.log(response);
				this.props.toggleIsFetching(false)
				this.props.setUsers(response.data.items)
			})
	}
	render() {
		return (
			<>
				{this.props.isFetching ? <Preloader /> : null}
				<Users
					users={this.props.users}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					totalUsersCount={this.props.totalUsersCount}
					onPageChanged={this.onPageChanged}
					unfollow={this.props.unfollow}
					follow={this.props.follow}
				/>
			</>)
	}

}




let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
	}
}

/* let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
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
		},
		setIsFetching: (isFetching: boolean) => {
			dispatch(toggleIsFetchingAC(isFetching))
		}
	}
}
 */


export default connect(mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleIsFetching
})(UsersContainer);


