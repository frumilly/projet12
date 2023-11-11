import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    
        <Routes>
          <Route path="/" element={<Layout/>} >
            <Route index element={<Home />} />
          
            <Route path="/profile/:id" element={<Profile />} />

          </Route>
        </Routes>
   
   
  );
}

export default App;
