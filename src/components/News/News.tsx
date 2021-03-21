import React, { ChangeEvent } from 'react';
import { NewsType } from '../../redux/store';
import OneNews from './OneNews/OneNews';
import s from './News.module.css'

type NewsPropsType = {
	addNews: () => void
	onChangeTextNews: (text: string) => void
	textNews: string
	news: NewsType[]
}

function News(props: NewsPropsType) {

	let newsElements = props.news.map(item => <OneNews id={item.id} textNews={item.textNews} />)



	let addNews = () => {
		props.addNews()
	}

	let onChangeTextNews = (e: ChangeEvent<HTMLTextAreaElement>) => {
		let text = e.currentTarget.value;
		props.onChangeTextNews(text);
	}

	return (
		<div>
			<div className={s.news}>
				{newsElements}
				<div><textarea value={props.textNews} onChange={onChangeTextNews}></textarea> </div>
				<div><button onClick={addNews}>Add News</button></div>
			</div>
		</div>
	)
}

export default News;