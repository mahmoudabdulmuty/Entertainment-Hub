import { useEffect, useState } from 'react';
import closeIcon from '../../assets/img/close.png';
import searchIcon from '../../assets/img/search.png';
import './Search.scss';

const Search = ({ handleSubmit, handleQuery, searchQuery }) => {
	const [showSearch, setShowSearch] = useState(false);

	const handleEscKey = (e) => {
		if (e.key === 'Escape') setShowSearch(false);
	};

	const handleClick = (e) => {
		if (e.target.tagName === 'FORM') setShowSearch(false);
	};

	useEffect(() => {
		document.addEventListener('keydown', handleEscKey);
		document.addEventListener('click', handleClick);
		return () => {
			document.removeEventListener('keydown', handleEscKey);
			document.removeEventListener('click', handleClick);
		};
	}, []);

	return (
		<>
			<form
				className="search-form"
				onSubmit={handleSubmit}
				style={{
					visibility: showSearch ? 'visible' : 'hidden',
					opacity: showSearch ? '1' : '0'
				}}
			>
				<input
					className="search-input"
					type="text"
					value={searchQuery}
					onChange={(e) => handleQuery(e)}
				/>
			</form>
			<img
				className="search-icon"
				src={showSearch ? closeIcon : searchIcon}
				onClick={() => setShowSearch(!showSearch)}
				alt="search icon"
			/>
		</>
	);
};
export default Search;
