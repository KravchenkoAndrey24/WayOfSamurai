import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import { DialogsContainer2 } from './components/Dialogs/DialogsContainer';
import NewsContainer from './components/News/NewsContainer';
import UsersContainer from './components/Users/UsersContainer';
import { ConnectWithUrlDataContainerComponent } from './components/Profile/ProfileInfo/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import axios from 'axios';



function App() {

  axios.get('https://www.google.com.ua/?hl=ru')
    .then(response => console.log(response.data))

  return (
    <div className='app-wrapper' >
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content' >
        <Route path='/profile/:userId?' render={() => <ConnectWithUrlDataContainerComponent />} />
        <Route path='/dialogs' render={() => <DialogsContainer2 />} />
        <Route path='/news' render={() => <NewsContainer />} />
        <Route path='/users' render={() => <UsersContainer />} />
      </div>
    </div>
  );
}



export default App;
