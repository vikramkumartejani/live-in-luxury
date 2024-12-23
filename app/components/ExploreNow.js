import React from 'react'

const ExploreNow = () => {
    return (
        <div className='w-full relative h-full'>
            <img src='/assets/explore-now.png' alt="explore-now" className='bg-cover bg-center absolute inset-0 w-full h-full' />

            <div className=' absolute w-full h-full bg-[#000000]/40 inset-0'></div>

            <div className='w-full h-full flex items-center flex-col justify-center text-center relative z-30 py-[274px] px-4'>
                <h2 className='text-[#FFFFFF] text-[20px] sm:text-[30px] md:text-[40px] lg:text-[44px] font-normal md:leading-[55px]'>Get Your Luxury Apartment Now!</h2>
                <p className='text-[#FFFFFF] text-sm sm:text-[18px] leading-[27px] font-normal pt-3 md:pt-6'>Use <span className='font-bold'>LiveInLuxury</span> to find out exclusive homes in affordable prices</p>
                <button className='mt-6 bg-[#E1BC8A] rounded-2xl w-[220px] h-[56px] text-white text-[18px] font-medium leading-[22px]'>Explore Now</button>
            </div>
        </div>
    )
}

export default ExploreNow