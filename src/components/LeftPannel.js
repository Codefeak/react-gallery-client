import React from 'react';


const LeftPannel=(props)=>{
	console.log(props.data)
		return(
			<div>
				<div className = {`integrify ${props.classShow}`}>
					<img src="'https://react-gallery-server.herokuapp.com/login/images/integrify-logo-neg.svg" alt="Integrify Logo"/>
					<p>Welcome to Integrify Gallery</p>
				</div>
				<div className = {`indiv-image ${props.classShow==="show"?"hide":"show"}`}>
					<img src={props.data[0] &&`'https://react-gallery-server.herokuapp.com/login/images/${props.data[0].src}`}
						alt={props.data[0] && props.data[0].alt} 
					 />
					<h1>{props.data[0] && `${props.data[0].firstName} ${props.data[0].lastName}`}</h1>
				</div>
				<p id = "delete-btn" className = {`${props.classShow==="show"?"hide":"show"}`} onClick={props.click}>Delete</p>
			</div>
		
	)
}

export default LeftPannel;

