'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const AboutUs = () => {
    const projects = [
        {
            id: 1,
            image: '/assets/aboutus.svg',
            title: 'Mandra Heights',
            price: '$240k - 300k',
            location: 'Main Junction, Bangalore',
            bhk: '1, 2, 3 BHK',
            sqft: '520 - 1400 Sq Ft',
        },
        {
            id: 2,
            image: '/assets/aboutus1.svg',
            title: 'Mandra Heights',
            price: '$240k - 300k',
            location: 'Main Junction, Bangalore',
            bhk: '1, 2, 3 BHK',
            sqft: '520 - 1400 Sq Ft',
        },
        {
            id: 3,
            image: '/assets/aboutus2.svg',
            title: 'Mandra Heights',
            price: '$240k - 300k',
            location: 'Main Junction, Bangalore',
            bhk: '1, 2, 3 BHK',
            sqft: '520 - 1400 Sq Ft',
        },
        {
            id: 4,
            image: '/assets/aboutus3.svg',
            title: 'Mandra Heights',
            price: '$240k - 300k',
            location: 'Main Junction, Bangalore',
            bhk: '1, 2, 3 BHK',
            sqft: '520 - 1400 Sq Ft',
        },
        {
            id: 5,
            image: '/assets/aboutus.svg',
            title: 'Mandra Heights',
            price: '$240k - 300k',
            location: 'Main Junction, Bangalore',
            bhk: '1, 2, 3 BHK',
            sqft: '520 - 1400 Sq Ft',
        },
        {
            id: 6,
            image: '/assets/aboutus1.svg',
            title: 'Mandra Heights',
            price: '$240k - 300k',
            location: 'Main Junction, Bangalore',
            bhk: '1, 2, 3 BHK',
            sqft: '520 - 1400 Sq Ft',
        },
        {
            id: 7,
            image: '/assets/aboutus2.svg',
            title: 'Mandra Heights',
            price: '$240k - 300k',
            location: 'Main Junction, Bangalore',
            bhk: '1, 2, 3 BHK',
            sqft: '520 - 1400 Sq Ft',
        },
        {
            id: 8,
            image: '/assets/aboutus3.svg',
            title: 'Mandra Heights',
            price: '$240k - 300k',
            location: 'Main Junction, Bangalore',
            bhk: '1, 2, 3 BHK',
            sqft: '520 - 1400 Sq Ft',
        },
    ];

    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleSeeMoreClick = () => {
        setShowAll(!showAll);
    };

    return (
        <div className="pt-10 md:pt-[30px] pb-[67px] max-w-[1440px] w-full mx-auto px-4 md:px-10 lg:px-10 xl:px-20">
            <div className="text-center">
                <h2 className="text-[#1E2A38] text-[25px] md:text-[32px] leading-[40px] font-normal mb-3 md:mb-6">About Us</h2>
                <p className="text-[#777777] text-base md:text-[18px] leading-[27px] font-normal">
                    These are the leading projects we’re working on in your city!
                </p>
            </div>
            <div className="mt-8 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-10">
                {(showAll || !isMobile ? projects : projects.slice(0, 4)).map((project) => (
                    <div
                        key={project.id}
                        className="flex flex-col w-full lg:max-w-[290px] bg-white rounded-[12px] transform transition-all duration-500 ease-in-out"
                        style={{ boxShadow: '2px 8px 24px 0px #0000000F' }}
                    >
                        <div>
                            <Image
                                src={project.image}
                                alt="aboutus"
                                width={290}
                                height={173}
                                className="rounded-t-[12px] w-full"
                            />
                        </div>
                        <div className="bg-white rounded-b-xl px-2.5 py-4 lg:p-4">
                            <div className="flex items-center justify-between gap-2">
                                <h2 className="text-[#1E2A38] text-[16px] font-normal">{project.title}</h2>
                                <h4 className="text-[#555555] text-sm leading-[17.64px] font-normal">{project.price}</h4>
                            </div>
                            <div className="mt-5 space-y-4">
                                <div className="flex items-center gap-3">
                                    <Image src="/assets/location.svg" alt="location" width={20} height={20} />
                                    <h3 className="text-[#777777] text-[14px] font-normal leading-[17px]">{project.location}</h3>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Image src="/assets/bed.svg" alt="bed" width={20} height={20} />
                                    <h3 className="text-[#777777] text-[14px] font-normal leading-[17px]">{project.bhk}</h3>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Image src="/assets/square.svg" alt="square" width={20} height={20} />
                                    <h3 className="text-[#777777] text-[14px] font-normal leading-[17px]">{project.sqft}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
                {isMobile && (
                    <button
                        className="mt-6 lg:hidden block max-w-[400px] w-full mx-auto h-[50px] bg-[#E1BC8A] rounded-xl border text-white font-semibold"
                        onClick={handleSeeMoreClick}
                    >
                        {showAll ? 'Show Less' : 'See More'}
                    </button>
                )}
        </div>
    );
};

export default AboutUs;
