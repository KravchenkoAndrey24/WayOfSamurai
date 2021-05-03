import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import NewsContainer from './components/News/NewsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ConnectWithUrlDataContainerComponent from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';



function App() {
  return (
    <div className='app-wrapper' >
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content' >
        <Route path='/profile/:userId?' render={() => <ConnectWithUrlDataContainerComponent />} />
        <Route path='/dialogs' render={() => <DialogsContainer />} />
        <Route path='/news' render={() => <NewsContainer />} />
        <Route path='/users' render={() => <UsersContainer />} />
        <Route path='/login' render={() => <Login />} />
      </div>
    </div>
  );
}



export default App;
