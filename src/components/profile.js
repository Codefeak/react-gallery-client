import React, { Component } from 'react';
import LeftPannel from './LeftPannel';
import axios from 'axios';
import MidPannel from './MidPannel';
import RightPannel from './RightPannel';

class Profile extends Component{

    componentDidMount=()=>{
        // fetch('https://react-gallery-server.herokuapp.com/api')
        // .then(res=>res.json())
        // .then(api=>{
        //     api.forEach(student=>{
        //         console.log(student)
        //     })
        // })
        axios({
            method:'post',
            url:'https://react-gallery-server.herokuapp.com/api',
        }).then(res=>{
            if(!res.data.error){
                console.log(res)
            }
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