import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const rerenderIntireTree = () => {
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App state={store.getState()} addPost={store.addPost.bind(store)} addMessage={store.addMessage.bind(store)} addNews={store.addNews.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} updateNewTextMessage={store.updateNewTextMessage.bind(store)} />
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById('root')
	);
}

rerenderIntireTree();

store.subscribe(rerenderIntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
