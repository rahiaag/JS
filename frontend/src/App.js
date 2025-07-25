import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddVendor from './pages/AddVendor';
import EditVendor from './pages/EditVendor';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={<AddVendor />} />
        <Route path="/edit/:id" element={<EditVendor />} />
      </Routes>
    </Router>
  );
}

export default App;