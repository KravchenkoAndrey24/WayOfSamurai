import React from 'react';
import s from './Users.module.css';
import { usersPropsType } from './UsersContainer';


function Users(props: usersPropsType) {

	if (props.users.length === 0) {
		props.setUsers([
			{ id: '1', photoUrl: 'https://www.meme-arsenal.com/memes/fd51570fb8df5c3bde2532971bf8df80.jpg', followed: false, fullname: 'Dmitry', status: 'i am a boss', location: { city: 'Minsk', country: 'Belarus' } },
			{ id: '2', photoUrl: 'https://www.meme-arsenal.com/memes/fd51570fb8df5c3bde2532971bf8df80.jpg', followed: true, fullname: 'Sasha', status: 'i am a boss too', location: { city: 'Moscow', country: 'Russia' } },
			{ id: '3', photoUrl: 'https://www.meme-arsenal.com/memes/fd51570fb8df5c3bde2532971bf8df80.jpg', followed: false, fullname: 'Andrey', status: 'i am a boss too', location: { city: 'Kiev', country: 'Ukraine' } },
		])
	}

	return (
		<div>
			{
				props.users.map(item => <div key={item.id}>
					<span>
						<div>
							<img className={s.userPhoto} src={item.photoUrl} alt="" />
						</div>
						<div>
							{item.followed
								? <button onClick={() => { props.unfollow(item.id) }}>Unfollow</button>
								: <button onClick={() => { props.follow(item.id) }}>Follow</button>}
						</div>
					</span>
					<span>
						<span>
							<div>{item.fullname}</div>
							<div>{item.status}</div>
						</span>
						<span>
							<div>{item.location.country}</div>
							<div>{item.location.city}</div>
						</span>
					</span>
				</div>)
			}
		</div>
	)
}

export default Users;