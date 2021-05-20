import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import s from './Header.module.css';
import { logoutTC } from '../../redux/authReducer';
import { AppStateType } from '../../redux/redux-store';



class HeaderContainer extends React.Component<headerContainerType> {

	render() {
		return (
			<Header {...this.props} />
		)
	}
}

type mapStateToPropsType = {
	id: number | null
	email: string | null
	login: string | null
	isAuth: boolean
}

type mapDispatchToPropsType = {
	logoutTC: () => void
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



export default connect(mapStateToProps, { logoutTC })(HeaderContainer);
