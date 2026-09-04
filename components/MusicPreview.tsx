import Image from "next/image"
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";


export default function MusicPreview(){
    return(
        <section 
            id="music"
            className="relative mt-24 scroll-mt-24 overflow-hidden"
        >
            
            {/* DECORATIONS */}
            <Image
                src="/images/mandala.svg"
                alt=""
                width={500}
                height={500}
                className="
                    hidden
                    lg:block
                    pointer-events-none
                    absolute
                    left-[-250px]
                    top-14
                    opacity-20
                "
            />

            <Image
                src="/images/mandala.svg"
                alt=""
                width={500}
                height={500}
                className="
                    hidden
                    lg:block
                    pointer-events-none
                    absolute
                    right-[-250px]
                    top-14
                    opacity-20
                "
            />

            <div className="flex flex-col items-center gap-4 ">

                {/* Section label */}
                <h2 className="text-sm font-semibold tracking-wide text-yellow-900">MUSIC</h2>

                {/* Ornament */}
                <div className="flex items-center gap-2">
                    <div className="h-px w-5 bg-[#b08a45]/40" />
                    <span className="text-[#b08a45]">
                                    ✤
                    </span>
                    <div className="h-px w-5 bg-[#b08a45]/40"/>
                </div>

                {/* Heading */}
                <h1 className="text-4xl md:text-5xl font-serif font-normal tracking-tight">The Sound of Devotion</h1>

                {/* Description */}
                <p className="max-w-sm text-center text-lg leading-relaxed">
                    Kirtan, mantra and melody rooted in the Satyananda Yoga tradition.
                </p>

                {/* Album artwork */}
                <Image
                    src="/images/Sparkles.png"
                    alt="Sparkles of Satyam album artwork"
                    width={300}
                    height={300}
                    className="object-cover object-center"
                />

                 {/* Album information */}
                <div className="flex flex-col items-center gap-1">
                    <p className="text-3xl font-serif">
                        Sparkles of Satyam
                    </p>

                    <p className="text-sm tracking-[0.25em] font-medium">
                        GAURI & SANKALPANANDA
                    </p>
                </div>

                {/* Primary CTA */}
                <Link
                    href="/music"
                    className="
                        inline-flex items-center gap-3
                        border border-[#6f4518]
                        bg-[#6f4518]
                        px-6 py-3
                        text-xs tracking-[0.2em]
                        text-[#f8f4ea]
                        transition-all duration-300
                        hover:bg-[#8a5b25]
                    "
                >
                    LISTEN
                    <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Secondary CTA */}
                <div className="flex flex-col items-center gap-1">
                    <p className="text-sm font-light tracking-[0.15em] text-yellow-900">
                        EXPLORE OUR MUSIC
                    </p>

                    <div className="h-px w-full bg-[#b08a45]/40" />
                </div>

            </div>
        </section>
    )
}