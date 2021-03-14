import React from 'react';
import state, { DialogsPageType } from '../../redux/state';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';


type DialogsStatePropsType = {
	state: DialogsPageType
	addMessage: (message: string) => void
	updateNewTextMessage: (newMessage: string) => void
}

function Dialogs(props: DialogsStatePropsType) {

	let dialogsElements = props.state.dialogs.map(item => <DialogItem id={item.id} name={item.name} />)
	let messagesElements = props.state.messages.map(item => <Message id={item.id} message={item.message} />)

	let newMessage = React.createRef<HTMLTextAreaElement>();
	let addMessage = () => {
		if (newMessage.current) {
			let text = newMessage.current?.value;
			props.addMessage(text);
			newMessage.current.value = ''
		}
	}
	let updateNewTextMessage = () => {
		if (newMessage.current?.value) {
			props.updateNewTextMessage(newMessage.current?.value);
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