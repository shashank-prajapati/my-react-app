import React from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import LandingPage from './components/pages/landingPage/LandingPage';
import EntrepreneurshipBooks from './components/pages/entrepreneurshipBooks/EntrepreneurshipBooks';
import BookDetailsPage from './components/pages/bookDetails/BookDetailsPage';

function App() {
  return (
    <Router>
    <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/explore-books/:category' element={<EntrepreneurshipBooks/>} />
        <Route path='/book/beyond-entrepreneurship-2.0' element={<BookDetailsPage/>}/>
    </Routes>
    </Router>
  );
}

export default App;
