import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router-dom';
import { DialogsContainer2 } from './components/Dialogs/DialogsContainer';
import NewsContainer from './components/News/NewsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileInfo/ProfileContainer';



function App() {

  return (
    <div className='app-wrapper' >
      <Header />
      <Navbar />
      <div className='app-wrapper-content' >
        <Route path='/profile' render={() => <ProfileContainer />} />
        <Route path='/dialogs' render={() => <DialogsContainer2 />} />
        <Route path='/news' render={() => <NewsContainer />} />
        <Route path='/users' render={() => <UsersContainer />} />
      </div>
    </div>
  );
}



export default App;
