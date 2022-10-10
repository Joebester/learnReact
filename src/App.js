import './App.css';
import Login from './Pages/Login/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react';
import Home from './Pages/Home/Home';
import Notfound from './Pages/Notfound/Notfound';
import { ProtectRoute } from './Components/ProtectRoute'

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path={"/"} component={Login} exact />
          <Route path={"/login"} component={Login} exact />
          <ProtectRoute path={"/app"} component={Home} />
          <Route path={"/*"} component={Notfound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
