import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function NasaList() {
	const [ nasaContent, setNasaContent ] = useState([]);

	useEffect(() => {
		axios
			.get('https://api.nasa.gov/planetary/apod?api_key=rTMtsft6oB4TOsR50NZYqOwwE03Yd3QlaH9GcZYY')
			.then((response) => {
				setFilms(response.data);
				console.log(response.data);
			})
			.catch((error) => {
				console.log('The data is not returning', error);
			});
	}, []);
}
