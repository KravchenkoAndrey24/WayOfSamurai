import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addNewsActionCreator, InitialStateNewsType, updateTextNewsActionCreator } from '../../redux/newsReducer';
import { AppStateType } from '../../redux/redux-store';
import News from './News';



type MapStateToPropsType = {
	newsPage: InitialStateNewsType
}

type MapDispatchToProps = {
	addNews: () => void
	onChangeTextNews: (text: string) => void
}

export type NewsProps = MapStateToPropsType & MapDispatchToProps;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
	return {
		newsPage: state.newsPage
	}
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
	return {
		addNews: () => {
			dispatch(addNewsActionCreator())
		},
		onChangeTextNews: (text: string) => {
			dispatch(updateTextNewsActionCreator(text))
		}
	}
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsContainer;