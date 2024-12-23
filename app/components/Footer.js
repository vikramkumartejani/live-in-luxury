import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  const socialLinks = [
    { href: '/', src: '/assets/facebook.svg', alt: 'facebook' },
    { href: '/', src: '/assets/x.svg', alt: 'x' },
    { href: '/', src: '/assets/instagram.svg', alt: 'instagram' },
    { href: '/', src: '/assets/linkedin.svg', alt: 'linkedin' },
  ]

  const liveInLuxuryLinks = [
    { text: 'Home', href: '/' },
    { text: 'Contact Us', href: '/' },
    { text: 'About Us', href: '/' },
    { text: 'Equity Market', href: '/' },
  ]

  const ourProjectsLinks = [
    { text: 'Mandra Heights', href: '/' },
    { text: 'Mandra Heights', href: '/' },
    { text: 'Mandra Heights', href: '/' },
    { text: 'Mandra Heights', href: '/' },
  ]

  const bestLocationLinks = [
    { text: 'Properties In Kalyan Dombivli', href: '/' },
    { text: 'Properties In Kalyan Dombivli', href: '/' },
    { text: 'Properties In Kalyan Dombivli', href: '/' },
    { text: 'Properties In Kalyan Dombivli', href: '/' },
  ]

  const bestDevelopersLinks = [
    { text: 'Real Estate Agents in Ahmedabad', href: '/' },
    { text: 'Real Estate Agents in Ahmedabad', href: '/' },
    { text: 'Real Estate Agents in Ahmedabad', href: '/' },
    { text: 'Real Estate Agents in Ahmedabad', href: '/' },
  ]

  const bestBudgetBracketsLinks = [
    { text: 'Properties under 50 lakhs', href: '/' },
    { text: 'Properties under 60 lakhs', href: '/' },
    { text: 'Properties under 70 lakhs', href: '/' },
    { text: 'Properties under 80 lakhs', href: '/' },
  ]

  return (
    <div className='w-full bg-[#E1BC8A] py-10 md:pt-[96px] md:pb-[48px]'>
        <div className='w-full max-w-[1440px] mx-auto px-4 md:px-7 lg:px-[40px] xl:px-[60px]'>
            {/* Content */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-16'>
                <div className='xl:w-[300px]'>
                    <Image src='/assets/logo-white.svg' alt='logo' width={151} height={79} />
                    <p className='text-[#FFFFFF] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px] font-light mt-3'>Luxurious Residences at the tap of a button.</p>
                    <div className='mt-4 flex items-center gap-4'>
                        {socialLinks.map((link, index) => (
                            <Link key={index} href={link.href}>
                                <Image src={link.src} alt={link.alt} width={28} height={28} />
                            </Link>
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className='text-white text-[18px] sm:text-[20px] leading-[36px] sm:leading-[48px] font-bold tracking-[0.3px] mb-2'>LiveInLuxury</h2>
                    <ul className='flex flex-col gap-4'>
                        {liveInLuxuryLinks.map((link, index) => (
                            <li key={index} className='text-[#FFFFFF] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[20.16px] font-normal'>
                                <Link href={link.href}>{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className='text-white text-[18px] sm:text-[20px] leading-[36px] sm:leading-[48px] font-bold tracking-[0.3px] mb-2'>Our Projects</h2>
                    <ul className='flex flex-col gap-4'>
                        {ourProjectsLinks.map((link, index) => (
                            <li key={index} className='text-[#FFFFFF] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[20.16px] font-normal'>
                                <Link href={link.href}>{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='md:block hidden'>
                    <h2 className='text-white text-[18px] sm:text-[20px] leading-[36px] sm:leading-[48px] font-bold tracking-[0.3px] mb-2'>Support</h2>
                    <div className='flex items-center gap-4'>
                        <Image src='/assets/email.svg' alt='email' width={24} height={24} />
                        <p className='text-[#FFFFFF] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[20.16px] font-normal'>agensi@mail.com</p>
                    </div>
                    <div className='mt-4 flex items-center gap-4'>
                        <Image src='/assets/phone.svg' alt='phone' width={24} height={24} />
                        <p className='text-[#FFFFFF] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[20.16px] font-normal'>+ 12 3456 7890</p>
                    </div>
                </div>
            </div>

            <div className='mt-8 md:mt-[69px] pb-[46px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-16'>
                <div className='xl:block hidden'></div>
                <div>
                    <h2 className='text-white text-[18px] sm:text-[20px] leading-[36px] sm:leading-[48px] font-bold tracking-[0.3px] mb-2'>Best Location</h2>
                    <ul className='flex flex-col gap-4'>
                        {bestLocationLinks.map((link, index) => (
                            <li key={index} className='text-[#FFFFFF] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[20.16px] font-normal'>
                                <Link href={link.href}>{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className='text-white text-[18px] sm:text-[20px] leading-[36px] sm:leading-[48px] font-bold tracking-[0.3px] mb-2'>Best Developers</h2>
                    <ul className='flex flex-col gap-4'>
                        {bestDevelopersLinks.map((link, index) => (
                            <li key={index} className='text-[#FFFFFF] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[20.16px] font-normal'>
                                <Link href={link.href}>{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className='text-white text-[18px] sm:text-[20px] leading-[36px] sm:leading-[48px] font-bold tracking-[0.3px] mb-2'>Best Budget Brackets</h2>
                    <ul className='flex flex-col gap-4'>
                        {bestBudgetBracketsLinks.map((link, index) => (
                            <li key={index} className='text-[#FFFFFF] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[20.16px] font-normal'>
                                <Link href={link.href}>{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className='block md:hidden'>
                    <h2 className='text-white text-[18px] sm:text-[20px] leading-[36px] sm:leading-[48px] font-bold tracking-[0.3px] mb-2'>Support</h2>
                    <div className='flex items-center gap-4'>
                        <Image src='/assets/email.svg' alt='email' width={24} height={24} />
                        <p className='text-[#FFFFFF] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[20.16px] font-normal'>agensi@mail.com</p>
                    </div>
                    <div className='mt-4 flex items-center gap-4'>
                        <Image src='/assets/phone.svg' alt='phone' width={24} height={24} />
                        <p className='text-[#FFFFFF] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[20.16px] font-normal'>+ 12 3456 7890</p>
                    </div>
                </div>

            <div className='mt-8 flex items-center flex-wrap justify-between gap-4 max-w-[1232px] mx-auto'>
                <p className='text-white text-[12px] leading-[16px] tracking-[0.26px] font-normal'>Design with love © TanahAirStudio 2020. All rights reserved</p>
                <Link href='' className='text-white text-[12px] leading-[16px] tracking-[0.26px] font-normal'>Claim Privacy Terms</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer
