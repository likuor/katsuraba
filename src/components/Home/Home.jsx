import React from 'react';
import Slide from '../Slide/Slide';
import Title from '../Title/Title';
import Cards from '../Cards/Cards';
import { RestaurantsDataList } from '../Restaurants/RestaurantsDataList';
import About from '../About/About';

function Home() {
  return (
    <div>
      <Slide RestaurantsDataList={RestaurantsDataList} />
      <Title
        mainTitle='お客様をおもてなしするためのコスト'
        subTitle='”全部”料理に注ぎ込みました。'
        mainDescription='デリバリー専門レストラン'
        subDescription='ご賞味あれ。'
      />
      <Cards RestaurantsDataList={RestaurantsDataList} />
      <About />
    </div>
  );
}

export default Home;
