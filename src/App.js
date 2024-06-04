import React from 'react';
import HomePage from './pages/HomePage';
import NavBar from './components/Nav/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="flex-col" style={{ minHeight: '100vh', color: 'white' }}>
      <NavBar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
