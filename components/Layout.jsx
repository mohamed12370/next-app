import React from 'react';
import Navbar from './Navbar.jsx';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      {children}
    </div>
  );
}
