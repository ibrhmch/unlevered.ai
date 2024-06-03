import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App" style={{ minHeight: '100vh', color: 'white' }}>
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
