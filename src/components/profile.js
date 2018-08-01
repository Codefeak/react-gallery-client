import React, { Component } from 'react';
import LeftPannel from './LeftPannel';
import MidPannel from './MidPannel';
import RightPannel from './RightPannel';

class Profile extends Component{
    state={
        students:[],
    }
    componentDidMount=()=>{
        fetch('https://react-gallery-server.herokuapp.com/api')
        .then(res=>res.json())
        .then(api=>{
            this.setState({students:api});
            console.log(this.state);
        })
    };


    render(){
        return(
            <div>
                <div className="main-container">
                    <div className="left-container">
                        <LeftPannel data={this.state.students}/>
                    </div>
                    <div className="right-container">
                        <RightPannel data={this.state.students}/>
                    </div>
                    <div className="mid-container">
                        <MidPannel data={this.state.students}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;