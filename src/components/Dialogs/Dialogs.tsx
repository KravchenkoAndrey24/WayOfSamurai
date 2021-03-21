import React, { ChangeEvent } from 'react';
import { DialogsPageType } from '../../redux/store';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';


type DialogsStatePropsType = {
	dialogsPage: DialogsPageType
	addMessage: () => void
	updateNewTextMessage: (text: string) => void
}

function Dialogs(props: DialogsStatePropsType) {

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