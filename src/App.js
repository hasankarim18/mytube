import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css';
import Layout from './components/Layout';
import Videos from './components/Videos/Videos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout >
          <Routes>
            <Route path='/' element={<Videos />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
