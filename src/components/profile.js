import React, { Component } from 'react';
import LeftPannel from './LeftPannel';
import MidPannel from './MidPannel';
import RightPannel from './RightPannel';

class Profile extends Component{

    componentDidMount=()=>{
        fetch('https://react-gallery-server.herokuapp.com/api')
        .then(res=>res.json())
        .then(api=>{
            api.forEach(student=>{
                console.log(student)
            })
        })
    }

    render(){
        return(
            <div>
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