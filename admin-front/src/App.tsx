import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OtherPage from './pages/OtherPage';

function App() {
  return (
    <Routes>
      <Route path='' element={<HomePage/>} />
      <Route path='/other' element={<OtherPage/>} />
    </Routes>
  );
}

export default App;
