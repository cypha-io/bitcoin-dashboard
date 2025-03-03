import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomeLayout from './components/HomeLayout';
import AdminLayout from './components/AdminLayout';
import UserSidebar from './components/UserSidebar';
import Home from './components/Home';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import Users from './components/Users';
import Transactions from './components/Transactions';
import BTC from './components/BTC';
import ManagePaymentAPIs from './components/ManagePaymentAPIs';
import Contact from './components/Contact';
import Support from './components/Support';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout><Home /></HomeLayout>} />
        <Route path="/contact" element={<HomeLayout><Contact /></HomeLayout>} />
        <Route path="/support" element={<HomeLayout><Support /></HomeLayout>} />
        <Route path="/admin/*" element={<AdminLayout />} />
        <Route path="/user-dashboard/*" element={<UserSidebar />} />
      </Routes>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <Routes>
            <Route path="/admin-dashboard" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
            <Route path="/admin/users" element={<AdminLayout><Users /></AdminLayout>} />
            <Route path="/admin/transactions" element={<AdminLayout><Transactions /></AdminLayout>} />
            <Route path="/admin/btc" element={<AdminLayout><BTC /></AdminLayout>} />
            <Route path="/admin/manage-payment-apis" element={<AdminLayout><ManagePaymentAPIs /></AdminLayout>} />
            <Route path="/user-dashboard/:userId" element={<UserDashboard />} />
            {/* Add more routes here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
