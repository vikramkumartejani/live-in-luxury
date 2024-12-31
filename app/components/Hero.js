import React from 'react';
import Navbar from "./Navbar";
import Dropdown from "./Dropdown";

export default function Hero() {
    return (
        <div className="relative min-h-screen w-full">
            {/* Background Video */}
            <div className="absolute inset-0 overflow-hidden">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                >
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            {/* Gradients */}
            <div
                className="absolute inset-0"
                style={{
                    background: "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 29.4%)"
                }}
            />

            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />

                {/* Search Form */}
                <div className="md:mt-auto absolute bottom-20 sm:bottom-20 w-full px-6">
                    <div className="max-w-[1108px] bg-[#FFFFFF33] w-full mx-auto px-3.5 py-5 md:p-6 rounded-2xl" style={{ backdropFilter: "blur(9px)" }}>
                        <div className="flex items-center flex-col lg:flex-row gap-8 md:gap-10">
                            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
                                <Dropdown
                                    options={["Mumbai", "Delhi", "Bangalore"]}
                                    placeholder="Select location"
                                    label="Location"
                                />
                                <Dropdown
                                    options={["Apartment", "Villa", "Penthouse"]}
                                    placeholder="Select Type of Property"
                                    label="Type"
                                />
                                <Dropdown
                                    options={["1 BHK", "2 BHK", "3 BHK", "4+ BHK"]}
                                    placeholder="Select Bedroom"
                                    label="Bedroom"
                                />
                            </div>
                            <div className="flex items-end md:w-fit w-full">
                                <button
                                    className="w-full text-nowrap px-[27px] md:w-fit py-2 md:py-[16.5px] bg-[#E1BC8A] text-white text-sm md:text-lg rounded-md md:rounded-2xl font-medium"
                                >
                                    Search Properties
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
