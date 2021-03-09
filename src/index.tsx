import './index.css';
import reportWebVitals from './reportWebVitals';
import state, { RootStateType, subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addMessage, addNews, addPost, updateNewPostText, updateNewTextMessage } from './redux/state';



const rerenderIntireTree = (state: RootStateType) => {
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App state={state} addPost={addPost} addMessage={addMessage} addNews={addNews} updateNewPostText={updateNewPostText} updateNewTextMessage={updateNewTextMessage} />
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById('root')
	);
}

rerenderIntireTree(state);

subscribe(rerenderIntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
