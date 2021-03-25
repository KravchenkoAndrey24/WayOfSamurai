import React from 'react';
import { NewsType } from '../../../redux/newsReducer';
import s from './OneNews.module.css';


function OneNews(props: NewsType) {

	return (
		<div >
			<span className={s.time}> </span>{props.textNews}
		</div>
	)
}

export default OneNews;