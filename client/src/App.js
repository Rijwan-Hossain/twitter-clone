import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom' 
import Nav from './components/Navigation/Nav'

function App() { 
  return ( 
    <BrowserRouter> 
      <div> 
        <Nav /> 
        <Switch> 
          {/* <Route path="/" component={Home} exact />  */}
          {/* import Dietplan from './Components/DietPlan/Dietplan' */} 
          {/* <Route path="/diet" component={Dietplan} />  */} 
        </Switch> 
      </div> 
    </BrowserRouter> 
  ); 
} 

export default App; 
