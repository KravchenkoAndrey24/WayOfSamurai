import React, { ChangeEvent, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { InitialDialogsStateType } from '../../redux/dialogsReducer';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Textarea } from '../common/FormsControls/FormsControls';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';


export type DialogsPropsType = {
	dialogsPage: InitialDialogsStateType
	isAuth: boolean
	addMessage: (messageText: string) => void
}

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props: any) => {
	return (
		<form onSubmit={props.handleSubmit} >
			<div>
				<Field validate={[required, maxLength50]} component={Textarea} name={'messageText'} placeholder={'your message'} />
			</div>
			<button>Add post</button>
		</form>
	)
}

const AddMessageFormRedux = reduxForm({
	// a unique name for the form
	form: 'dialogAddMessageForm'
})(AddMessageForm)



function Dialogs(props: DialogsPropsType) {

	let dialogsElements = props.dialogsPage.dialogs.map(item => <DialogItem id={item.id} name={item.name} />)
	let messagesElements = props.dialogsPage.messages.map(item => <Message id={item.id} message={item.message} />)

	const AddNewMessage = (formData: any) => {
		props.addMessage(formData.messageText)
	}

	console.log(props.isAuth);
	if (props.isAuth === false) {
		return <Redirect to={'login'} />
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				{messagesElements}
				<AddMessageFormRedux onSubmit={AddNewMessage} />
			</div>
		</div>
	)
}

export default Dialogs;