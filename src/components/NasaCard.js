import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NasaCard.scss';

export default function NasaCard() {
	const [ nasaContent, setNasaContent ] = useState({});

	useEffect(() => {
		axios
			.get('https://api.nasa.gov/planetary/apod?api_key=rTMtsft6oB4TOsR50NZYqOwwE03Yd3QlaH9GcZYY')
			.then((response) => {
				setNasaContent(response.data);
			})
			.catch((error) => {
				console.log('The data is not returning', error);
			});
	}, []);
	console.log(nasaContent);
	return (
		<div className="wrapper">
			<h1>{nasaContent.title}</h1>
			<h3 id="date">{nasaContent.date}</h3>
			<img alt={nasaContent.title} src={nasaContent.url} />
			{/* <h4>{nasaContent.copyright}</h4> */}
			<p> {nasaContent.explanation}</p>
		</div>
	);
}
