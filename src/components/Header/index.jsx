import './Header.scss';

const Header = ({ title, overview }) => {
	// const textArray = overview.split('');

	// const text = textArray.slice(0, textArray.indexOf('.')).join('');

	return (
		<div className="header">
			<h1 className="title">{title}</h1>
			<p className="overview">{overview}</p>
			<button className="btn">Watch Now</button>
		</div>
	);
};
export default Header;
