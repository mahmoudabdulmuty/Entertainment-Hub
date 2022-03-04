import Header from '../Header';
import './FeaturedMovie.scss';

const FeaturedMovie = ({ title, backdrop_path, overview }) => {
	const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';
	return (
		<div
			className="featured-movie"
			style={{
				backgroundImage: `linear-gradient(269.96deg, rgba(29, 29, 29, 0) 0.04%, rgba(29, 29, 29, 0.8) 99.5%), url(${IMAGE_PATH}${backdrop_path})`
			}}
		>
			<Header title={title} overview={overview} />
		</div>
	);
};
export default FeaturedMovie;
