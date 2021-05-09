import React from 'react';
import { Field, reduxForm } from 'redux-form';



const LoginForm = (props: any) => {
	return (
		<form onSubmit={props.handleSubmit} >
			<div>
				<Field component={'input'} name={'login'} placeholder={'login'} />
			</div>
			<div>
				<Field component={'input'} name={'password'} placeholder={'password'} />
			</div>
			<div>
				<Field component={'input'} name={'rememberMe'} type={"checkbox"} /> remebmer me
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