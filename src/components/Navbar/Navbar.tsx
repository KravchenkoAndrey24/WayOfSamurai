import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';



function Navbar() {
	return (
		<nav className={s.nav}>
			<div className={`${s.item}`}><NavLink activeClassName={s.active} to='/profile'>Profile</NavLink></div>
			<div className={s.item}><NavLink activeClassName={s.active} to='/dialogs'>Messages</NavLink></div>
			<div className={s.item}><NavLink activeClassName={s.active} to='/news'>News</NavLink></div>
			<div className={s.item}><a>Music</a></div>
			<div className={s.item}><a>Settings</a></div>
		</nav >
	)
}


export default Navbar;