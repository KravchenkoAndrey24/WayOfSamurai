const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE-NEW-TEXT-MESSAGE';
const ADD_NEWS = 'ADD-NEWS';

export type MessageType = {
	id: number
	message: string
}
export type DialogsType = {
	id: number
	name: string
}
export type PostType = {
	id: number
	message: string
	likesCount: number
}
export type NewsType = {
	id: number
	textNews: string
	timeOfPublication: string
}
export type ProfilePageType = {
	posts: PostType[]
	newPostText: string
}
export type DialogsPageType = {
	messages: MessageType[]
	dialogs: DialogsType[]
	newTextMessage: string
}
export type newsPageType = {
	news: NewsType[]
}
export type RootStateType = {
	profilePage: ProfilePageType
	messagesPage: DialogsPageType
	newsPage: newsPageType
}

export type AddPostActionType = {
	type: 'ADD-POST'

}
export type UpdateNewPostTextActionType = {
	type: 'UPDATE-NEW-POST-TEXT'
	newText: string
}
type AddMessageActionType = {
	type: 'ADD-MESSAGE'
}
type UpdateNewTextMessageActionType = {
	type: 'UPDATE-NEW-TEXT-MESSAGE'
	newMessage: string
}

type AddNewsActionType = {
	type: 'ADD-NEWS'
	timeOfPublication: string
	textNews: string
}

export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType | AddMessageActionType | UpdateNewTextMessageActionType | AddNewsActionType;

export type StoreType = {
	_state: RootStateType
	getState: () => RootStateType
	_callSubscriber: () => void
	/* addPost: () => void
	updateNewPostText: (newText: string) => void
	addMessage: (message: string) => void
	updateNewTextMessage: (newMessage: string) => void
	addNews: (textNews: string, timeOfPublication: string) => void */
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


	/* addPost() {
		let newPost: PostType = {
			id: 5,
			message: this._state.profilePage.newPostText,
			likesCount: 0,
		};
		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostText = '';
		this._callSubscriber();
	},
	updateNewPostText(newText: string) {
		this._state.profilePage.newPostText = newText;
		this._callSubscriber();
	},
	addMessage(message: string) {
		let newMessage: MessageType = {
			id: 5,
			message: message
		};
		this._state.messagesPage.messages.push(newMessage);
		this._state.messagesPage.newTextMessage = '';
		this._callSubscriber();
	},
	updateNewTextMessage(newMessage: string) {
		this._state.messagesPage.newTextMessage = newMessage;
		this._callSubscriber();
	},
	addNews(textNews: string, timeOfPublication: string) {
		let newNews: NewsType = {
			id: 4,
			timeOfPublication: timeOfPublication,
			textNews: textNews,
		};
		this._state.newsPage.news.push(newNews);
		this._callSubscriber();
	}, */
	dispatch(action) { // {type: 'ADD-POST'}
		if (action.type === ADD_POST) {
			let newPost: PostType = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likesCount: 0,
			};
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber();
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber();
		} else if (action.type === ADD_MESSAGE) {
			let newMessage: MessageType = {
				id: 6,
				message: this._state.messagesPage.newTextMessage,
			};
			this._state.messagesPage.messages.push(newMessage);
			this._state.messagesPage.newTextMessage = '';
			this._callSubscriber();
		} else if (action.type === UPDATE_NEW_TEXT_MESSAGE) {
			this._state.messagesPage.newTextMessage = action.newMessage;
			this._callSubscriber();
		} else if (action.type === ADD_NEWS) {
			let newNews: NewsType = {
				id: 4,
				timeOfPublication: action.timeOfPublication,
				textNews: action.textNews,
			};
			this._state.newsPage.news.push(newNews);
			this._callSubscriber();
		}
	}
};

export const addPostActionCreator = (): AddPostActionType => ({ type: ADD_POST } as const)

export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionType => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text
} as const)

export const addMessageActionCreator = (): AddMessageActionType => ({
	type: ADD_MESSAGE
} as const)

export const updateNewTextMessageActionCreator = (newMessage: string): UpdateNewTextMessageActionType => ({
	type: UPDATE_NEW_TEXT_MESSAGE,
	newMessage: newMessage
} as const)

export const addNewsActionCreator = (timeOfPublication: string, textNews: string): AddNewsActionType => ({
	type: ADD_NEWS,
	timeOfPublication: timeOfPublication,
	textNews: textNews,
} as const)


export default store;