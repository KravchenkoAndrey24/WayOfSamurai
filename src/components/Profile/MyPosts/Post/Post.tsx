import React from 'react';
import { PostType } from '../../../../redux/state';
import s from './Post.module.css';




function Post(props: PostType) {
	return (
		<div className={s.item}>
			<img src="https://vokrug-tv.ru/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg" alt="" />
			{props.message}
			<div>
				<span>like </span> {props.likesCount}
			</div>
		</div>

	)
}
export default Post;