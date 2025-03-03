import React from 'react';
import { Outlet } from 'react-router-dom';
import UserSidebar from './UserSidebar';

const UserLayout = () => {
  return (
    <div className="App">
      <UserSidebar />
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
