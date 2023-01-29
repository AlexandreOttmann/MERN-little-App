import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Articles from './pages/Articles';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
				<Route path='/articles' element={<Articles />} />
      </Routes>
    </Router>
  );
}

export default App;
