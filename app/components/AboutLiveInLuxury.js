import React from 'react'
// import ImageSlider from './ImageSlider'

const AboutLiveInLuxury = () => {
  return (
    <>
      <div className='py-14 md:py-20 w-full text-center !overflow-hidden px-4'>
        <div className='h-[3px] bg-[#E1BC8A] w-[40px] mx-auto rounded-3xl'></div>
        <h2 className='text-[#1E2A38] text-[25px] md:text-[32px] leading-[40px] font-normal mt-6'>About LiveInLuxury</h2>
        <p className='text-[#777777] text-base md:text-[18px] leading-[27px] font-normal mt-6 max-w-[800px] mx-auto'>For more than 40 years, we’ve dedicated ourselves to enhancing everyday life with thoughtfully crafted designs. At Live in Luxury, we’re committed to creating sustainable homes that elevate your lifestyle. The future of luxury living is here, and it’s designed for you.</p>

        {/* Boxes */}
        <div className='mt-8 md:mt-10 max-w-[848px] mx-auto w-full grid grid-cols-2 md:flex items-start justify-between gap-4'>
          <div className='flex flex-col items-start md:gap-1'>
            <h1 className='text-[#1E2A38] text-[35px] md:text-[48px] leading-[60px] font-normal'>31<span className='text-[#E1BC8A]'>+</span></h1>
            <p className='text-[#777777] text-xs md:text-[16px] leading-[20.16px] font-normal'>Buildings Made</p>
          </div>
          <div className='flex flex-col items-start md:gap-1'>
            <h1 className='text-[#1E2A38] text-[35px] md:text-[48px] leading-[60px] font-normal'>11<span className='text-[#E1BC8A]'>+</span></h1>
            <p className='text-[#777777] text-xs md:text-[16px] leading-[20.16px] font-normal'>Years of Experience</p>
          </div>
          <div className='flex flex-col items-start md:gap-1'>
            <h1 className='text-[#1E2A38] text-[35px] md:text-[48px] leading-[60px] font-normal'>$190m<span className='text-[#E1BC8A]'>+</span></h1>
            <p className='text-[#777777] text-xs md:text-[16px] leading-[20.16px] font-normal'>Equity Investment</p>
          </div>
          <div className='flex flex-col items-start md:gap-1'>
            <h1 className='text-[#1E2A38] text-[35px] md:text-[48px] leading-[60px] font-normal'>300<span className='text-[#E1BC8A]'>+</span></h1>
            <p className='text-[#777777] text-xs md:text-[16px] leading-[20.16px] font-normal'>Happy Homes</p>
          </div>
        </div>

      </div>
      {/* <ImageSlider /> */}
    </>
  )
}

export default AboutLiveInLuxury