import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UrlProvider } from './contexts/UrlContext';
import EntryPage from './components/entry-page/EntryPage';
import EditPage from './components/EditPage';
import ListPage from './components/list-page/ListPage';
import Navbar from './components/navbar/NavBar';

const App = () => {
  return (
    <Router basename='/url-shortener'>
      <UrlProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<EntryPage />} />
          <Route path="/edit" element={<EditPage />} />
          <Route path="/list" element={<ListPage />} />
        </Routes>
      </UrlProvider>
    </Router>
  );
};

export default App;
