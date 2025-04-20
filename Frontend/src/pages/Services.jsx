import React from 'react'
import UpperSection from '../Components/UpperSection'
import ServiceDetail from '../Components/ServiceDetail'
import Heading2 from '../Components/Heading2'
import Heading3 from '../Components/Heading3'
import Pricing from '../Components/Pricing'
import Hire from '../Components/Hire'
import ScrollToTopButton from '../Components/ScrollToTop'

const Services = () => {
  return (
    <div>
      <UpperSection title="My Services"/>
      <Heading2/>
      <ServiceDetail/>
      <Heading3/>
      <Pricing/>
      <Hire/>
      <ScrollToTopButton/>
    </div>
  )
}

export default Services
