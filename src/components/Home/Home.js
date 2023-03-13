import React, { useEffect, useState } from 'react';
import ImageSlider from '../ImageSlider/ImageSlider';
import Movies from '../Movies/Movies';
import Viewers from '../Viewers/Viewers';
import './Home.css';



const Home = () => {


  return (
    <div className='home_container'>
        <ImageSlider></ImageSlider>
        <Viewers></Viewers>
        <Movies></Movies>
    </div>
  )
}

export default Home;