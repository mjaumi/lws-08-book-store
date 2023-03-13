import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddBook from './components/AddBook/AddBook';
import BookList from './components/BookList/BookList';
import EditBook from './components/EditBook/EditBook';
import Layout from './Layout/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<BookList />} />
          <Route path='/add-book' element={<AddBook />} />
          <Route path='/edit-book/:bookId' element={<EditBook />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
