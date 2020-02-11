import React, { Component } from 'react';
import '../App.css';
import { login } from './UserFunctions';

class Login extends Component {

constructor(props){
    super(props);

    this.state = {
        email: '',
        password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
}
    
handleSubmit(e) {
    e.preventDefault();

    const user = {
        email: this.state.email,
        password: this.state.password
    }

    login(user).then(res => {
        if(res){
            if(this.state.email === "t8elib00@students.oamk.fi" && this.state.password === "iamastudent")
            {
                 this.props.history.push('/students-home');
            }
            if(this.state.email === "teacher@oamk.fi" && this.state.password === "iamateacher")
            {
                    this.props.history.push('/teachers-home');
            } }else {
                alert("Incorrect Credentials.. Please make sure you typed in your username and password correctly and try again!")
            }
    })
}



handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
}

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                    <h1 className="text-align mb-5">EXAM PORTAL</h1>
                        <form onSubmit={this.handleSubmit}>
                            <h1 className="h3 mb-4 font-weight-normal">Login With Your Account</h1>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" className="form-control" required name="email" placeholder="Your Associated Email Address" value={this.state.email} onChange={this.handleChange}></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" required name="password" placeholder="Your Account's Password" value={this.state.password} onChange={this.handleChange}></input>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Login</button>
                        </form>
                    </div>
                </div>
            </div>  
        );
    }
}
export default Login;