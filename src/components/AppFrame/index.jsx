import logo from '../../assets/img/logo.png';
import movie from '../../assets/img/movie.png';
import shape from '../../assets/img/shape.png';
import star from '../../assets/img/star.png';
import tv from '../../assets/img/tv.png';
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
				<span>
					<img src={logo} alt="" />
				</span>
			</li>
			<li className="app-frame-item">
				<span>
					<img src={shape} alt="" />
				</span>
			</li>
			<li className="app-frame-item">
				<span>
					<img src={movie} alt="" />
				</span>
			</li>
			<li className="app-frame-item">
				<span>
					<img src={tv} alt="" />
				</span>
			</li>
			<li className="app-frame-item">
				<span>
					<img src={star} alt="" />
				</span>
			</li>
		</ul>
	);
};
export default AppFrame;
