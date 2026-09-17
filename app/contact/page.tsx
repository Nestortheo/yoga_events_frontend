import Link from "next/link";
import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";
import { Mail, Calendar, Users } from "lucide-react";

import ContactForm from "@/components/ContactForm";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

function SectionHeader({
    eyebrow,
    title,
   
} : {
    eyebrow: string;
    title: string
    
}) {
    
    return (    
        <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
            <span className="text-xs font-bold tracking-[0.25em] text-[#8a6322] uppercase">
                {eyebrow}
            </span>
            <div className="flex items-center gap-2">
                <div className="w-6 h-px bg-[#b08a45]/40" />

                <span className="text-[#b08a45] text-xs">
                ✤
                </span>

                <div className="w-6 h-px bg-[#b08a45]/40" />
            </div>
            <span className="text-3xl md:text-4xl font-serif font-normal text-amber-950 tracking-tight">
                {title}
            </span>
        </div>
    )
}

export default function ContactPage(){
    
    return(
        <main className="pt-54  pb-20">
            <div className="
                mx-auto
                grid
                max-w-7xl
                grid-cols-1
                gap-12
                px-6
                lg:grid-cols-[minmax(0,1fr)_280px_minmax(0,1.35fr)]
                lg:gap-10
                lg:items-stretch
            "
            >
                {/* LEFT */}
                <div className="
                       flex flex-col
                       h-full
                       gap-6
                       items-center lg:items-start
                       text-center lg:text-left
                "
                >
                    <SectionHeader
                        eyebrow="contact"
                        title="Get in Touch"
                    />

                    <p className="text-base leading-7 text-yellow-950/75">We would love to hear from you.</p>
                    <p className="max-w-md text-base leading-7 text-yellow-950/70">
                        Feel free to reach out with any questions, invitations,
                        collaborations ideas or simply to share your thoughts.
                        Whether it's about our music, upcoming events, workshops
                        or anything else, we'll do our best to get back to you soon.
                    </p>

                    <div className="flex flex-col text-yellow-900/60">
                        <p className={`${cormorant.className} text-3xl italic`}>
                            With love,
                        </p>
                        <span className="text-sm tracking-[0.08em] text-yellow-950/70">
                            Gauri & Sankalpananda
                        </span>
                    </div>
                    
                    <div className="mt-auto flex items-center gap-5">
                        <div className="w-px h-12 bg-yellow-900/40"/>
                        <span
                            className={`${cormorant.className} text-xl italic leading-relaxed text-yellow-950/55`}
                            >
                            “Connection is also a form of seva.”
                        </span>
                    </div>
                    

                </div>

                {/* MIDDLE */}
                <div className="hidden md:block ">
                    <div className="relative  h-full min-h-[560px] w-full overflow-hidden rounded-2xl">
                        <Image
                            src="/images/aboutImage.png"
                            alt="A peaceful devotional setting"
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 1024px) 25vw, 280px"
                        />
                    </div>
                </div>

                {/* RIGHT */}
                <div className="
                    flex
                    h-full
                    min-w-0
                    flex-col
                    rounded-2xl
                    border border-yellow-900/15
                    bg-white/35
                    p-8
                    shadow-[0_8px_30px_rgba(120,90,30,0.06)]
                    backdrop-blur-sm
                    md:p-10
                            
                ">
                    <ContactForm />

                </div>
            </div>

        {/* CONTACT INFORMATION STRIP */}
        <section className="max-w-7xl mx-auto mt-24 border-t border-yellow-900/15 px-6 pt-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0">

                {/* GENERAL INQUIRIES */}
                <div className="flex items-center gap-4 md:border-r md:border-yellow-900/20 md:pr-8">
                    <div
                        className="
                            flex
                            h-12
                            w-12
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border border-yellow-900/15
                            bg-yellow-900/10
                        "
                    >
                        <Mail
                            size={22}
                            strokeWidth={1.5}
                            className="text-yellow-900"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <span className="text-sm font-medium text-yellow-950">
                            General Inquiries
                        </span>

                        <a
                            href="mailto:hello@gaurisankalpananda.com"
                            className="text-sm text-yellow-950/65 transition hover:text-yellow-900"
                        >
                            hello@gaurisankalpananda.com
                        </a>
                    </div>
                </div>


                {/* EVENT INVITATIONS */}
                <div className="flex items-center gap-4 md:border-r md:border-yellow-900/20 md:px-8">
                    <div
                        className="
                            flex
                            h-12
                            w-12
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border border-yellow-900/15
                            bg-yellow-900/10
                        "
                    >
                        <Calendar
                            size={22}
                            strokeWidth={1.5}
                            className="text-yellow-900"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <span className="text-sm font-medium text-yellow-950">
                            Event Invitations
                        </span>

                        <p className="max-w-xs text-sm leading-5 text-yellow-950/65">
                            We are available for kirtans, workshops and special gatherings.
                        </p>
                    </div>
                </div>


                {/* COLLABORATIONS */}
                <div className="flex items-center gap-4 md:pl-8">
                    <div
                        className="
                            flex
                            h-12
                            w-12
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border border-yellow-900/15
                            bg-yellow-900/10
                        "
                    >
                        <Users
                            size={22}
                            strokeWidth={1.5}
                            className="text-yellow-900"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <span className="text-sm font-medium text-yellow-950">
                            Collaborations
                        </span>

                        <p className="max-w-xs text-sm leading-5 text-yellow-950/65">
                            Let's create and share meaningful projects together.
                        </p>
                    </div>
                </div>

            </div>
        </section>

            
        </main>
    )
}