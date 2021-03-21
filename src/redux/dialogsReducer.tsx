import { ActionsTypes } from "./redux-store";
import { DialogsPageType, MessageType } from "./store";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE-NEW-TEXT-MESSAGE';

export type AddMessageActionType = {
	type: 'ADD-MESSAGE'
}
export type UpdateNewTextMessageActionType = {
	type: 'UPDATE-NEW-TEXT-MESSAGE'
	newMessage: string
}



let initialState = {
	messages: [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'How is ypur it?' },
		{ id: 3, message: 'Yo' },
		{ id: 4, message: 'Yo' },
		{ id: 5, message: 'Yo' },
	],
	dialogs: [
		{ id: 1, name: 'Dimych' },
		{ id: 2, name: 'Andrey' },
		{ id: 3, name: 'Sveta' },
		{ id: 4, name: 'Sasha' },
		{ id: 5, name: 'Viktor' },
		{ id: 6, name: 'Valera' },
	],
	newTextMessage: '',
}

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {
	switch (action.type) {
		case ADD_MESSAGE:
			let newMessage: MessageType = {
				id: 6,
				message: state.newTextMessage,
			};
			state.messages.push(newMessage);
			state.newTextMessage = '';
			return state
		case UPDATE_NEW_TEXT_MESSAGE:
			state.newTextMessage = action.newMessage;
			return state
		default:
			return state
	}
}



export const addMessageActionCreator = (): AddMessageActionType => ({
	type: ADD_MESSAGE
} as const)

export const updateNewTextMessageActionCreator = (newMessage: string): UpdateNewTextMessageActionType => ({
	type: UPDATE_NEW_TEXT_MESSAGE,
	newMessage: newMessage
} as const)

export default dialogsReducer;