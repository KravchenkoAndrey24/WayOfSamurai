import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { addMessageActionCreator, InitialDialogsStateType, updateNewTextMessageActionCreator } from '../../redux/dialogsReducer';
import { AppStateType } from '../../redux/redux-store';
import { WithAuthRedirect } from '../hoc/WithAuthRedirect';
import Dialogs from './Dialogs';




export const DialogsContainer: React.FC = () => {

	const dispatch = useDispatch();
	const dialogsPage = useSelector<AppStateType, InitialDialogsStateType>((state) => state.messagesPage);
	const isAuth = useSelector<AppStateType, boolean>((state) => state.auth.isAuth);

	const addMessage = () => {
		dispatch(addMessageActionCreator())
	}

	const updateNewTextMessage = (text: string) => {
		dispatch(updateNewTextMessageActionCreator(text))
	}

	return (
		<Dialogs dialogsPage={dialogsPage} isAuth={isAuth} addMessage={addMessage} updateNewTextMessage={updateNewTextMessage} />
	)
}


