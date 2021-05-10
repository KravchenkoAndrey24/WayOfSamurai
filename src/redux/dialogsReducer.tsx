// import { ActionsTypes } from "./redux-store";

export enum DIALOGS_ACTIONS_TYPE {
	ADD_MESSAGE = 'ADD-MESSAGE',
	UPDATE_NEW_TEXT_MESSAGE = 'UPDATE-NEW-TEXT-MESSAGE'
}


export type dialogsActionsTypes =
	ReturnType<typeof addMessageActionCreator>


export type DialogsType = {
	id: number
	name: string
}
export type MessageType = {
	id: number
	message: string
}

let initialState = {
	messages: [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'How is ypur it?' },
		{ id: 3, message: 'Yo' },
		{ id: 4, message: 'Yo' },
		{ id: 5, message: 'Yo' },
	] as MessageType[],
	dialogs: [
		{ id: 1, name: 'Dimych' },
		{ id: 2, name: 'Andrey' },
		{ id: 3, name: 'Sveta' },
		{ id: 4, name: 'Sasha' },
		{ id: 5, name: 'Viktor' },
		{ id: 6, name: 'Valera' },
	] as DialogsType[],
}
export type InitialDialogsStateType = typeof initialState;

const dialogsReducer = (state: InitialDialogsStateType = initialState, action: dialogsActionsTypes): InitialDialogsStateType => {
	switch (action.type) {
		case DIALOGS_ACTIONS_TYPE.ADD_MESSAGE:
			let newMessage: MessageType = {
				id: 6,
				message: action.messageText,
			};
			return { ...state, messages: [...state.messages.map(item => ({ ...item })), newMessage] }
		default:
			return state
	}
}



export const addMessageActionCreator = (messageText: string) => ({
	type: DIALOGS_ACTIONS_TYPE.ADD_MESSAGE, messageText
}) as const


export default dialogsReducer;