import account from '../../assets/img/account.png';
import settings from '../../assets/img/settings.png';
import Search from '../Search';
import './Menubar.scss';

function Navigation({
	handleAppFrame,
	handleSubmit,
	handleQuery,
	searchQuery
}) {
	return (
		<menu className="menu">
			<span>
				<img src={account} alt="" />
			</span>
			<span onClick={handleAppFrame}>
				<img src={settings} alt="" />
			</span>
			<Search
				searchQuery={searchQuery}
				handleQuery={handleQuery}
				handleSubmit={handleSubmit}
			/>
		</menu>
	);
}
export default Navigation;
