import logo from '../../assets/logo.png';
import movie from '../../assets/movie.png';
import shape from '../../assets/shape.png';
import star from '../../assets/star.png';
import tv from '../../assets/tv.png';
import './AppFrame.scss';

const AppFrame = ({ isShow }) => {
	return (
		<ul
			className="app-frame-list"
			style={{
				visibility: isShow ? 'visible' : 'hidden',
				opacity: isShow ? 1 : 0
			}}
		>
			<li className="app-frame-item">
				<a href="/">
					<img src={logo} alt="" />
				</a>
			</li>
			<li className="app-frame-item">
				<a href="/">
					<img src={shape} alt="" />
				</a>
			</li>
			<li className="app-frame-item">
				<a href="/">
					<img src={movie} alt="" />
				</a>
			</li>
			<li className="app-frame-item">
				<a href="/">
					<img src={tv} alt="" />
				</a>
			</li>
			<li className="app-frame-item">
				<a href="/">
					<img src={star} alt="" />
				</a>
			</li>
		</ul>
	);
};
export default AppFrame;
