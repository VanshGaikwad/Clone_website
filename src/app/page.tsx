'use client'
import React from 'react'
import Navbar from './components/navbar/Navbar'
import HeroContent from './components/landingpage/HeroContent'
import CardCrousal from './components/cardcomponents/CardCrousal'
import TemplateCard from './components/cardcomponents/TemplateCard'
import AiinputCard from './components/cardcomponents/AiinputCard'
import ThemeChange from './components/cardcomponents/ThemeChange'


const page = () => {
  return (
    <div>
      <Navbar />
      <HeroContent />
     <CardCrousal/>
     <TemplateCard/>
     <AiinputCard/>
     <ThemeChange/>
     
    </div>
  )
}

export default page