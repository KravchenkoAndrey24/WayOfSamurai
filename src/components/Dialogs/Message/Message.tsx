import React from 'react';
import { MessageType } from '../../../redux/dialogsReducer';
import s from './../Dialogs.module.css'




function Message(props: MessageType) {
	return (
		<div className={s.message}>{props.message}</div>
	)
}


export default Message;