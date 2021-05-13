import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { loginTC } from '../../redux/authReducer';
import { AppStateType } from '../../redux/redux-store';
import { required } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import styles from '../common/FormsControls/FormsControls.module.css'


const LoginForm = (props: any) => {
	return (
		<form onSubmit={props.handleSubmit} >
			<div>
				<Field validate={[required]} component={Input} name={'email'} placeholder={'login'} />
			</div>
			<div>
				<Field validate={[required]} component={Input} name={'password'} placeholder={'password'} />
			</div>
			<div>
				<Field component={Input} name={'rememberMe'} type={"checkbox"} />remebmer me
			</div>

			{props.error && <div className={styles.formSummaryError}>
				{props.error}
			</div>}
			<div>
				<button>Login</button>
			</div>
		</form >
	)
}

const LoginReduxForm = reduxForm({
	// a unique name for the form
	form: 'login'
})(LoginForm)

const Login = (props: any) => {

	const onSubmit = (formData: any) => {
		props.loginTC(formData.email, formData.password, formData.rememberMe)
	}

	if (props.isAuth) {
		return <Redirect to={'/profile'} />
	}

	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
}

const mapStateToProps = (state: AppStateType) => ({
	isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { loginTC })(Login);