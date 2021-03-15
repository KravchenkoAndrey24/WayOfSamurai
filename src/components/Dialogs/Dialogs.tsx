import React from 'react';
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

	let newMessage = React.createRef<HTMLTextAreaElement>();
	let addMessage = () => {
		if (newMessage.current) {
			let text = newMessage.current?.value;
			props.dispatch(addMessageActionCreator(text))
			newMessage.current.value = ''
		}
	}
	let updateNewTextMessage = () => {
		if (newMessage.current?.value) {
			let text = newMessage.current?.value
			props.dispatch(updateNewTextMessageActionCreator(text))
		}
	}
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				{messagesElements}
				<div><textarea ref={newMessage} onChange={updateNewTextMessage} value={props.state.newTextMessage}></textarea></div>
				<div><button onClick={addMessage}>Add message</button></div>
			</div>
		</div>
	)
}

export default Dialogs;