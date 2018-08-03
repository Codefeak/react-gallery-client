import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AddNew extends Component {
    state = {
        firstName: "",
        lastName: "",
        title: "",
        nationality: "",
        skills: "",
        whySofterDeveloper: "",
        longTermVision: "",
        motivatesMe: "",
        favoriteQuote: "",
        joinedOn: "",
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]:e.target.value});
        
        console.log(this.state.skills);
    };

    handleSubmit=(e)=>{
        e.preventDefault();
        const tmpSkills = Array.from(this.state.skills);
        this.setState({skills:tmpSkills});
        const tmp = [this.state];
        axios({
            method:'post',
            url:'https://react-gallery-server.herokuapp.com/login/addNew',
            data:tmp
        }).then(res=>{
            if(!res.data.error){
            }
            this.props.history.push('/login/profile',{some:res.data})
        });
    }

    render() {
        return (
            <div className="form-container ">
                <form action="" method="post" onSubmit={this.handleSubmit}>
                    <p>Please Fill Up the Following informations:</p>
                    <label className="form-rows">
                        <span> FirstName:</span>
                        <input onChange={this.handleChange} type="text" name="firstName" />
                    </label>
                    <label className="form-rows">
                        <span> LastName:</span>
                        <input onChange={this.handleChange} type="text" name="lastName" />
                    </label>
                    <label className="form-rows">
                        <span> Alt:</span>
                        <input onChange={this.handleChange} type="text" name="alt" />
                    </label>
                    <label className="form-rows">
                        <span> Title: </span>
                        <input onChange={this.handleChange} type="text" name="title" />
                    </label>
                    <label className="form-rows">
                        <span> Nationality: </span>
                        <input onChange={this.handleChange} type="text" name="nationality" />
                    </label>
                    <label className="form-rows">
                        <span> Skills: </span>
                        <input onChange={this.handleChange} type="text" name="skills" placeholder="Seperate with commas" />
                    </label>
                    <label className="form-rows">
                        <span> Why: </span>
                        <input onChange={this.handleChange} type="text" name="whySofterDeveloper" />
                    </label>
                    <label className="form-rows">
                        <span> Vision: </span>
                        <input onChange={this.handleChange} type="text" name="longTermVision" />
                    </label>
                    <label className="form-rows">
                        <span> Motivation:</span>
                        <input onChange={this.handleChange} type="text" name="motivatesMe" />
                    </label>
                    <label className="form-rows">
                        <span> Favorite Quote:</span>
                        <input onChange={this.handleChange} type="text" name="favoriteQuote" />
                    </label>
                    <label className="form-rows">
                        <span> Joined Date: </span>
                        <input onChange={this.handleChange} type="text" name="joinedOn" />
                    </label>
                    <div>
                        <input id="submit-btn" type="Submit" value="Submit" readOnly />
                        <button id="submit-btn" ><Link to="/login/profile">Back</Link> </button>
                    </div>
                </form>
            </div>
        );
    };
};

export default AddNew;