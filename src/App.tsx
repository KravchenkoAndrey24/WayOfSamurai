import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router-dom';
import { RootStateType } from './redux/state';
import News from './components/News/News';



type AppPropsType = {
  state: RootStateType
  addPost: () => void
  addMessage: (message: string) => void
  addNews: (textNews: string, timeOfPublication: string) => void
  updateNewPostText: (newText: string) => void
  updateNewTextMessage: (newMessage: string) => void
}

function App(props: AppPropsType) {
  return (
    <div className='app-wrapper' >
      <Header />
      <Navbar />
      <div className='app-wrapper-content' >
        <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />} />
        <Route path='/dialogs' render={() => <Dialogs state={props.state.messagesPage} addMessage={props.addMessage} updateNewTextMessage={props.updateNewTextMessage} />} />
        <Route path='/news' render={() => <News state={props.state.newsPage} addNews={props.addNews} />} />
      </div>
    </div>
  );
}



export default App;
