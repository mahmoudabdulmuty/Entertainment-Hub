import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.scss';
import Home from './pages/Home';

function App() {
	const [movies, setMovies] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');

	const API_URL = 'https://api.themoviedb.org/3';

	const fetchMovies = async (searchQuery) => {
		const type = searchQuery ? 'search' : 'discover';

		const {
			data: { results }
		} = await axios.get(`${API_URL}/${type}/movie`, {
			params: {
				api_key: process.env.REACT_APP_MOVIE_API_KEY,
				query: searchQuery
			}
		});
		setMovies(results);
	};

	useEffect(() => {
		fetchMovies();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		fetchMovies(searchQuery);
	};

	const handleQuery = (e) => {
		setSearchQuery(e.target.value);
	};

	return (
		<Home
			searchQuery={searchQuery}
			handleQuery={handleQuery}
			handleSubmit={handleSubmit}
			movies={movies}
		/>
	);
}

export default App;
