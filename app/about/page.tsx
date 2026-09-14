import Image from "next/image";
import Link from "next/link";

// Reusable Section Header Component to prevent repetitive markup
function SectionHeader({
  eyebrow,
  title,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  align?: "center" | "left";
}) {
  const isLeft = align === "left";

  return (
    <div
      className={`
        flex flex-col gap-3
        ${isLeft ? "items-start text-left" : "items-center text-center"}
      `}
    >
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

      <h2 className="text-3xl md:text-4xl font-serif font-normal text-amber-950 tracking-tight">
        {title}
      </h2>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="pt-36 lg:pt-54 pb-20">
      <div className="max-w-5xl mx-auto px-6 flex flex-col gap-20 md:gap-28">

        {/* 1. HERO / INTRO SECTION */}
        <section className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* LEFT */}
        <div className="
            lg:w-1/2
            flex flex-col
            items-center lg:items-start
            text-center lg:text-left
            gap-5
        ">
            <SectionHeader
            eyebrow="ABOUT US"
            title="A Shared Path of Yoga, Music & Devotion"
            align="left"
            />

            <p className="text-stone-700 leading-relaxed text-base md:text-lg max-w-lg">
            We are disciples of the Satyananda Yoga tradition. Inspired by the
            lifetime example of our Guru Swami Satyananda Saraswati, we share our
            path through sacred sound, community connection, and{" "}
            <em>seva</em> (selfless service).
            </p>

            <div className="pt-2 flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link
                href="/music"
                className="
                px-6 py-3
                rounded-full
                bg-[#8a6322]
                text-white
                text-sm
                tracking-wide
                hover:bg-[#72511a]
                transition-colors
                shadow-sm
                "
            >
                Listen to Music
            </Link>

            <Link
                href="/contact"
                className="
                px-6 py-3
                rounded-full
                border border-[#b08a45]/50
                text-amber-950
                text-sm
                tracking-wide
                hover:bg-[#b08a45]/10
                transition-colors
                "
            >
                Get in Touch
            </Link>
            </div>
        </div>

        {/* RIGHT */}
        <div className="
            lg:w-1/2
            w-full
            relative
            aspect-[4/3]
            rounded-2xl
            overflow-hidden
            shadow-lg
            border border-[#b08a45]/20
        ">
            <Image
            src="/images/aboutImage.png"
            alt="Gauri and Sankalpananda performing kirtan"
            fill
            priority
            className="object-cover object-center"
            />
        </div>

        </section>


        {/* 2. KIRTAN SECTION */}
        <section className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left */}
          <div className="lg:w-1/2 w-full relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#b08a45]/20">
            <Image
              src="/images/aboutImage.png"
              alt="Live Kirtan session with traditional instruments"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Right */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-5">
            <SectionHeader eyebrow="KIRTAN" title="The Yoga of Sound" />

            <p className="text-stone-700 leading-relaxed max-w-lg">
              Kirtan is more than a song. It is a practice of <em>Nada Yoga</em>, expressed through simple melodies and repetitive Sanskrit mantras.
            </p>

            <p className="text-stone-700 leading-relaxed max-w-lg">
              The repetition creates acoustic vibrations that deeply relax the body and quiet the mind. Regardless of intellectual understanding, the sounds carry a transformative and liberating effect.
            </p>
          </div>
        </section>


        {/* 3. ESSENCE / PHILOSOPHY CARD */}
        <section className="
                    relative overflow-hidden
                    rounded-3xl
                    border border-[#b08a45]/40 
                    bg-gradient-to-b from-[#f4efe4] to-[#e8dec9] 
                    px-6 py-16 
                    shadow-md text-center
                "
        >
          {/* Subtle Decorative Mandala Background */}
          <Image
            src="/images/mandala.svg"
            alt=""
            width={450}
            height={450}
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
          />

          <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl mx-auto">
            <SectionHeader eyebrow="THE ESSENCE" title="The Key to Inner Jewels" />

            <div className="flex items-center justify-center gap-8 md:gap-16 my-4">
              <div className="text-center">
                <span className="text-4xl md:text-6xl font-serif text-amber-950 font-medium">KI</span>
                <p className="mt-2 text-xs tracking-[0.25em] text-[#8a6322] uppercase font-semibold">THE KEY</p>
              </div>

              <div className="h-16 w-px bg-[#b08a45]/40" />

              <div className="text-center">
                <span className="text-4xl md:text-6xl font-serif text-amber-950 font-medium">RATANA</span>
                <p className="mt-2 text-xs tracking-[0.25em] text-[#8a6322] uppercase font-semibold">THE JEWELS</p>
              </div>
            </div>

            <p className="text-stone-700 italic font-serif text-lg">
              “Kirtan symbolizes the key that unlocks the boundless jewels residing within every heart.”
            </p>
          </div>
        </section>


        {/* 4. MUSIC COLLECTIONS */}
        <section className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
          <SectionHeader eyebrow="MUSIC" title="Melodies of Devotion" />

          <p className="text-stone-700 leading-relaxed text-base md:text-lg">
            Our first two kirtan collections, <strong className="text-amber-950 font-normal italic">“Sparkles of Satyam”</strong> and <strong className="text-amber-950 font-normal italic">“Waves of Anandam”</strong>, bring together uplifting melodies, Sanskrit mantras, and acoustic arrangements featuring guitar, harmonium, tablas, Indian flutes, and cello.
          </p>

          <Link
            href="/music"
            className="mt-2 text-sm font-semibold tracking-wide text-[#8a6322] hover:text-amber-900 border-b border-[#8a6322]/40 pb-1 hover:border-amber-900 transition-all"
          >
            Explore Albums & Listen &rarr;
          </Link>
        </section>


        {/* 5. DEVOTIONAL QUOTE */}
        <section className="border-l-2 border-[#b08a45]/60 pl-8 py-3 max-w-3xl mx-auto">
          <blockquote className="text-xl md:text-2xl font-serif italic text-amber-950 leading-relaxed">
            “Through kirtan you can reach the highest pinnacle of spiritual experience... you can have the vision of Divine, you can have the vision of your Self.”
          </blockquote>
          <p className="mt-4 text-xs font-bold tracking-[0.25em] text-[#8a6322] uppercase">
            — Swami Satyananda Saraswati
          </p>
        </section>


        {/* 6. CALL TO ACTION FOOTER BANNER */}
        <section className="rounded-2xl bg-amber-950/5 border border-amber-900/10 p-8 md:p-12 text-center flex flex-col items-center gap-4">
          <h3 className="text-2xl font-serif text-amber-950">Join Us for Upcoming Gatherings</h3>
          <p className="text-stone-600 max-w-md text-sm md:text-base">
            Experience the healing vibrations of live kirtan in person or explore our workshop calendar.
          </p>
          <Link
            href="/events"
            className="mt-2 px-8 py-3 rounded-full bg-[#8a6322] text-white text-sm tracking-wide hover:bg-[#72511a] transition-colors shadow-sm"
          >
            View Event Calendar
          </Link>
        </section>

      </div>
    </main>
  );
}