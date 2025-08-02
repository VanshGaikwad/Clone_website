
import MinimalCard, { MinimalCardDescription, MinimalCardImage, MinimalCardTitle } from '@/components/ui/minimal-card'
import React from 'react'


import BadgeButton from '@/components/ui/badge-button'

const TemplateCard = () => {
     const cards = [
        {
            title: "変数",
            description:
                "Today’s error is tomorrow’s understanding",
            src: "/card5.jpg",
        },
        {
            title: "戻り値",
            description:
                "Failure is the start of learning.",
            src: "/card6.jpg",
        },
        {
            title: "クラス",
            description:
                "Understanding lies beyond the bug.",
            src: "/card7.jpg",
        },
    ]
  return (
    <div>
            <div className='w-[61.5%] p-2 my-20 rounded-3xl shadow bg-white mx-auto'>
                <div className='h-full p-6 bg-[#f4f4f4] shadow rounded-3xl mx-auto'>
                 <BadgeButton></BadgeButton>
                    <div className='flex justify-between items-center'>
                        
                                    {cards.map((card, index) => (
                                        <MinimalCard className="m-2 w-[460px] " key={index}>
                                            <MinimalCardImage
                                                className="h-[170px]"
                                                src={card.src}
                                                alt={card.title}
                                            />
                                            <MinimalCardTitle>{card.title}</MinimalCardTitle>
                                            <MinimalCardDescription>
                                                {card.description}
                                            </MinimalCardDescription>
                                        </MinimalCard>
                                    ))}
                                
                    </div>
                </div>
            </div>


        </div>
  )
}

export default TemplateCard