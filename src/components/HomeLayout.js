import React from 'react';
import HomeSidebar from './HomeSidebar';
import Navbar from './Navbar';

const HomeLayout = ({ children }) => {
  return (
    <div className="App">
      <HomeSidebar />
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Navbar />
        <div style={{ flex: 1, overflow: 'hidden' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
