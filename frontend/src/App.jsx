import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import Home from './pages/home';
import NotFound from './pages/NotFound';
import './index.css';

function App() {
	return (
		// router init here + routes
    <Router>
      <Layout>
			<Routes>
				{/* All routes are here */}
        <Route path='/' element={<Home />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Layout> 
    </Router>
  );
}

export default App;
