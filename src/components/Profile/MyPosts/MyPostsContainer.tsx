import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addPostActionCreator, InitialProfileStateType } from '../../../redux/profileReducer';
import { AppStateType } from '../../../redux/redux-store';
import MyPosts from './MyPosts';


type MapStateToPropsType = {
	profilePage: InitialProfileStateType
}
type MapDispatchToPropsType = {
	addPost: (newPostText: string) => void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
	return {
		profilePage: state.profilePage
	}
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
	return {
		addPost: (newPostText: string) => {
			dispatch(addPostActionCreator(newPostText))
		}
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;