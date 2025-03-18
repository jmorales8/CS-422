// src/App.jsx
import React from 'react';
import Navbar from './NavigationBar/NavigationBar';
import Sidebar from './SideBar/SideBar';
import MainContent from './MainContent/MainContent';
import Footer from './Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="body">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
