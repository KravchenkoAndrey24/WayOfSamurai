import React, { ChangeEvent } from 'react';
import OneNews from './OneNews/OneNews';
import s from './News.module.css'
import { NewsProps } from './NewsContainer';



function News(props: NewsProps) {

	let newsElements = props.newsPage.news.map(item => <OneNews id={item.id} textNews={item.textNews} />)



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
				<div><textarea value={props.newsPage.newTextNews} onChange={onChangeTextNews}></textarea> </div>
				<div><button onClick={addNews}>Add News</button></div>
			</div>
		</div>
	)
}

export default News;