import React,{ Component } from 'react';
import axios from 'axios';
import { withRouter, Redirect } from 'react-router';
import digia from './images/digia-logo.svg';
import druid from './images/druid-logo.svg';
import fraktio from './images/fraktio-logo-white.svg';
import wunder from './images/wunder-logo.png';
import omni from './images/omni-logo.png';
import helsinki from './images/Helsinki-logo-2017.png';

class RightPannel extends Component{


		render(){
		return(
			<div>
				<div className={`info ${this.props.classShow}`}>
					<div className="right-headers">
						<h1 id="partners">Partners</h1>
						<h1 id="api"><a href="'https://react-gallery-server.herokuapp.com/api">API</a></h1>
						<h1 id="add-new">AddNew</h1>
					</div>
					<div className="img-logos">
						<img src={digia} alt="Digia Logo"/>
						<img src={druid} alt="Druid Logo"/>
						<img src={fraktio} alt="Fraktio Logo"/>
						<img src={wunder} alt="Wunder Logo"/>
						<img src={omni} alt="Omni ogo"/>
						<img src={helsinki} alt="Helsinki Logo"/>
					</div>
				</div>
				

				<div className={`indiv-information ${this.props.classShow==="show"?"hide":"show"}`}>
					<input className={`indiv-information ${this.props.classShow==="show"?"hide":"show"}`} type="button" value="X" id="back" onClick={this.props.click}/> 
					<div className = "info-div ">	
						<h2 className="key-name">Name: </h2><p>{this.props.data[0] && `${this.props.data[0].firstName} ${this.props.data[0].lastName}`}</p>
						<h2 className="key-name">Title: </h2><p>{this.props.data[0] && `${this.props.data[0].title}`}</p>
						<h2 className="key-name">Nationality: </h2><p>{this.props.data[0] && `${this.props.data[0].nationality}`}</p>
						<h2 className="key-name">Skills: </h2><p>{this.props.data[0] && `${this.props.data[0].skills.join(", ")}`}</p>
						<h2 className="key-name">Why: </h2><p>{this.props.data[0] && `${this.props.data[0].whySofterDeveloper}`}</p>
						<h2 className="key-name">Vision: </h2><p>{this.props.data[0] && `${this.props.data[0].longTermVision}`}</p>
						<h2 className="key-name">Motivation: </h2><p>{this.props.data[0] && `${this.props.data[0].motivatesMe}`}</p>
						<h2 className="key-name">Favorite Quote: </h2><p>{this.props.data[0] && `${this.props.data[0].favoriteQuote}`}</p>
						<h2 className="key-name">Joined Date: </h2><p>{this.props.data[0] && `${this.props.data[0].joinedOn}`}</p>
					</div>
				</div>

			</div>
			
		);
	}
}

export default withRouter(RightPannel);