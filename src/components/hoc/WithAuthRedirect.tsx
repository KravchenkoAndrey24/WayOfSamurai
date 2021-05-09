import React, { ComponentType } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AppStateType } from '../../redux/redux-store';

type mapStateToPropsTypeForRedirect = {
	isAuth: boolean
}
let mapStateToPropsForRedirect = (state: AppStateType): mapStateToPropsTypeForRedirect => {
	return {
		isAuth: state.auth.isAuth
	}
}

export function WithAuthRedirect<T>(Component: ComponentType<T>) {
	const RedirectComponent = (props: mapStateToPropsTypeForRedirect) => {

		let { isAuth, ...restProps } = props;
		if (isAuth === false) return <Redirect to={'/login'} />
		return <Component {...restProps as T} />

	}

	let ConnectedAuthRedirectComponentContainer = connect(mapStateToPropsForRedirect)(RedirectComponent);


	return ConnectedAuthRedirectComponentContainer;
}