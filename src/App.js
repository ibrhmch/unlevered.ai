import React from 'react';
import HomePage from './pages/HomePage';
import NavBar from './components/nav/NavBar';

function App() {
  return (
    <div className="App" style={{ minHeight: '100vh', color: 'white' }}>
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
