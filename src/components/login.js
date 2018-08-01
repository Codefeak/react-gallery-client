import React,{ Component } from 'react';
import './login.css';
import axios from 'axios';
import { withRouter } from 'react-router';



class Login extends Component{
    state={
        username:"",
        password:"",
    }
    
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
        axios({
            method:'post',
            url:'https://react-gallery-server.herokuapp.com/login',
            data: this.state
        }).then(res=>{
            if(!res.data.error){
                console.log(res);
            }
            this.props.history.push('/login/profile', {some:res.data})
        });
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    render(){
        return(
            <div className="login-container">
                <form id="login-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="userName">UserName</label>
                    <input type="text" id="userName" name="username" onChange={this.handleChange}/><br/>
                    <label htmlFor="password">Password</label>
                    <input type="password" id ="password" name="password" onChange={this.handleChange}/><br/>
                    <input id="login-btn" type="submit" value="Login"/>
                    <input id="signup-btn" type="submit" value="Sign up"/>
                </form>

            </div>
        )
    }
}

export default withRouter(Login);