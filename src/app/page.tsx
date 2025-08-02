import React from 'react'
import Navbar from './components/navbar/Navbar'
import HeroContent from './components/landingpage/HeroContent'
import CardCrousal from './components/cardcomponents/CardCrousal'
import TemplateCard from './components/cardcomponents/TemplateCard'


const page = () => {
  return (
    <div>
      <Navbar />
      <HeroContent />
     <CardCrousal/>
     <TemplateCard/>
    </div>
  )
}

export default page