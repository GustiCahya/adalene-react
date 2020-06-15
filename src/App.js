import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
// components
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
// pages
import Homepage from './pages/homepage/homepage.page';
import Craft from './pages/craft/craft.page';
import Story from './pages/story/story.page';
import Contact from './pages/contact/contact.page';
import Shop from './pages/shop/shop.page';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

class App extends Component {

  unsubscribeFromAuth = null;

  render(){
    return(
      <> 
        <Header/>
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/Shop" component={Shop} />
            <Route exact path="/Story" component={Story} />
            <Route exact path="/Craft" component={Craft} />
            <Route exact path="/Contact" component={Contact} />
        </Switch>
        <Footer />
      </>
    )
  }
  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      createUserProfileDocument(userAuth);
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
}


const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);