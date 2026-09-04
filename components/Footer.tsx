import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-24 bg-[#eee8d8] border-t border-[#b08a45]/20">
            <div className="max-w-6xl mx-auto px-6 py-14">

                {/* Main footer */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">

                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start">
                        <p className="font-serif text-2xl tracking-wide text-[#3f2d1c]">
                            GAURI & SANKALPANANDA
                        </p>

                        <p className="mt-2 text-xs tracking-[0.25em] text-yellow-900">
                            YOGA · MUSIC · DEVOTION
                        </p>

                        <div className="flex items-center gap-2 mt-4">
                            <div className="h-px w-8 bg-[#b08a45]/40" />
                            <span className="text-[#b08a45]">✤</span>
                            <div className="h-px w-8 bg-[#b08a45]/40" />
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex flex-wrap justify-center gap-x-7 gap-y-3 text-xs tracking-[0.18em] text-yellow-900">
                        <Link href="/about" className="hover:text-[#6f4518] transition-colors">
                            ABOUT
                        </Link>

                        <Link href="/music" className="hover:text-[#6f4518] transition-colors">
                            MUSIC
                        </Link>

                        <Link href="/events" className="hover:text-[#6f4518] transition-colors">
                            EVENTS
                        </Link>

                        <Link href="/media" className="hover:text-[#6f4518] transition-colors">
                            MEDIA
                        </Link>

                        <Link href="/shop" className="hover:text-[#6f4518] transition-colors">
                            SHOP
                        </Link>

                        <Link href="/contact" className="hover:text-[#6f4518] transition-colors">
                            CONTACT
                        </Link>
                    </nav>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 my-10">
                    <div className="h-px flex-1 bg-[#b08a45]/20" />
                    <span className="text-[#b08a45]/60">✤</span>
                    <div className="h-px flex-1 bg-[#b08a45]/20" />
                </div>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] tracking-[0.12em] text-yellow-900/70">
                    <p>
                        © {new Date().getFullYear()} Gauri & Sankalpananda
                    </p>

                    <p>
                        MUSIC · PRACTICE · DEVOTION
                    </p>
                </div>

            </div>
        </footer>
    );
}