import React from 'react';

const NasaCard = (props) => {
	return (
		<div>
			<div>Copyright: {props.copyright}</div>
			<div>Date: {props.date}</div>
			<div>Explanation: {props.explanation}</div>
			<div>Title: {props.title}</div>
		</div>
	);
};

export default NasaCard;
