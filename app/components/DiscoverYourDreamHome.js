'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const DiscoverYourDreamHome = () => {
    const cards = [
        {
            id: 1,
            image: '/assets/dream-home.svg',
            title: 'Dream Duplex home in Delhi',
            properties: '10+ Properties',
        },
        {
            id: 2,
            image: '/assets/dream2.svg',
            title: 'Appartments in Delhi',
            properties: '20+ Properties',
        },
        {
            id: 3,
            image: '/assets/dream3.svg',
            title: 'Appartments in Delhi',
            properties: '15+ Properties',
        },
        {
            id: 4,
            image: '/assets/dream-home.svg',
            title: 'Appartments in Delhi',
            properties: '12+ Properties',
        },
        {
            id: 5,
            image: '/assets/dream2.svg',
            title: 'Appartments in Delhi',
            properties: '8+ Properties',
        },
        {
            id: 6,
            image: '/assets/dream3.svg',
            title: 'Appartments in Delhi',
            properties: '5+ Properties',
        },
    ]

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 3

    const indexOfLastCard = currentPage * itemsPerPage
    const indexOfFirstCard = indexOfLastCard - itemsPerPage
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard)

    const nextPage = () => {
        if (currentPage < Math.ceil(cards.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1)
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    return (
        <div className='py-14 md:py-24 max-w-[1440px] w-full mx-auto px-4 md:px-10 lg:px-16 xl:px-20'>
            <h2 className='text-[25px] md:text-[32px] leading-[40px] text-[#1E2A38] font-normal mb-6 text-center'>Discover Your Dream Home</h2>
            <p className='text-base md:text-lg leading-[27px] font-normal text-center text-[#777777]'>
                Reliable partners with excellent portfolio to reach new heights together!
            </p>


            <div className='mt-14 max-w-[1124px] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:flex justify-between gap-3'>
                {currentCards.map((card) => (
                    <div key={card.id} className='relative w-full'>
                        <Image src={card.image} alt='dream-home' width={337} height={394} className='w-full md:w-[337px]' />
                        <div className='absolute top-4 left-4 right-4'>
                            <h3 className='text-[#FFFFFF] text-[20px] leading-[25px] font-semibold'>{card.title}</h3>
                            <h4 className='text-[#FFFFFF] text-[14px] leading-[17.64px] font-normal mt-1.5'>{card.properties}</h4>
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex items-center justify-center mt-14 gap-1.5'>
                <button
                    className='min-w-[48px] min-h-[48px] rounded-xl flex items-center justify-center'
                >
                    <Image src='/assets/arrow.svg' alt='arrow' width={20} height={20} />
                </button>
                <button
                    className='bg-[#E1BC8A] min-w-[48px] min-h-[48px] rounded-xl flex items-center justify-center'
                >
                    <Image src='/assets/white-arrow.svg' alt='white-arrow' width={20} height={20} />
                </button>
            </div>
        </div>
    )
}

export default DiscoverYourDreamHome
