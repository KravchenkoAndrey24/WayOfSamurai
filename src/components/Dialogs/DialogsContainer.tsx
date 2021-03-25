import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addMessageActionCreator, InitialDialogsStateType, updateNewTextMessageActionCreator } from '../../redux/dialogsReducer';
import { AppStateType } from '../../redux/redux-store';
import Dialogs from './Dialogs';


type mapStateToPropsType = {
	dialogsPage: InitialDialogsStateType
}

type mapDispatchToPropsType = {
	addMessage: () => void
	updateNewTextMessage: (text: string) => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType;

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
	return {
		dialogsPage: state.messagesPage
	}
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
	return {
		addMessage: () => {
			dispatch(addMessageActionCreator())
		},
		updateNewTextMessage: (text: string) => {
			dispatch(updateNewTextMessageActionCreator(text))
		},
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);



export default DialogsContainer;