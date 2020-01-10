import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './NasaCard.scss';

import styled, { css } from 'styled-components';

const MainBackground = styled.div`background: green;`;

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
		<MainBackground className="wrapper">
			<h1>{nasaContent.title}</h1>
			<img alt={nasaContent.title} src={nasaContent.url} />
			<h3 id="date">{nasaContent.date}</h3>
			{/* <h4>{nasaContent.copyright}</h4> */}
			<p> {nasaContent.explanation}</p>
		</MainBackground>
	);
}
