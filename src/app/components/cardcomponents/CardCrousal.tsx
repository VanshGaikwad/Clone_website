import React from 'react'
import { CardCarousel } from "@/components/ui/card-carousel"
import card1 from '/public/card1.jpg'
import card2 from '/public/card2.jpg'
import card3 from '/public/card3.jpg'
import card4 from '/public/card4.jpg'
const CardCrousal = () => {
     const images = [
        {src:'/card1.jpg',alt:"Image 1"},
        {src:'/card2.jpg',alt:"Image 2"},
        {src:'/card3.jpg',alt:"Image 3"},
        {src:'/card4.jpg',alt:"Image 4"},
    ]
  return (
     <div>
        <CardCarousel images={images} showPagination={false} />
    </div>
  )
}

export default CardCrousal