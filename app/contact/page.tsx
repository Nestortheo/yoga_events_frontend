import Link from "next/link";
import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";

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
        <div className="flex flex-col gap-5">
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
        <main className="pt-36 lg:pt-54 pb-20">
            <div className="
                max-w-6xl mx-auto
                px-6
                flex flex-col md:flex-row
                gap-6 md:gap-10
            "
            >
                {/* LEFT */}
                <div className="
                        lg:w-1/3
                        flex flex-col gap-5
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
                    
                    <div className="flex items-center gap-5">
                        <div className="w-px h-12 bg-yellow-900/40"/>
                        <span
                            className={`${cormorant.className} text-xl italic leading-relaxed text-yellow-950/55`}
                            >
                            “Connection is also a form of seva.”
                        </span>
                    </div>
                    

                </div>

                {/* MIDDLE */}
                <div className="hidden md:block md:w-1/4">
                    <div className="relative aspect-[2/4] w-full overflow-hidden rounded-2xl">
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
                <div className="flex-1">
                    <ContactForm />

                </div>
            </div>
        </main>
    )
}