import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div style={{ width: '100%' }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            {/* Add more routes here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
