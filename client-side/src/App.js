import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import StudentsHome from './components/StudentsHome';
import TeachersHome from './components/TeachersHome';
import CreateExam from './components/CreateExam';
import QuestionsInput from './components/QuestionsInput';
import Login from './components/Login';
import ExamResults from './components/ExamResults';
import './App.css';



function App(props) {

  return (
    <div className="App">
      
          <BrowserRouter>
                <Route exact path="/" component={Login} />
                <Route exact path="/students-home" component={StudentsHome} />
                <Route exact path="/teachers-home" component={TeachersHome} />
                <Route exact path="/create-exam" component={CreateExam} />
                <Route exact path="/exam-questions" component={QuestionsInput} />
                <Route exact path="/exam-results" component={ExamResults} />

          </BrowserRouter>
     
    </div>
  );
}

export default App;
