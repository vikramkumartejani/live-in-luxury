import Image from 'next/image'

export default function Navbar() {
    return (
        <nav className="absolute top-0 left-0 right-0 z-50 py-6 md:py-10">
            <div className="max-w-[1440px] mx-auto flex justify-between items-center px-4 md:px-10 lg:px-16 xl:px-20">
                <Image
                    src="/assets/logo.svg"
                    alt="Live in Luxury"
                    width={151}
                    height={79}
                    className='w-[100px] h-[55px] md:w-[151px] md:h-[79px]'
                />

                <div className="flex items-center gap-6">
                    <a
                        href="tel:+912940961396"
                        className="hidden md:flex items-center gap-2 md:gap-4 text-white hover:text-orange-200 transition-colors"
                    >
                        <img src='/assets/call.svg' alt='call' className='min-w-[10px] min-h-[10px] md:min-w-[40px] md:min-h-[40px]' />
                        <span className='text-xs md:text-[20px] leading-[25.5px] font-semibold'>+91 2940 9613 964</span>
                    </a>
                    <button>
                        <Image src='/assets/menu.svg' alt='menu' width={48} height={48} className='min-w-[10px] min-h-[10px] md:min-w-[48px] md:min-h-[48px]' />
                    </button>
                </div>
            </div>
        </nav>
    )
}

