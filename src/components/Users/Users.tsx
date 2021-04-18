import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import UserPhoto from '../../assets/images/user-male.png'
import { userType } from '../../redux/usersReducer';
import s from './Users.module.css';

export type UsersType = {
	totalUsersCount: number
	pageSize: number
	currentPage: number
	users: userType[]
	onPageChanged: (pageNumber: number) => void
	follow: (userId: string) => void
	unfollow: (userId: string) => void
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
								? <button onClick={() => {

									props.unfollow(item.id)

									axios
										.delete(`https://social-network.samuraijs.com/api/1.0/follow/${item.id}`, {
											withCredentials: true,
											headers: {
												'API-KEY': '2d65fe0a-1514-46af-a3fa-b8e3058ff155'
											}
										})
										.then((response) => {
											if (response.data.resultCode === 0) {
												props.unfollow(item.id)
											}
										})


								}}>Unfollow</button>
								: <button onClick={() => {
									props.follow(item.id)

									axios
										.post(`https://social-network.samuraijs.com/api/1.0/follow/${item.id}`, null, {
											withCredentials: true,
											headers: {
												'API-KEY': '2d65fe0a-1514-46af-a3fa-b8e3058ff155'
											}
										})
										.then((response) => {
											if (response.data.resultCode === 0) {
												props.follow(item.id)
											}
										})



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