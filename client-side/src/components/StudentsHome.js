import React, { Component } from 'react';

class StudentsHome extends Component {

    logOut(e) {
        e.preventDefault();
        localStorage.removeItem('usertoken');
        this.props.history.push('/')
    }

    render() {
        return (
           <div className="container">
               <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">STUDENT EXAM PORTAL</h1>
                    </div>
                    <button type="button" onClick={this.logOut.bind(this)}>Logout</button>
               </div>
           </div>
        );
    }
}

export default StudentsHome;