// import { ActionsTypes } from "./redux-store";


export enum NEWS_ACTIONS_TYPE {
	ADD_NEWS = 'ADD-NEWS',
	UPDATE_TEXT_NEWS = 'UPDATE-TEXT-NEWS'

}

export type newsActionsTypes = ReturnType<typeof addNewsActionCreator> | ReturnType<typeof updateTextNewsActionCreator>;


export type NewsType = {
	id: number
	textNews: string
}

export type InitialStateNewsType = {
	news: NewsType[]
	newTextNews: string
}


let initialState: InitialStateNewsType = {
	news: [
		{ id: 1, textNews: 'Стала известна стоимость смартфона Redmi Note 10' },
		{ id: 2, textNews: 'ТОП стран Европы с высокой долей выработки ветровой и солнечной энергии' },
		{ id: 3, textNews: 'Apple придумала функцию для подключения iPhone без разъемов к компьютеру' },
	],
	newTextNews: '',
}



const newsReducer = (state: InitialStateNewsType = initialState, action: newsActionsTypes): InitialStateNewsType => {
	switch (action.type) {
		case NEWS_ACTIONS_TYPE.ADD_NEWS:
			let newNews: NewsType = {
				id: 4,
				textNews: state.newTextNews
			};
			return { ...state, news: [...state.news.map(item => ({ ...item })), newNews], newTextNews: '' }
		case NEWS_ACTIONS_TYPE.UPDATE_TEXT_NEWS:
			return { ...state, newTextNews: action.newTextNews }
		default:
			return state
	}
}

export const addNewsActionCreator = () => ({
	type: NEWS_ACTIONS_TYPE.ADD_NEWS,
}) as const

export const updateTextNewsActionCreator = (newTextNews: string) => ({
	type: NEWS_ACTIONS_TYPE.UPDATE_TEXT_NEWS,
	newTextNews: newTextNews,
}) as const



export default newsReducer;