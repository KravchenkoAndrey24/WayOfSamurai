import { ActionsTypes, newsPageType, NewsType } from "./store";

const ADD_NEWS = 'ADD-NEWS';

export type AddNewsActionType = {
	type: 'ADD-NEWS'
	timeOfPublication: string
	textNews: string
}



let initialState = {
	news: [
		{ id: 1, timeOfPublication: '11:13:22', textNews: 'Стала известна стоимость смартфона Redmi Note 10' },
		{ id: 2, timeOfPublication: '13:33:42', textNews: 'ТОП стран Европы с высокой долей выработки ветровой и солнечной энергии' },
		{ id: 3, timeOfPublication: '18:56:12', textNews: 'Apple придумала функцию для подключения iPhone без разъемов к компьютеру' },
	]
}



const newsReducer = (state: newsPageType = initialState, action: ActionsTypes) => {
	switch (action.type) {
		case ADD_NEWS:
			let newNews: NewsType = {
				id: 4,
				timeOfPublication: action.timeOfPublication,
				textNews: action.textNews,
			};
			state.news.push(newNews);
			return state
		default:
			return state
	}
}

export const addNewsActionCreator = (timeOfPublication: string, textNews: string): AddNewsActionType => ({
	type: ADD_NEWS,
	timeOfPublication: timeOfPublication,
	textNews: textNews,
} as const)

export default newsReducer;