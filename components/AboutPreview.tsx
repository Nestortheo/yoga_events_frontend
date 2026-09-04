import Image from "next/image";

export default function AboutPreview(){

    return(
        <section id="about" className="scroll-mt-24 mt-24">
            <div className="flex flex-col lg:flex-row">
                {/*LEFT*/}
                <div className="
                        lg:w-2/5
                        p-2 lg:p-10
                        flex flex-col justify-center
                        gap-4
                    "
                >
                    <h2 className="text-sm text-yellow-900 font-semibold tracking-[0.2em]">ABOUT</h2>
                    <div className="flex items-center gap-2">
                        <div className="h-px w-5 bg-[#b08a45]/40" />
                            <span className="text-[#b08a45]">
                                    ✤
                            </span>
                        <div className="h-px w-5 bg-[#b08a45]/40" />
                    </div>

                    <div className="text-xl md:text-4xl">
                        <p>Rooted in Tradition.</p>
                        <p>Connected by Sound.</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="h-px w-12 bg-[#b08a45]/40" />
                            <span className="text-[#b08a45]">
                                    ✤
                            </span>
                        <div className="h-px w-12 bg-[#b08a45]/40" />
                    </div>

                    <p>
                        We are disciples of the Satyananda Yoga Tradition, inspired by
                        the lifetime example of our Guru Swami Satyananda Saraswati.
                        Through kirtan, the yoga of sound, we share melodies and
                        mantras that open the heart, calm the mind and awaken
                        our highest potential.
                    </p>

                    <div className="flex gap-4 mt-6">
                        <div className="w-px bg-[#b08a45]/40" />

                        <p className="italic text-yellow-900">
                            “Through kirtan you can reach the highest pinnacle of spiritual
                            experience. Neither by Yoga, nor by any other means but by kirtan
                            alone, you can have the vision of Divine, you can have the vision
                            of your Self…”
                        </p>
                    </div>

                    <p className="mt-3 text-sm tracking-[0.15em] text-yellow-900">
                        — SWAMI SATYANANDA SARASWATI
                    </p>
                </div>
                {/*RIGHT*/}
                <div className="
                            lg:w-3/5
                            p-8 lg:p-10
                           
                        "
                >
                {/* About Image */}
                <Image
                    src="/images/aboutImage.png"
                    alt="Gauri & Sankalpananda performing kirtan"
                    width={1200}
                    height={1500}
                    className="w-full h-[600px] object-cover object-center"
                />


                </div>
            </div>
        </section>
    );
}