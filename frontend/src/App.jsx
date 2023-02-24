import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Articles from './pages/Articles';
import SingleArticle from './pages/SingleArticle';

function App() {
	return (
		// router init here + routes
    <Router>
			<Routes>
				{/* All routes are here */}
        <Route path='/' element={<Home />} />
				<Route path='/articles' element={<Articles />} />
				{/* Route with params */}
				<Route path='/articles/:id' element={<SingleArticle />} />
      </Routes>
    </Router>
  );
}

export default App;
