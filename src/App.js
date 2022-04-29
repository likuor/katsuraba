import './App.css';
import './index.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/Pages/About';
import Footer from './components/Footer/Footer';
import NoMatch from './components/Pages/NoMatch';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
