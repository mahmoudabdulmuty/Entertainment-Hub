import { useEffect, useState } from 'react';
import AppFrame from '../../components/AppFrame';
import FeaturedMovie from '../../components/FeaturedMovie/';
import Navigation from '../../components/Menubar';
const Home = ({ movies, handleSubmit, handleQuery, searchQuery }) => {
	const [isShow, setIsShow] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			setIsShow(false);
		});

		return () => {
			window.removeEventListener('scroll', () => {
				setIsShow(false);
			});
		};
	}, [isShow]);

	return (
		<>
			<Navigation
				searchQuery={searchQuery}
				handleQuery={handleQuery}
				handleSubmit={handleSubmit}
				isShow={isShow}
				handleAppFrame={() => setIsShow(!isShow)}
			/>
			<AppFrame isShow={isShow} />
			<div className="featured-container">
				{movies.map(({ id, ...otherProps }) => (
					<FeaturedMovie key={id} {...otherProps} />
				))}
			</div>
		</>
	);
};
export default Home;
