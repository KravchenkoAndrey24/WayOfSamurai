import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addPostActionCreator, InitialProfileStateType, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import { AppStateType } from '../../../redux/redux-store';
import MyPosts from './MyPosts';


type MapStateToPropsType = {
	profilePage: InitialProfileStateType
}
type MapDispatchToPropsType = {
	addPost: () => void
	updateNewPostText: (text: string) => void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
	return {
		profilePage: state.profilePage
	}
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
	return {
		addPost: () => {
			dispatch(addPostActionCreator())
		},
		updateNewPostText: (text: string) => {
			dispatch(updateNewPostTextActionCreator(text))
		}
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;