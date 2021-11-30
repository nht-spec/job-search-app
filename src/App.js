import { Redirect, Route, Switch } from 'react-router';
import './App.scss';
import LogoHeader from './components/LogoHeader/LogoHeader';
import JobFeatures from './features';
import DetailPage from './features/pages/DetailPage/DetailPage';

function App() {
	return (
		<div className='App'>
			<LogoHeader />
			<Switch>
				<Redirect from='/' to='/home' exact />
				<Route path='/home' component={JobFeatures} />
				<Route path='/job/:jobId' component={DetailPage} />
			</Switch>
		</div>
	);
}

export default App;
