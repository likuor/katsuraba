import React from 'react';
import Slide from '../Slide/Slide';
import Title from '../Title/Title';
import Cards from '../Cards/Cards';
import About from '../About/About';

function Home(props) {
  return (
    <div className='mt-10 md:mt-15'>
      <Slide
        RestaurantsDataList={props.RestaurantsDataList}
        dbRestaurant={props.dbRestaurant}
      />
      <Title
        mainTitle='お客様をおもてなしするためのコスト'
        subTitle='”全部”料理に注ぎ込みました。'
        mainDescription='デリバリー専門レストラン'
        subDescription='ご賞味あれ。'
      />
      <Cards
        RestaurantsDataList={props.RestaurantsDataList}
        dbRestaurant={props.dbRestaurant}
      />
      <About />
    </div>
  );
}

export default Home;
