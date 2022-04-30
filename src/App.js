import './index.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/Pages/About';
import Footer from './components/Footer/Footer';
import NoMatch from './components/Pages/NoMatch';
import Location from './components/Pages/Location';
import { RestaurantsDataList } from './components/RestaurantsData/RestaurantsDataList';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route
          index
          element={<Home RestaurantsDataList={RestaurantsDataList} />}
        />
        <Route
          path='/Location/:id'
          element={<Location RestaurantsDataList={RestaurantsDataList} />}
        />
        <Route path='/About' element={<About />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
