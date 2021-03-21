import React, { ChangeEvent, useState } from 'react';
import { ActionsTypes, newsPageType } from '../../redux/store';
import OneNews from './OneNews/OneNews';
import s from './News.module.css'
import { addNewsActionCreator } from '../../redux/newsReducer';

type NewsType = {
	state: newsPageType;
	dispatch: (action: ActionsTypes) => void
}

function News(props: NewsType) {

	let newsElements = props.state.news.map(item => <OneNews id={item.id} textNews={item.textNews} timeOfPublication={item.timeOfPublication} />)

	const [textNews, setTextNews] = useState<string>('')
	const [error, setError] = useState('');


	let addNews = () => {
		let date = new Date();
		let timeOfPublication = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

		if (textNews) {
			props.dispatch(addNewsActionCreator(timeOfPublication, textNews))
		} else {
			setError('Вы не ввели новость')
		}
		setTextNews('')
	}

	let onChangeTextNews = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setTextNews(e.currentTarget.value);
		setError('');
	}

	return (
		<div>
			<div className={s.news}>
				{newsElements}
				<div><textarea value={textNews} onChange={onChangeTextNews}></textarea>{error && <span>{error}</span>} </div>
				<div><button onClick={addNews}>Add News</button></div>
			</div>
		</div>
	)
}

export default News;