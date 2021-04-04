import axios from 'axios';
import React from 'react';
import s from './Users.module.css';
import { usersPropsType } from './UsersContainer';
import UserPhoto from '../../assets/images/user-male.png'



class UsersClass extends React.Component<usersPropsType> {
	constructor(props: usersPropsType) {
		super(props);
		axios
			.get('https://social-network.samuraijs.com/api/1.0/users')
			.then(response => {
				console.log(response);
				this.props.setUsers(response.data.items)
			})
	}

	render() {
		return (
			<div>
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
			</div>
		)
	}
}

export default UsersClass;