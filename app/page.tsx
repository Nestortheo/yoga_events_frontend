import Image from "next/image";
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview"

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="max-w-6xl mx-auto flex flex-col gap-12 ">   
        <AboutPreview />
      </div>
    </div>
  );
}
