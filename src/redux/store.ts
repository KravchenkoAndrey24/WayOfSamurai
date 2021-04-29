import React from 'react'







/* export type StoreType = {
	_state: RootStateType
	getState: () => RootStateType
	_callSubscriber: () => void
	subscribe: (callback: () => void) => void
	dispatch: (action: ActionsTypes) => void
} */

/* export type StoreType = {
	_state: RootStateType
	getState: () => RootStateType
	_callSubscriber: () => void
	subscribe: (callback: () => void) => void
	dispatch: (action: ActionsTypes) => void
}

let store: StoreType = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'Hi, how are you?', likesCount: 23 },
				{ id: 2, message: "it's my first post", likesCount: 32 },
				{ id: 3, message: "it's my second post", likesCount: 2 },
				{ id: 4, message: "it's my third post", likesCount: 3 },
			],
			newPostText: 'it-kamasutra.com'
		},
		messagesPage: {
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
		},
		newsPage: {
			news: [
				{ id: 1, timeOfPublication: '11:13:22', textNews: 'Стала известна стоимость смартфона Redmi Note 10' },
				{ id: 2, timeOfPublication: '13:33:42', textNews: 'ТОП стран Европы с высокой долей выработки ветровой и солнечной энергии' },
				{ id: 3, timeOfPublication: '18:56:12', textNews: 'Apple придумала функцию для подключения iPhone без разъемов к компьютеру' },
			]
		}
	},
	_callSubscriber() {
		console.log('State changed');
	},


	getState() {
		return this._state;
	},
	subscribe(observer: () => void) {
		this._callSubscriber = observer; // наблюдатель observer
	},

	dispatch(action) { // {type: 'ADD-POST'}
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
		this._state.newsPage = newsReducer(this._state.newsPage, action);

		this._callSubscriber();
	}
};
 */






/* export default store; */