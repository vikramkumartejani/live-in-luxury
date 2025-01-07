'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const DiscoverYourDreamHome = () => {
    const [swiperInstance, setSwiperInstance] = useState(null)
    const [slidesPerView, setSlidesPerView] = useState(3)
    const [activeIndex, setActiveIndex] = useState(0)

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

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSlidesPerView(1)
            } else {
                setSlidesPerView(3)
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const CustomPagination = () => {
        return (
            <div className="flex justify-center mt-6 md:mt-10">
                {cards.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${
                            index === activeIndex ? 'bg-[#E1BC8A] w-4' : 'bg-gray-300'
                        }`}
                        onClick={() => swiperInstance.slideTo(index)}
                    />
                ))}
            </div>
        )
    }

    return (
        <div className='py-14 md:py-24 max-w-[1440px] w-full mx-auto px-4 md:px-10 lg:px-16 xl:px-20'>
            <h2 className='text-[25px] md:text-[32px] leading-[40px] text-[#1E2A38] font-semibold mb-6 text-center'>Discover Your Dream Home</h2>
            <p className='text-base md:text-lg leading-[27px] font-normal text-center text-[#777777]'>
                Reliable partners with excellent portfolio to reach new heights together!
            </p>

            <div className='mt-14 max-w-[1124px] w-full mx-auto'>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={12}
                    slidesPerView={slidesPerView}
                    onSwiper={setSwiperInstance}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                >
                    {cards.map((card) => (
                        <SwiperSlide key={card.id}>
                            <div className='relative w-full'>
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
                        </SwiperSlide>
                    ))}
                </Swiper>
                <CustomPagination />
            </div>
        </div>
    )
}

export default DiscoverYourDreamHome

