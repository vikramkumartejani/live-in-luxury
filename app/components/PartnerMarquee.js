'use client'

import { useEffect, useRef } from 'react'

const partners = [
  { name: 'Adira Finance', logo: '/assets/1.svg', width: '219px', height: '120px' },
  { name: 'Adimix RMC', logo: '/assets/2.svg', width: '146px', height: '67px' },
  { name: 'Holcim', logo: '/assets/3.svg', width: '126px', height: '54px' },
  { name: 'MNC', logo: '/assets/4.svg', width: '143px', height: '79px' },
  { name: 'Telkomsel', logo: '/assets/5.svg', width: '163px', height: '45px' }
]

export default function PartnerMarquee() {
  const marqueeRef = useRef(null)

  useEffect(() => {
    const marquee = marqueeRef.current
    const firstGroup = marquee.querySelector('.marquee-group')
    const clone = firstGroup.cloneNode(true)
    marquee.appendChild(clone)
  }, [])

  return (
    <div className="text-center py-10 md:py-24">
      <h2 className="text-[25px] md:text-[32px] font-normal leading-[40px] mb-3 md:mb-6 text-[#1E2A38] px-4">We&apos;ve Partnered With</h2>
      <p className="text-base md:text-lg leading-[27px] font-normal text-[#777777] mb-8 md:mb-14 px-4">
        Reliable partners with excellent portfolio to reach new heights together!
      </p>

      <div className="w-full overflow-hidden">
        <div ref={marqueeRef} className="marquee inline-flex">
          <div className="marquee-group flex items-center ml-10 md:ml-24 gap-10 md:gap-24">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex-none"
                style={{ width: partner.width }}
              >
                <img
                  src={partner.logo}
                  draggable="false"
                  alt={partner.name}
                  style={{ width: partner.width, height: partner.height }}
                  className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

