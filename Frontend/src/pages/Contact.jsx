import React from 'react'
import UpperSection from '../Components/UpperSection'
import SocialCards from '../Components/SocialCards'
import Hire from '../Components/Hire'
import ScrollToTopButton from '../Components/ScrollToTop'

const Contact = () => {
  return (
    <div>
      <ScrollToTopButton/>
      <UpperSection title="Contact Me"/>
      <SocialCards/>
      <Hire/>
      
    </div>
  )
}

export default Contact
