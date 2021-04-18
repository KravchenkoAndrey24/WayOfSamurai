import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import s from './Header.module.css';
import { setAuthUserData } from './../../redux/authReduces';
import { AppStateType } from '../../redux/redux-store';

type responseTypeItem = {
	data: {
		id: number
		login: string
		email: string
	}
	messages: string[]
	fieldsErrors: string[]
	resultCode: number
}

type responseType = {
	data: responseTypeItem
}


class HeaderContainer extends React.Component<headerContainerType> {

	componentDidMount() {
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
				withCredentials: true
			})
			.then((response: responseType) => {
				console.log(this.props);

				console.log(response);
				if (response.data.resultCode === 0) {
					let { id, email, login } = response.data.data;
					this.props.setAuthUserData(id, email, login)
				}

			})
	}

	render() {
		return (
			<Header {...this.props} />
		)
	}
}

type mapStateToPropsType = {
	id: Number | null
	email: string | null
	login: string | null
	isAuth: boolean
}

type mapDispatchToPropsType = {
	setAuthUserData: (userId: Number, email: string, login: string) => void
}
export type headerContainerType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
	return {
		id: state.auth.id,
		email: state.auth.email,
		login: state.auth.login,
		isAuth: state.auth.isAuth,
	}
};



export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);