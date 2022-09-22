import { Route, Routes } from 'react-router-dom';
import React from 'react'
import './css/basic.scss';

import Wrapper from './pages/Wrapper';
import Header from './pages/Header';
import Main from './pages/Main';
import Explore from './pages/Explore';
import What from './pages/What';
import Place from './pages/Place';
import Footer from './pages/Footer';
import Top from './pages/Top';






const App = () => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Explore' element={<Explore />} />
        <Route path='/What' element={<What />} />
        <Route path='/Place' element={<Place />} />
      </Routes>
      <Footer />
      <Top />
    </Wrapper>
  )
}

export default App;

