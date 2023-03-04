import React from 'react';
import Hero from '../../components/hero/Hero';
import Destinations from '../../components/destinations/Destinations';
import Packages from './../../pages/packages/Packages';

const Home = () => {
  return (
    <>
        <Hero />
        <Destinations />
        <Packages />
    </>
  )
}

export default Home;