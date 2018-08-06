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
        src:"",
    }

    handleChange = (e) => {
        console.log(e.target.value)
        e.preventDefault();
        if(e.target.name === 'src'){
            this.setState({src:this.state.firstName});
            console.log(this.state)
        }
        this.setState({[e.target.name]:e.target.value});
        console.log(this.state.src);
    };

    handleFileUpload=(e)=>{
        e.preventDefault();
        this.setState({src:`${this.state.firstName}.jpg`});
        console.dir(e.target.files[0])
        const data = new FormData();
        data.append('file', e.target.files[0], `${this.state.firstName}.jpg`);
        axios.post('https://react-gallery-server.herokuapp.com/login/addNew/upload', data)
        .then(res => {
        console.log(res); // do something with the response
    });
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
            this.props.history.push('/login/profile');
        });
    }

    render() {
        return (
            <div className="form-container ">
                <form action="/login/addNew" method="post" onSubmit={this.handleSubmit} encType="multipart/form-data">
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
                        <input onChange={this.handleChange} type="text" name="motivanesMe" />
                    </label>
                    <label className="form-rows">
                        <span> Favorite Quote:</span>
                        <input onChange={this.handleChange} type="text" name="favoriteQuote" />
                    </label>
                    <label className="form-rows">
                        <span> Image: </span>
                        <input onChange={this.handleFileUpload} type="file" />
                        {/* <button onClick = {this.handleFileUpload}>Upload Image</button> */}
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