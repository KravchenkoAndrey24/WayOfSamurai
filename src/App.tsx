import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter } from 'react-router-dom';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import NewsContainer from './components/News/NewsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ConnectWithUrlDataContainerComponent from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { getInitializeApp } from './redux/appReducer';
import { AppStateType } from './redux/redux-store';
import { Preloader } from './components/common/preloader/Preloader';



class App extends React.Component<appType> {


  componentDidMount() {
    this.props.getInitializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

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
}

type mapStateToPropsType = {
  initialized: boolean
}
type mapDispatchToPropsType = {
  getInitializeApp: () => void
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized
})

type appType = mapStateToPropsType & mapDispatchToPropsType

export default connect(mapStateToProps, { getInitializeApp })(App);
