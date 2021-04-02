// import { ActionsTypes } from "./redux-store";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE-NEW-TEXT-MESSAGE';

export type AddMessageActionType = ReturnType<typeof addMessageActionCreator>
export type UpdateNewTextMessageActionType = ReturnType<typeof updateNewTextMessageActionCreator>

export type dialogsActionsTypes = AddMessageActionType | UpdateNewTextMessageActionType

export type DialogsType = {
	id: number
	name: string
}
export type MessageType = {
	id: number
	message: string
}

export type InitialDialogsStateType = {
	messages: MessageType[]
	dialogs: DialogsType[]
	newTextMessage: string
}

let initialState: InitialDialogsStateType = {
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

const dialogsReducer = (state: InitialDialogsStateType = initialState, action: dialogsActionsTypes): InitialDialogsStateType => {
	switch (action.type) {
		case ADD_MESSAGE:
			let newMessage: MessageType = {
				id: 6,
				message: state.newTextMessage,
			};
			return { ...state, messages: [...state.messages.map(item => ({ ...item })), newMessage], newTextMessage: '' }
		case UPDATE_NEW_TEXT_MESSAGE:
			return { ...state, newTextMessage: action.newMessage }
		default:
			return state
	}
}



export const addMessageActionCreator = () => ({
	type: ADD_MESSAGE
} as const)

export const updateNewTextMessageActionCreator = (newMessage: string) => ({
	type: UPDATE_NEW_TEXT_MESSAGE,
	newMessage: newMessage
} as const)

export default dialogsReducer;