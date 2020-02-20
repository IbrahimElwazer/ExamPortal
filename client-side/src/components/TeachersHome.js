import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class TeachersHome extends Component {

    logOut(e) {
        e.preventDefault();
        localStorage.removeItem('usertoken');
        this.props.history.push('/');
    }

    redirectToExams() {
        this.props.history.push('/create-exam');
    }

    redirectToQuestions() {
        this.props.history.push('/exam-questions');
    }

    redirectToResults() {
        this.props.history.push('exam-results');
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron mt-3">
                        <div className="col-sm-8 mx-auto">
                            <h1 className="text-center mb-3">Welcome to Teachers Exam Portal!</h1>
                        </div>
                        <button class="btn btn-danger" type="button" onClick={this.logOut.bind(this)}>Logout</button>
                        <div className="col-sm-8 mx-auto">
                        <button class="btn btn-success btn-block btn-lg mt-5" type="button" onClick={this.redirectToExams.bind(this)}>Create Exam</button>
                        <button class="btn btn-success btn-block btn-lg mt-4" type="button" onClick={this.redirectToQuestions.bind(this)}>Add New Questions</button>
                        <button class="btn btn-success btn-block btn-lg mt-4" type="button" onClick={this.redirectToResults.bind(this)}>View Students Results</button>
                        </div>
                </div>
            </div>
        );
    }
}

export default TeachersHome;