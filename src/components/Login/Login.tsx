import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';



const LoginForm = (props: any) => {
	return (
		<form onSubmit={props.handleSubmit} >
			<div>
				<Field validate={[required]} component={Input} name={'login'} placeholder={'login'} />
			</div>
			<div>
				<Field validate={[required]} component={Input} name={'password'} placeholder={'password'} />
			</div>
			<div>
				<Field component={Input} name={'rememberMe'} type={"checkbox"} /> remebmer me
			</div>
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

const Login = () => {

	const onSubmit = (formData: any) => {
		console.log(formData);
	}

	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
}


export default Login;