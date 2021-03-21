import React from 'react';
import { addNewsActionCreator, updateTextNewsActionCreator } from '../../redux/newsReducer';
import { StoreType } from '../../redux/redux-store';
import News from './News';

type NewsType = {
	store: StoreType
}

function NewsContainer(props: NewsType) {

	let state = props.store.getState();


	let addNews = () => {
		props.store.dispatch(addNewsActionCreator())
	}

	let onChangeTextNews = (text: string) => {
		let action = updateTextNewsActionCreator(text);
		props.store.dispatch(action);
	}


	return (
		<News addNews={addNews} onChangeTextNews={onChangeTextNews} textNews={state.newsPage.newTextNews} news={state.newsPage.news} />
	)
}

export default NewsContainer;