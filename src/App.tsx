import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router-dom';
import { ActionsTypes, RootStateType } from './redux/store';
import News from './components/News/News';



type AppPropsType = {
  state: RootStateType
  dispatch: (action: ActionsTypes) => void
}

function App(props: AppPropsType) {

  return (
    <div className='app-wrapper' >
      <Header />
      <Navbar />
      <div className='app-wrapper-content' >
        <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
        <Route path='/dialogs' render={() => <Dialogs state={props.state.messagesPage} dispatch={props.dispatch} />} />
        <Route path='/news' render={() => <News state={props.state.newsPage} dispatch={props.dispatch} />} />
      </div>
    </div>
  );
}



export default App;
