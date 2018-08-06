import React from 'react';


const IndividualLeft=(props)=>{
    console.log(props.extraProps)
		return(
				<div>
					<div className = {`integrify ${props.classShow}`}>
						<img src="https://react-gallery-server.herokuapp.com/login/images/integrify-logo-neg.svg" alt="Integrify Logo"/>
						<p>Welcome to Integrify Gallery</p>
					</div>
				</div>
	)
}

export default IndividualLeft;