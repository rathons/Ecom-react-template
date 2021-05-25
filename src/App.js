import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import ContactPage from './pages/contact/contact.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SigninSignoutPage from './pages/signin-signout/signin-signout.component';
import Header from './components/header/header.component';


function App() {
  return <div>
    <Header/>
    <Switch>
     <Route exact path='/' component={HomePage} />
     <Route exact path='/shop' component={ShopPage} />
     <Route exact path='/contact' component={ContactPage} />
     <Route exact path='/signin' component={SigninSignoutPage} />
     </Switch>
     
    </div>
  }

export default App;
