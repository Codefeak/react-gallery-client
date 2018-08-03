import React, { Component } from 'react';
import LeftPannel from './LeftPannel';
import MidPannel from './MidPannel';
import RightPannel from './RightPannel';

class Profile extends Component{
    state={
        students:[],
        individualData:"",
        classShow:"show",
    }

    componentDidMount=()=>{
        fetch('https://react-gallery-server.herokuapp.com/api')
        .then(res=>res.json())
        .then(api=>{
            this.setState({students:api});
        })
    };
    
    filter=(data, x)=>{
        return data.filter(item=>{
            return ((item._id === x)&& item)
        })
    }

    handleClick=(e)=>{
        console.log(e.target);
        if(e.target.id==="back" ){
            this.setState({individualData:this.state.students, classShow:'show'});
            e.target.className=this.state.classShow;
        }else{
            const tmp = this.filter(this.state.students, e.target.id);
            this.setState({individualData:tmp, classShow:'hide'});
        }
    }

    render(){
        return(
            <div>
                <div className="main-container">
                    <div className="left-container">
                        <LeftPannel data={this.state.individualData} classShow = {this.state.classShow}/>
                    </div>
                    <div className="right-container">
                        <RightPannel data={this.state.individualData} classShow = {this.state.classShow} click={this.handleClick}/>
                    </div>
                    <div className="mid-container">
                        <MidPannel data={this.state.students} click={this.handleClick} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;