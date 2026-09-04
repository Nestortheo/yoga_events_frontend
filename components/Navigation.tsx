"use client"

import { useState } from "react"

export default function Header(){

    const [menuOpen, setMenuOpen] = useState(false);

    function closeMenu(){
        setMenuOpen(false);
    }

    return(
        <div>
        <header className="
            fixed top-0 left-0 right-0 z-50
            w-full
            bg-[#f8f4ea]/95
            backdrop-blur-xl
            border-[#b08a45]/20
            shadow-[0_4px_20px_rgba(90,70,35,0.08)]
        ">
            {/*Left Mandala on Navigaiton*/}
            <img
                src="/images/mandala.svg"
                alt=""
                className="
                    hidden
                    lg:block
                    absolute
                    left-[-180px]
                    top-1/2
                    -translate-y-1/2
                    w-80
                    opacity-50
                    
                    
                "
            />
            <div className="
                max-w-6xl mx-auto
                flex items-center justify-between
                px-3 sm:px-5
                py-3 sm:py-4">

                {/* Brand - Home */}
                <div>
                    <a href="/" className="flex items-center gap-0 sm:gap-1">

                        {/* Ganesha */}
                        <div className="
                            relative
                            w-20 h-24
                            sm:w-24 h-28
                            md:w-36 h-40
                            flex items-center justify-center
                            -mb-4
                            shrink-0
                        ">
                            <img
                                src="/images/ganesha.png"
                                alt="Ganesha"
                                className="
                                    w-full h-full
                                    object-contain
                                "
                            />
                        </div>

                        {/* Wordmark */}
                        <div className="flex flex-col items-center min-w-0">
                            <div className="flex flex-col items-center">
                            <h2 className="
                                font-serif
                                text-lg
                                sm:text-xl
                                md:text-3xl
                                tracking-[0.06em]
                                sm:tracking-[0.08em]
                                text-[#4a3925]
                                leading-none
                            ">
                                GAURI &
                               
                            </h2>
                            <h2 className="
                                font-serif
                                text-lg sm:text-xl md:text-3xl
                                tracking-[0.07em] md:tracking-[0.1em]
                                text-[#4a3925]
                                leading-none
                            ">
                                SANKALPANANDA
                            </h2>
                            </div>

                            <span className="
                                mt-2
                                text-[9px]
                                tracking-[0.35em]
                                uppercase
                                text-[#9a773d]
                                
                            ">
                                Yoga · Music · Devotion
                            </span>

                            <div className="flex items-center gap-2">

                                <div className="h-px w-12 bg-[#b08a45]/40" />

                                <span className="text-[#b08a45]">
                                    ✤
                                </span>

                                <div className="h-px w-12 bg-[#b08a45]/40" />

                            </div>

                        </div>

                    </a>
                </div>


                {/* Desktop links */}
                
                <nav className="hidden lg:flex flex-col gap-5">
                    
                    {/* Decoration */}
                    <div className="flex items-center gap-3 w-full justify-center">

                        <div className="h-px w-24 bg-[#b08a45]/30" />

                        <span className="text-[#b08a45]/70 text-xl">
                            ✧
                        </span>

                        <div className="h-px w-24 bg-[#b08a45]/30" />

                    </div>

                    <div className="flex items-center gap-8">
                    <a
                        href="/#about"
                        className="
                            text-[#4a3925]
                            hover:text-[#a07838]
                            transition-colors
                            duration-200
                        "
                    >
                        About
                    </a>

                    <a
                        href="/#music"
                        className="
                            text-[#4a3925]
                            hover:text-[#a07838]
                            transition-colors
                            duration-200
                        "
                    >
                        Music
                    </a>

                    <a
                        href="/#events"
                        className="
                            text-[#4a3925]
                            hover:text-[#a07838]
                            transition-colors
                            duration-200
                        "
                    >
                        Events
                    </a>

                    <a
                        href="/#media"
                        className="
                            text-[#4a3925]
                            hover:text-[#a07838]
                            transition-colors
                            duration-200
                        "
                    >
                        Media
                    </a>

                    <a
                        href="/#shop"
                        className="
                            text-[#4a3925]
                            hover:text-[#a07838]
                            transition-colors
                            duration-200
                        "
                    >
                        Shop
                    </a>

                    <a
                        href="/#contact"
                        className="
                            text-[#4a3925]
                            hover:text-[#a07838]
                            transition-colors
                            duration-200
                        "
                    >
                        Contact
                    </a>
                </div>

                </nav>
                
                {/*Right Mandala on Navigaiton*/}
                <img
                    src="/images/mandala.svg"
                    alt=""
                    className="
                        hidden
                        sm:block
                        absolute
                        right-[-180px]
                        top-1/2
                        -translate-y-1/2
                        w-80
                        opacity-50
                        pointer-events-none
                        
                    "
                />


                {/* Mobile Burger Button */}
                <button
                    className="
                        
                        lg:hidden
                        text-2xl
                        text-black
                    "
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>

            </div>
            {/*Mobile Dropdown Bar Menu */}
            {menuOpen && (
                <div 
                    className="
                        w-full lg:hidden flex flex-col
                        bg-[#f8f4ea]/95 border-t border-yellow-800/20
                    "
                >
                    <a 
                        href="/#about" 
                        className="
                            text-black
                            px-3 py-3
                        
                        "
                        onClick={closeMenu}
                        >
                        <h2>About</h2>
                    </a>
                    <a
                        href="/#music"
                        className="
                            text-black
                            px-3 py-3
                            
                        "
                        onClick={closeMenu}
                    >
                        <h2>Music</h2>
                    </a>
                    <a
                        href="/#music"
                        className="
                            text-black
                            px-3 py-3
                            
                        "
                        onClick={closeMenu}
                    >
                       <h2>Events</h2>
                    </a>
                    <a
                        href="/#music"
                        className="
                            text-black
                            px-3 py-3
                            
                        "
                        onClick={closeMenu}
                    >
                        <h2>Media</h2>
                    </a>
                    <a
                        href="/#music"
                        className="
                            text-black
                            px-3 py-3
                            
                        "
                        onClick={closeMenu}
                    >
                       <h2>Shop</h2>
                    </a>
                    <a
                        href="/#music"
                        className="
                            text-black
                            px-3 py-3
                            
                        "
                        onClick={closeMenu}
                    >
                        <h2>Contact</h2>
                    </a>
                </div>
            )}
            
        </header>
        </div>
    )
}