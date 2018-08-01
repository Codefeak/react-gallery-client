import React from 'react';
import logo from './images/integrify-logo-neg.svg';


const LeftPannel=(props)=>{

		return(
			<div>
				<div className = {`integrify ${props.classShow}`}>
					<img src={logo} alt="Integrify Logo"/>
					<p>Welcome to Integrify Gallery</p>
				</div>
				<div className = "indiv-image">
					<img src={props.data[0] && require(`./images/${toCapitalize(props.data[0].src)}`)} 
						alt={props.data[0] && props.data[0].alt} 
					 />
					<h1>{props.data[0] && `${props.data[0].firstName} ${props.data[0].lastName}`}</h1>
				</div>
			</div>
		
	)
}

function toCapitalize(string){
  		return string.charAt(0).toUpperCase() + string.slice(1);
	}

export default LeftPannel;

