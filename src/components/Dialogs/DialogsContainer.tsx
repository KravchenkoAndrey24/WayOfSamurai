import React from 'react';
import { addMessageActionCreator, updateNewTextMessageActionCreator } from '../../redux/dialogsReducer';
import { StoreType } from '../../redux/store';
import Dialogs from './Dialogs';

type DialogsContainerStatePropsType = {
	store: StoreType
}

function DialogsContainer(props: DialogsContainerStatePropsType) {

	let state = props.store.getState();


	let addMessage = () => {
		props.store.dispatch(addMessageActionCreator())
	}
	let updateNewTextMessage = (text: string) => {
		let action = updateNewTextMessageActionCreator(text);
		props.store.dispatch(action);
	}

	return (
		<Dialogs
			addMessage={addMessage}
			updateNewTextMessage={updateNewTextMessage}
			dialogsPage={state.messagesPage}
		/>
	)
}

export default DialogsContainer;