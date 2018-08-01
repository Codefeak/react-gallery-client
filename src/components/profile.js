import React, { Component } from 'react';
import LeftPannel from './LeftPannel';
import MidPannel from './MidPannel';
import RightPannel from './RightPannel';

class Profile extends Component{

    componentDidMount=()=>{
        fetch('https://react-gallery-server.herokuapp.com/api')
        .then(res=> console.log(res))
    }

    render(){
        return(
            <div>
                <h1>Profile Page</h1>
                <h2>Welcome Back</h2>
                <div className="main-container">
                    <div className="left-container">
                        <LeftPannel data="" classShow=""/>
                    </div>
                    {/* <div className="right-container">
                        <RightPannel data="" classShow=""/>
                    </div>
                    <div className="mid-container">
                        <MidPannel data="" click=""/>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Profile;