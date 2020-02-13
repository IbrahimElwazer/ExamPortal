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
        <div class="container">
            <div class="row">
              <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <h1 class="card-title text-center mt-4">EXAM PORTAL</h1>
                <div class="card card-signin my-5">
                  <div class="card-body">
                    <form class="form-signin" onSubmit={this.handleSubmit}>
                        <h1 className="h3 mb-4 font-weight-normal">Login With Your Account</h1>
                        <div class="form-label-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" className="form-control" required name="email" placeholder="Your Associated Email Address" value={this.state.email} onChange={this.handleChange}></input>
                        </div>
                        <div class="form-label-group mt-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" required name="password" placeholder="Your Account's Password" value={this.state.password} onChange={this.handleChange}></input>
                      </div>
                            <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Login</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
export default Login;



