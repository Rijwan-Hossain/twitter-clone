import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from './components/Navigation/Nav'
import Home from './components/Home/Home'
import Registration from './components/Registration/Registration'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'

function App() { 
  return ( 
    <BrowserRouter> 
      <div> 
        <Nav /> 
        <Switch> 
          <Route path="/" component={Home} exact /> 
          <Route path="/registration" component={Registration} /> 
          <Route path="/login" component={Login} /> 
          <Route path="/profile" component={Profile} /> 
        </Switch> 
      </div> 
    </BrowserRouter> 
  );
}

export default App; 
