import { ActionsTypes } from "./redux-store";
import { newsPageType, NewsType } from "./store";

const ADD_NEWS = 'ADD-NEWS';
const UPDATE_TEXT_NEWS = 'UPDATE-TEXT-NEWS';

export type AddNewsActionType = {
	type: 'ADD-NEWS'
}

export type updateTextNewsActionCreator = {
	type: 'UPDATE-TEXT-NEWS'
	newTextNews: string
}


let initialState = {
	news: [
		{ id: 1, textNews: 'Стала известна стоимость смартфона Redmi Note 10' },
		{ id: 2, textNews: 'ТОП стран Европы с высокой долей выработки ветровой и солнечной энергии' },
		{ id: 3, textNews: 'Apple придумала функцию для подключения iPhone без разъемов к компьютеру' },
	],
	newTextNews: '',
}



const newsReducer = (state: newsPageType = initialState, action: ActionsTypes) => {
	switch (action.type) {
		case ADD_NEWS:
			let newNews: NewsType = {
				id: 4,
				textNews: state.newTextNews
			};
			state.news.push(newNews);
			state.newTextNews = ''
			return state
		case UPDATE_TEXT_NEWS:
			state.newTextNews = action.newTextNews
			return state
		default:
			return state
	}
}

export const addNewsActionCreator = (): AddNewsActionType => ({
	type: ADD_NEWS,
} as const)

export const updateTextNewsActionCreator = (newTextNews: string): updateTextNewsActionCreator => ({
	type: UPDATE_TEXT_NEWS,
	newTextNews: newTextNews,
} as const)



export default newsReducer;