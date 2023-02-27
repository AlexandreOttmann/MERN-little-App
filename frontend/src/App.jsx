import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import './index.css';

function App() {
	return (
		// router init here + routes
    <Router>
			<Routes>
				{/* All routes are here */}
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
