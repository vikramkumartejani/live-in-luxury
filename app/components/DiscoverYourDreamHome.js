'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const DiscoverYourDreamHome = () => {
    const cards = [
        {
            id: 1,
            image: '/assets/dream-home.svg',
            title: 'Dream Duplex home in Delhi 1',
            properties: '10+ Properties',
        },
        {
            id: 2,
            image: '/assets/dream2.svg',
            title: 'Appartments in Delhi 2',
            properties: '20+ Properties',
        },
        {
            id: 3,
            image: '/assets/dream3.svg',
            title: 'Appartments in Delhi 3',
            properties: '15+ Properties',
        },
        {
            id: 4,
            image: '/assets/dream-home.svg',
            title: 'Appartments in Delhi 4',
            properties: '12+ Properties',
        },
        {
            id: 5,
            image: '/assets/dream2.svg',
            title: 'Appartments in Delhi 5',
            properties: '8+ Properties',
        },
        {
            id: 6,
            image: '/assets/dream3.svg',
            title: 'Appartments in Delhi 6',
            properties: '5+ Properties',
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(3)  // Default to 3 for large screens

    const totalCards = cards.length

    // Function to handle window resize and update items per page
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(1)  // For small screens, show 1 card per page
            } else {
                setItemsPerPage(3)  // For medium and above screens, show 3 cards per page
            }
        }

        // Set initial itemsPerPage based on window size
        handleResize()

        // Attach resize event listener
        window.addEventListener('resize', handleResize)

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    // Calculate the index of the last card and first card for the current page
    const indexOfLastCard = currentIndex + itemsPerPage
    const indexOfFirstCard = currentIndex

    // Show cards between indexOfFirstCard and indexOfLastCard
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard)

    // Handle previous button click (show previous set of cards)
    const handlePrevPage = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - itemsPerPage)
        }
    }

    // Handle next button click (show next set of cards)
    const handleNextPage = () => {
        if (currentIndex + itemsPerPage < totalCards) {
            setCurrentIndex(currentIndex + itemsPerPage)
        }
    }

    // Handle showing one card at a time after showing 3 cards initially
    const handlePrevCard = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    const handleNextCard = () => {
        if (currentIndex + 1 < totalCards) {
            setCurrentIndex(currentIndex + 1)
        }
    }

    return (
        <div className='py-14 md:py-24 max-w-[1440px] w-full mx-auto px-4 md:px-10 lg:px-16 xl:px-20'>
            <h2 className='text-[25px] md:text-[32px] leading-[40px] text-[#1E2A38] font-semibold mb-6 text-center'>Discover Your Dream Home</h2>
            <p className='text-base md:text-lg leading-[27px] font-normal text-center text-[#777777]'>
                Reliable partners with excellent portfolio to reach new heights together!
            </p>

            {/* Show the current set of cards */}
            <div className='mt-14 max-w-[1124px] w-full mx-auto overflow-x-auto flex justify-between gap-3'>
                {currentCards.map((card) => (
                    <div key={card.id} className='relative w-full'>
                        <Image
                            src={card.image}
                            alt='dream-home'
                            width={337}
                            height={394}
                            className='w-full md:w-[337px]'
                        />
                        <div className='absolute top-4 left-4 right-4'>
                            <h3 className='text-[#FFFFFF] text-[18px] sm:text-[16px] lg:text-[20px] leading-[25px] font-semibold'>{card.title}</h3>
                            <h4 className='text-[#FFFFFF] text-[14px] leading-[17.64px] font-normal mt-1.5'>{card.properties}</h4>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination buttons */}
            <div className='flex items-center justify-center mt-14 gap-1.5'>
                {/* Previous Button */}
                <button
                    onClick={currentIndex === 0 ? handlePrevCard : handlePrevPage}
                    disabled={currentIndex === 0}
                    className='bg-[#E1BC8A] min-w-[48px] min-h-[48px] rounded-xl flex items-center justify-center disabled:opacity-50'
                >
                    <IoIosArrowBack size={20} color='white' />
                </button>
                {/* Next Button */}
                <button
                    onClick={currentIndex + itemsPerPage >= totalCards ? handleNextCard : handleNextPage}
                    disabled={currentIndex + itemsPerPage >= totalCards}
                    className='bg-[#E1BC8A] min-w-[48px] min-h-[48px] rounded-xl flex items-center justify-center disabled:opacity-50'
                >
                    <IoIosArrowForward size={20} color='white' />
                </button>
            </div>
        </div>
    )
}

export default DiscoverYourDreamHome
