import React from 'react';
import AdminSidebar from './AdminSidebar';
import Navbar from './Navbar';

const AdminLayout = ({ children }) => {
  return (
    <div className="App">
      <AdminSidebar />
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Navbar />
        <div style={{ flex: 1, overflow: 'hidden' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
