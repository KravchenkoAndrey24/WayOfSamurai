import React from 'react';
import { NewsType } from '../../../redux/state';
import s from './OneNews.module.css';



function OneNews(props: NewsType) {

	return (
		<div >
			<span className={s.time}>{props.timeOfPublication} </span>{props.textNews}
		</div>
	)
}

export default OneNews;