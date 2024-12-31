'use client'
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <nav className="absolute top-0 left-0 right-0 z-50 py-6 md:py-8">
            <div className="max-w-[1440px] mx-auto flex justify-between items-center px-4 md:px-10 lg:px-16 xl:px-20">
                <Image
                    src="/assets/logo.svg"
                    alt="Live in Luxury"
                    width={151}
                    height={79}
                    className="w-[100px] h-[55px] md:w-[151px] md:h-[79px]"
                />

                <div className="flex items-center gap-6">
                    {/* Call Button */}
                    <a
                        href="tel:+912940961396"
                        className="hidden md:flex items-center gap-2 text-white hover:text-orange-200 transition-colors"
                    >
                        <img
                            src="/assets/call.svg"
                            alt="call"
                            className="min-w-[10px] min-h-[10px] md:max-w-[40px] md:max-h-[40px] md:min-w-[35px] md:min-h-[35px]"
                        />
                        <span className="text-xs md:text-[18px] leading-[25.5px] font-medium">
                            +91 2940 9613 964
                        </span>
                    </a>

                    {/* WhatsApp Button */}
                    <button>
                        <a
                            href="https://wa.me/91929409613964"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                        >
                            <FaSquareWhatsapp className="md:block hidden text-orange-200 min-w-[10px] min-h-[10px] md:max-w-[40px] md:max-h-[40px] md:min-w-[40px] md:min-h-[40px]" />
                        </a>
                    </button>

                    {/* Mobile Menu Button */}
                    <button onClick={toggleMenu}>
                        <Image
                            src="/assets/menu.svg"
                            alt="menu"
                            width={48}
                            height={48}
                            className="min-w-[10px] min-h-[10px] md:min-w-[50px] md:min-h-[50px]"
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                ref={menuRef}
                className={`fixed rounded-l-md md:rounded-l-2xl top-0 right-0 bottom-0 bg-white bg-opacity-100 z-40 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300`}
                style={{ width: "50%" }}
            >
                <div className="absolute top-6 left-6">
                    <button onClick={closeMenu}>
                        <RxCross1 size={35} />

                    </button>
                </div>
                <div className="flex flex-col items-center justify-center h-full space-y-6 text-black text-lg">
                   {/* Call Button */}
                   <a
                        href="tel:+912940961396"
                        className="flex items-center gap-2 text-black hover:text-orange-200 transition-colors"
                    >
                        <img
                            src="/assets/call.svg"
                            alt="call"
                            className="min-w-[10px] min-h-[10px] md:max-w-[40px] md:max-h-[40px] md:min-w-[35px] md:min-h-[35px]"
                        />
                        <span className="text-[18px] leading-[25.5px] font-medium md:block hidden">
                            +91 2940 9613 964
                        </span>
                    </a>

                    {/* WhatsApp Button */}
                    <button>
                        <a
                            href="https://wa.me/91929409613964"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                        >
                            <FaSquareWhatsapp className="text-orange-200 max-w-[40px] max-h-[40px] min-w-[40px] min-h-[40px]" />
                        </a>
                    </button>
                </div>
            </div>
        </nav>
    );
}
