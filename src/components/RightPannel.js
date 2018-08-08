import React,{ Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class RightPannel extends Component{


		render(){
		return(
				
			<div>
				<div className={`info ${this.props.classShow}`}>
					<div className="right-headers">
						<h1 id="partners">Partners</h1>
						<h1 id="api"><a href="https://react-gallery-server.herokuapp.com/api">API</a></h1>
						<h1 id="add-new"><Link to="/login/addNew">AddNew</Link></h1>
					</div>
					<div className="img-logos">
			

						<img src='https://react-gallery-server.herokuapp.com/login/images/digia-logo.svg' alt="Digia Logo"/>
						<img src='https://react-gallery-server.herokuapp.com/login/images/druid-logo.svg' alt="Druid Logo"/>
						<img src='https://react-gallery-server.herokuapp.com/login/images/fraktio-logo-white.svg' alt="Fraktio Logo"/>
						<img src='https://react-gallery-server.herokuapp.com/login/images/wunder-logo.png' alt="Wunder Logo"/>
						<img src='https://react-gallery-server.herokuapp.com/login/images/omni-logo.png' alt="Omni ogo"/>
						<img src='https://react-gallery-server.herokuapp.com/login/images/Helsinki-logo-2017.png' alt="Helsinki Logo"/>
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

RightPannel.propTypes = {
	onClick:PropTypes.func.isRequired,
	classShow:PropTypes.string.isRequired,
	firstName:PropTypes.string.isRequired,
	lastName:PropTypes.string.isRequired,
	skills:PropTypes.array.isRequired,
	whySofterDeveloper:PropTypes.string.isRequired,
	longTermVision:PropTypes.string.isRequired,
	motivatesMe:PropTypes.string.isRequired,
	favoriteQuote:PropTypes.string.isRequired,


}