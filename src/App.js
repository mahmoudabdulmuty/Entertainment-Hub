import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home';

function App() {
	const [movies, setMovies] = useState([]);
	const API_URL = 'https://api.themoviedb.org/3';

	const fetchMovies = async () => {
		const {
			data: { results }
		} = await axios.get(`${API_URL}/discover/movie`, {
			params: {
				api_key: process.env.REACT_APP_MOVIE_API_KEY
			}
		});
		setMovies(results);
	};

	useEffect(() => {
		fetchMovies();
	}, [movies]);

	return (
		<>
			<Home movies={movies} />
		</>
	);
}

export default App;
