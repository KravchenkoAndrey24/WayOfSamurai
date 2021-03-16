import React, { ChangeEvent } from 'react';
import { ActionsTypes, addMessageActionCreator, DialogsPageType, updateNewTextMessageActionCreator } from '../../redux/state';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';


type DialogsStatePropsType = {
	state: DialogsPageType
	dispatch: (action: ActionsTypes) => void
}

function Dialogs(props: DialogsStatePropsType) {

	let dialogsElements = props.state.dialogs.map(item => <DialogItem id={item.id} name={item.name} />)
	let messagesElements = props.state.messages.map(item => <Message id={item.id} message={item.message} />)
	let newTextMessage = props.state.newTextMessage;

	let addMessage = () => {
		props.dispatch(addMessageActionCreator())
	}
	let updateNewTextMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
		let text = e.currentTarget.value;
		props.dispatch(updateNewTextMessageActionCreator(text))
	}
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				{messagesElements}
				<div><textarea placeholder='Enter your message' onChange={updateNewTextMessage} value={newTextMessage}></textarea></div>
				<div><button onClick={addMessage}>Send message</button></div>
			</div>
		</div>
	)
}

export default Dialogs;