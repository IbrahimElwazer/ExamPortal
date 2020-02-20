import React, { Component } from 'react';
import '../App.css';
import { login } from '../functions/UserFunctions';

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
        <div class="container">
            <div class="row">
                <div class="col-md-12 mt-5 d-flex flex-column justify-content-center">
                    <div class="row">
                        <div class="col-lg-6 col-md-8 mx-auto">
                            <div class="card rounded shadow shadow-sm">
                                <div class="card-header">
                                    <h1 class="mb-0">EXAM PORTAL</h1>
                                </div>
                                <h5 class="mt-3">Login With Your Account</h5>
                                <div class="card-body">
                                    <form class="form" onSubmit={this.handleSubmit}>
                                        <div class="form-group">
                                            <label for="email">Email</label>
                                            <input type="email" class="form-control rounded-0" placeholder="Enter Your Associated Email" name="email" required />
                                        </div>
                                        <div class="form-group">
                                            <label for="password">Password</label>
                                            <input type="password" class="form-control rounded-0" placeholder="Enter Your Password" name="password" required />
                                        </div>
                                        <button type="submit" class="btn btn-block btn-success mx-1 mt-4" >Login</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        );
    }
}
export default Login;




