import React from 'react';
import digia from './images/digia-logo.svg';
import druid from './images/druid-logo.svg';
import fraktio from './images/fraktio-logo-white.svg';
import wunder from './images/wunder-logo.png';
import omni from './images/omni-logo.png';
import helsinki from './images/Helsinki-logo-2017.png';

const RightPannel=(props)=>{
		return(
			<div>
				<div className={`info ${props.classShow}`}>
					<h1>Partners</h1>
					<div className="img-logos">
						<img src={digia} alt="Digia Logo"/>
						<img src={druid} alt="Druid Logo"/>
						<img src={fraktio} alt="Fraktio Logo"/>
						<img src={wunder} alt="Wunder Logo"/>
						<img src={omni} alt="Omni ogo"/>
						<img src={helsinki} alt="Helsinki Logo"/>
					</div>
				</div>
				

				<div className={`indiv-information ${props.classShow==="show"?"hide":"show"}`}> 
					<div className = "info-div">	
						<h2 className="key-name">Name: </h2><p>{props.data[0] && `${props.data[0].firstName} ${props.data[0].lastName}`}</p>
						<h2 className="key-name">Title: </h2><p>{props.data[0] && `${props.data[0].title}`}</p>
						<h2 className="key-name">Nationality: </h2><p>{props.data[0] && `${props.data[0].nationality}`}</p>
						<h2 className="key-name">Skills: </h2><p>{props.data[0] && `${props.data[0].skills.join(", ")}`}</p>
						<h2 className="key-name">Why: </h2><p>{props.data[0] && `${props.data[0].whySofterDeveloper}`}</p>
						<h2 className="key-name">Vision: </h2><p>{props.data[0] && `${props.data[0].longTermVision}`}</p>
						<h2 className="key-name">Motivation: </h2><p>{props.data[0] && `${props.data[0].motivatesMe}`}</p>
						<h2 className="key-name">Favorite Quote: </h2><p>{props.data[0] && `${props.data[0].favoriteQuote}`}</p>
						<h2 className="key-name">Joined Date: </h2><p>{props.data[0] && `${props.data[0].joinedOn}`}</p>
					</div>
				</div>

			</div>
			
		);
}

export default RightPannel;