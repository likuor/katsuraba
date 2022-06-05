import './index.css';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';
import NoMatch from './components/Pages/NoMatch';
import Location from './components/Pages/Location';
import { RestaurantsDataList } from './components/RestaurantsData/RestaurantsDataList';
import { Routes, Route } from 'react-router-dom';
import { db } from './firebase';
import {
  onSnapshot,
  collection,
  getDocs,
  query,
  orderBy,
} from 'firebase/firestore';

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const restaurantsData = collection(db, 'restaurants');
    getDocs(restaurantsData).then((snapShot) => {
      setRestaurants(snapShot.docs.map((doc) => doc.data({ ...doc.data })));
    });

    onSnapshot(query(restaurantsData, orderBy('id')), (restaurant) => {
      setRestaurants(restaurant.docs.map((doc) => ({ ...doc.data() })));
    });
  }, []);

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route
          index
          element={
            <Home
              RestaurantsDataList={RestaurantsDataList}
              dbRestaurant={restaurants}
            />
          }
        />
        <Route
          path='/Brands'
          element={
            <Cards
              RestaurantsDataList={RestaurantsDataList}
              dbRestaurant={restaurants}
            />
          }
        />
        <Route
          path='/Location/:id'
          element={
            <Location
              RestaurantsDataList={RestaurantsDataList}
              dbRestaurant={restaurants}
            />
          }
        />
        <Route path='/About' element={<About />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
