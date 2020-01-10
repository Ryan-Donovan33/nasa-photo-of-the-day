import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import './NasaCard.scss';

import styled, { css } from 'styled-components';

const MainBackground = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #23395b;
`;

const Header1 = styled.h1`
	font-size: 3rem;
	color: #8ea8c3;
	font-weight: bold;
`;

const Date = styled.h3`
	font-size: 1.8rem;
	color: #ddc4dd;
	// padding: 1%;
`;

const Image = styled.img`
	width: 50%;
	height: auto;
	margin: 1%;
`;

const MainText = styled.p`
	display: flex;
	text-align: center;
	font-size: 1rem;
	width: 70%;
	padding: 2%;
	margin: 2%;
	color: #ddc4dd;
	background-color: #161925;
	margin: 2%;
`;

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
			<Header1>{nasaContent.title}</Header1>
			<Image alt={nasaContent.title} src={nasaContent.url} />
			<Date id="date">{nasaContent.date}</Date>

			{/* <h4>{nasaContent.copyright}</h4> */}
			<MainText> {nasaContent.explanation}</MainText>
		</MainBackground>
	);
}
