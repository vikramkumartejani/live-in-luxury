"use client"
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

const Dropdown = ({ options, placeholder, label }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="w-full relative" ref={dropdownRef}>
            <label className="block text-white text-xs md:text-sm mb-2 md:mb-3 font-normal">{label}</label>
            <div
                className="w-full pb-2 md:pb-3 border-b border-[#EEEEEE] text-white flex justify-between items-center cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className='text-xs md:text-sm font-normal'>{selectedOption || placeholder}</span>
                <Image src='/assets/arrow-down.svg' alt='arrow-down' width={16} height={16} />
            </div>
            {isOpen && (
                <div className="absolute z-30 bg-white w-full mt-1 backdrop-blur-sm rounded-lg overflow-hidden">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className="px-4 py-2.5 border-b cursor-pointer text-xs md:text-base transition-colors"
                            onClick={() => {
                                setSelectedOption(option);
                                setIsOpen(false);
                            }}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;

