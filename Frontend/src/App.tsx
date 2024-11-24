import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard/Dashboard';  // Import Dashboard correctly
import "./App.css";
import { LoginPage } from './pages/LoginPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard/*" element={<Dashboard />} />  {/* Handle nested routes under /dashboard */}
        {/* Other routes can go here */}
      </Routes>
    </Router>
  );
}

export default App;
