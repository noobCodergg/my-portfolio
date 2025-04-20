import React from 'react'
import UpperSection from '../Components/UpperSection'
import Service from '../Components/Service'
import Skill from '../Components/Skill'
import Stat from '../Components/Stat'
import Educations from '../Components/Educations'
import Experience from '../Components/Experience'
import ScrollToTopButton from '../Components/ScrollToTop'

const About = () => {
  return (
    <div>
       <ScrollToTopButton/>
       <UpperSection title="About Me"/>
       <Service/>
       <Skill/>
       <Stat/>
       <Educations/>
       <Experience/>
    </div>
  )
}

export default About
