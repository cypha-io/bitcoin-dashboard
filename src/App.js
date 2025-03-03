import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomeLayout from './components/HomeLayout';
import AdminLayout from './components/AdminLayout';
import UserLayout from './components/UserLayout';
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
        <Route path="/admin-dashboard/*" element={<AdminLayout />}>
          <Route path="" element={<AdminDashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="btc" element={<BTC />} />
          <Route path="manage-payment-apis" element={<ManagePaymentAPIs />} />
        </Route>
        <Route path="/user-dashboard/*" element={<UserLayout />}>
          <Route path="" element={<UserDashboard />} />
          <Route path="transactions" element={<Transactions />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
