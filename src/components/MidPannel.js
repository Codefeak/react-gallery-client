import React from 'react';

const MidPannel = (props) => {

	const tmpList = props.data.map((item, i) =>
		<img src={
			item.src !== undefined
				? `https://react-gallery-server.herokuapp.com/login/images/thumbnails/${item.src}`
				: 'https://react-gallery-server.herokuapp.com/login/images/thumbnails/Rojak.jpg.webp'
		}
			alt={item.alt}
			id={item._id} key={`${item.firstName}${i}`}
			onClick={props.click} />
	);
	return (
		<div className="thumbnail-img">
			{tmpList}
		</div>
	);
}

export default MidPannel;