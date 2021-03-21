import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router-dom';
import { ActionsTypes, RootStateType, StoreType } from './redux/store';
import News from './components/News/News';
import DialogsContainer from './components/Dialogs/DialogsContainer';



type AppPropsType = {
  store: StoreType
  dispatch: (action: ActionsTypes) => void
}

function App(props: AppPropsType) {

  return (
    <div className='app-wrapper' >
      <Header />
      <Navbar />
      <div className='app-wrapper-content' >
        <Route path='/profile' render={() => <Profile store={props.store} />} />
        <Route path='/dialogs' render={() => <DialogsContainer store={props.store} />} />
        {/* <Route path='/news' render={() => <News state={props.state.newsPage} dispatch={props.dispatch} />} /> */}
      </div>
    </div>
  );
}



export default App;
