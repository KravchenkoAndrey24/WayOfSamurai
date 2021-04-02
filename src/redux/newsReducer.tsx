// import { ActionsTypes } from "./redux-store";

const ADD_NEWS = 'ADD-NEWS';
const UPDATE_TEXT_NEWS = 'UPDATE-TEXT-NEWS';

export type AddNewsActionType = ReturnType<typeof addNewsActionCreator>
export type updateTextNewsActionType = ReturnType<typeof updateTextNewsActionCreator>

export type newsActionsTypes = AddNewsActionType | updateTextNewsActionType;


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
		case ADD_NEWS:
			let newNews: NewsType = {
				id: 4,
				textNews: state.newTextNews
			};
			return { ...state, news: [...state.news.map(item => ({ ...item })), newNews], newTextNews: '' }
		case UPDATE_TEXT_NEWS:
			return { ...state, newTextNews: action.newTextNews }
		default:
			return state
	}
}

export const addNewsActionCreator = () => ({
	type: ADD_NEWS,
} as const)

export const updateTextNewsActionCreator = (newTextNews: string) => ({
	type: UPDATE_TEXT_NEWS,
	newTextNews: newTextNews,
} as const)



export default newsReducer;