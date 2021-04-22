import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import s from './Header.module.css';
import { setAuthUserData } from './../../redux/authReduces';
import { AppStateType } from '../../redux/redux-store';
import { authMe } from '../../api/api';

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
		authMe()
			.then((data: responseTypeItem) => {
				if (data.resultCode === 0) {
					let { id, email, login } = data.data;
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