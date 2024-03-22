import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Container, Row } from 'reactstrap';
import Header from './components/MovieHeader';
import HomeRoute from './pages/HomeRoute';
import MovieRoute from './pages/MovieRoute';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <Router>
    <div className="page">
      <Header onSearch={setSearchResults}/>
      <main className="my-3 py-5">
        <Container fluid className="max-width-container">
          <Row>
            
              <Routes>
                <Route exact path="/" element={<HomeRoute />} />
                <Route path="/movies" element={<MovieRoute searchResults={searchResults} />} />
              </Routes>
            
          </Row>
        </Container>
      </main>
    </div>
  </Router>
);
}

export default App;
