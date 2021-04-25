import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import s from './Header.module.css';
import { getAuthUser } from '../../redux/authReducer';
import { AppStateType } from '../../redux/redux-store';

export type responseTypeItem = {
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
		this.props.getAuthUser();
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
	getAuthUser: () => void
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



export default connect(mapStateToProps, { getAuthUser })(HeaderContainer);