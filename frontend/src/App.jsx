import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    
        <Routes>
          <Route path="/" element={<Layout/>} >
            <Route index element={<Home />} />
          
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="*" element={<ErrorPage />} />

          </Route>
        </Routes>
   
   
  );
}

export default App;
