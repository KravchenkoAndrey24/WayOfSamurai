import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { addMessageActionCreator, InitialDialogsStateType } from '../../redux/dialogsReducer';
import { AppStateType } from '../../redux/redux-store';
import Dialogs from './Dialogs';




export const DialogsContainer: React.FC = () => {

	const dispatch = useDispatch();
	const dialogsPage = useSelector<AppStateType, InitialDialogsStateType>((state) => state.messagesPage);
	const isAuth = useSelector<AppStateType, boolean>((state) => state.auth.isAuth);

	const addMessage = (messageText: string) => {
		dispatch(addMessageActionCreator(messageText))
	}



	return (
		<Dialogs dialogsPage={dialogsPage} isAuth={isAuth} addMessage={addMessage} />
	)
}


