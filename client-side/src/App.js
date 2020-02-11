import React, { useState } from 'react';
import Login from './auth/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import StudentsHome from './components/StudentsHome';
import PrivateRoute from './PrivateRoute';
import { AuthContext }  from './auth/auth';
import TeachersHome from './components/TeachersHome';
import axios from 'axios';
import './App.css';


function App(props) {

  return (
    <div className="App">
      
          <BrowserRouter>
                <Route exact path="/" component={Login} />
                <Route exact path="/students-home" component={StudentsHome} />
                <Route exact path="/teachers-home" component={TeachersHome} />
          </BrowserRouter>
     
    </div>
  );
}

export default App;
