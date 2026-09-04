import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[650px]">
        <Image
          src="/images/hero_placeholder.png"
          alt="Gauri & Sankalpananda"
          fill
          className="object-cover object-center md:object-right"
        />
        {/*Text */}
        <div className="
              absolute
              left-6 right-6
              top-1/2 -translate-y-1/2
              md:left-auto md:right-96
              md:w-[500px]
            "
        >
          <div className="text-sm tracking-[0.3em] text-[#f8f4ea]/95">
              GAURI & SANKALPANANDA
          </div>

          
          <h1 className="mt-4 text-4xl md:text-6xl text-[#f8f4ea]/95">
              Where Music<br />
              Becomes <span className="text-yellow-800">Practice</span>
          </h1>
          
          
          {/* Divider */}
          <div className="h-px bg-yellow-900/50 mt-5" />

          {/*More Text*/}
          <div className="text-base md:text-lg leading-relaxed mt-5 max-w-lg">
            <p>
                An invitation to explore sound, movement and inner connection.
            </p>
          </div>

          {/*CTA Buttons*/}
          <div className="flex gap-4 mt-7 ">
            <Link 
              href="/music"
              className="
              px-6 py-3
              bg-[#6f4518]
              text-[#f8f4ea]
              text-sm tracking-[0.12em]
              border border-[#6f4518]
              transition-all duration-300
              hover:bg-[#8a5b25]
            "
            >
              Listen to our Music
            </Link>

            <Link 
              href="/events"
              className="
                px-6 py-3
                bg-transparent
                text-[#6f4518]
                text-sm tracking-[0.12em]
                border border-[#6f4518]/60
                transition-all duration-300
                hover:bg-[#6f4518]/10
              "
            >
              Upcoming Events
            </Link>
          </div>

      </div>
    </section>
  );
}