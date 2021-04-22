import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { followUser, unfollowUser } from '../../api/api';
import UserPhoto from '../../assets/images/user-male.png'
import { userType } from '../../redux/usersReducer';
import s from './Users.module.css';

export type UsersType = {
	totalUsersCount: number
	pageSize: number
	currentPage: number
	users: userType[]
	followingInProgress: string[]
	onPageChanged: (pageNumber: number) => void
	followThunk: (userId: string) => void
	unfollowThunk: (userId: string) => void
}

export const Users = (props: UsersType) => {

	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];

	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}



	return (
		<div>

			<div>
				{pages.map(item => {
					return <span onClick={
						() => { props.onPageChanged(item) }
					} className={props.currentPage === item ? s.selectedPage : ''}>{item}</span>
				})}
			</div>
			{
				props.users.map(item => <div key={item.id}>
					<span>
						<div>
							<NavLink to={'/profile/' + item.id}>
								<img className={s.userPhoto} src={item.photos.small != null ? item.photos.small : UserPhoto} alt="" />
							</NavLink>
						</div>
						<div>
							{item.followed
								? <button disabled={props.followingInProgress.some(id => id === item.id)} onClick={() => {
									props.unfollowThunk(item.id)
								}}>Unfollow</button>
								: <button disabled={props.followingInProgress.some(id => id === item.id)} onClick={() => {
									props.followThunk(item.id)
								}}>Follow</button>}
						</div>
					</span>
					<span>
						<span>
							<div>{item.name}</div>
							<div>{item.status}</div>
						</span>
						<span>
							<div>{'item.location.country'}</div>
							<div>{'item.location.city'}</div>
						</span>
					</span>
				</div>)
			}
		</div >
	)
}