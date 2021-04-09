import axios from 'axios';
import React from 'react';
import s from './Users.module.css';
import { usersPropsType } from './UsersContainer';
import UserPhoto from '../../assets/images/user-male.png'
import { spawn } from 'child_process';



class UsersClass extends React.Component<usersPropsType> {

	componentDidMount() {
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				console.log(response);
				this.props.setUsers(response.data.items)
				this.props.setTotalUsersCount(response.data.totalCount)
			})
	}

	onPageChanged = (pageNumber: number) => {
		this.props.setCurrentPage(pageNumber);
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {
				console.log(response);
				this.props.setUsers(response.data.items)
			})
	}

	render() {
		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
		let pages = [];

		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i);
		}
		return (
			<div>

				<div>
					{pages.map(item => {
						debugger
						return <span onClick={
							() => { this.onPageChanged(item) }
						} className={this.props.currentPage === item ? s.selectedPage : ''}>{item}</span>
					})}
				</div>
				{
					this.props.users.map(item => <div key={item.id}>
						<span>
							<div>
								<img className={s.userPhoto} src={item.photos.small != null ? item.photos.small : UserPhoto} alt="" />
							</div>
							<div>
								{item.followed
									? <button onClick={() => { this.props.unfollow(item.id) }}>Unfollow</button>
									: <button onClick={() => { this.props.follow(item.id) }}>Follow</button>}
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
}

export default UsersClass;