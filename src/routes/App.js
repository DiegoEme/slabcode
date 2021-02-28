import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Products from '../pages/Products';


function App() {
  return (
    <BrowserRouter>
    
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/products" component = {Products}/>        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
