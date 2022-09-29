import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Videos from './components/Videos/Videos';
import NotFound from './pages/NotFound';
import User from './pages/User';
import VideoPage from './pages/VideoPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout >
          <Routes>
            <Route path='/' element={<Videos />} />
            <Route path='/videos/:videoId' element={<VideoPage />} />
            <Route path="/user" element={<User />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
