import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App" style={{ backgroundColor: 'rgb(31 41 55)', minHeight: '100vh', color: 'white' }}>
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
