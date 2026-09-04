import Image from "next/image";
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview"
import MusicPreview from "@/components/MusicPreview";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="max-w-7xl mx-auto flex flex-col gap-12 ">   
        <AboutPreview />
        <MusicPreview />
        <h2>
         
        </h2>
      </div>
    </div>
  );
}
