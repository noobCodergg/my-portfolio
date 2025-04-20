import React from 'react'

import Hero from '../Components/Hero'
import Service from '../Components/Service'
import Stat from '../Components/Stat'
import Skill from '../Components/Skill'
import Header1 from '../Components/Header1'
import Educations from '../Components/Educations'
import Experience from '../Components/Experience'
import Add from '../Components/Add'
import PrizeWheel from '../Components/Spinner'
import ScrollToTopButton from '../Components/ScrollToTop'


const Home = () => {
  return (
    <div>
      <Hero/>
      <Service/>
      <Stat/>
      <Skill/>
      <Header1/>
      <Educations/>
      <Experience/>
      <Add/>
      <PrizeWheel/>
      <ScrollToTopButton/>
    </div>
  )
}

export default Home
