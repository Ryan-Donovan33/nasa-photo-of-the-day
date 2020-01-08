import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NasaCard from './NasaCard';

export default function NasaList() {
	const [ nasaContent, setNasaContent ] = useState([]);

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
	return <div />;
}
