import React from 'react';

const MidPannel = (props)=>{
	function toCapitalize(string){
  		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	
	const tmpList = props.data.map((item,i)=>
				<img src={
					require(`./images/thumbnails/${toCapitalize(item.src)}`) !== undefined
					? require(`./images/thumbnails/${toCapitalize(item.src)}`)
					: require('./images/thumbnails/Rojak.jpg.webp')
				} 
					alt={item.alt} key={`${item.firstName}${i}`}
					onClick={props.click} />
			);
	return(
		<div className="thumbnail-img">
			{tmpList}
		</div>
	);
}

export default MidPannel;