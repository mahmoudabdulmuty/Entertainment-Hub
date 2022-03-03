import { useEffect, useState } from 'react';
import AppFrame from '../../components/AppFrame';
import FeaturedMovie from '../../components/FeaturedMovie/';
import Navigation from '../../components/Navigation';
const Home = ({ movies }) => {
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
			<Navigation isShow={isShow} handleAppFrame={() => setIsShow(!isShow)} />
			<AppFrame isShow={isShow} />
			<div className="featured-container">
				{movies
					.filter((movie, idx) => idx < 3)
					.map(({ id, ...otherProps }) => (
						<FeaturedMovie key={id} {...otherProps} />
					))}
			</div>
		</>
	);
};
export default Home;
