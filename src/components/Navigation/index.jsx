import account from '../../assets/account.png';
import settings from '../../assets/settings.png';
import './Navigation.scss';

function Navigation({ handleAppFrame }) {
	return (
		<ul className="nav">
			<li className="nav-item">
				<a href="/">
					<img src={account} alt="" />
				</a>
			</li>
			<li className="nav-item">
				<span onClick={handleAppFrame}>
					<img src={settings} alt="" />
				</span>
			</li>
		</ul>
	);
}
export default Navigation;
