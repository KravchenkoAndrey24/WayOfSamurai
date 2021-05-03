import React, { ChangeEvent } from 'react';
import { Redirect } from 'react-router-dom';
import { InitialDialogsStateType } from '../../redux/dialogsReducer';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';


export type DialogsPropsType = {
	dialogsPage: InitialDialogsStateType
	isAuth: boolean
	addMessage: () => void
	updateNewTextMessage: (text: string) => void
}


function Dialogs(props: DialogsPropsType) {

	let dialogsElements = props.dialogsPage.dialogs.map(item => <DialogItem id={item.id} name={item.name} />)
	let messagesElements = props.dialogsPage.messages.map(item => <Message id={item.id} message={item.message} />)
	let newTextMessage = props.dialogsPage.newTextMessage;

	let onAddMessage = () => {
		props.addMessage()
	}
	let onUpdateNewTextMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
		let text = e.currentTarget.value;
		props.updateNewTextMessage(text);
	}

	if (!props.isAuth) return <Redirect to={'/login'} />


	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				{messagesElements}
				<div><textarea placeholder='Enter your message' onChange={onUpdateNewTextMessage} value={newTextMessage}></textarea></div>
				<div><button onClick={onAddMessage}>Send message</button></div>
			</div>
		</div>
	)
}

export default Dialogs;