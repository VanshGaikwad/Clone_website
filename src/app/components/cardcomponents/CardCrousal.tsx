import React from 'react'
import { CardCarousel } from "@/components/ui/card-carousel"

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