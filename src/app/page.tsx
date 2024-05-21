import Services from "@/components/Services";
import Features from "@/components/features";
import Hero from "@/components/hero";
import LogoContainer from "@/components/logo";
import HeroAnimation from '@/components/animation/hero/index';


export default function Home() {
  return (
    <>
      <Hero />
      <LogoContainer />
      <Features />
      <Services />
      <div className="max-w-7xl mx-auto px-4 pt-16">
        {/* <div className="w-50% py-12">
          <HeroAnimation />
        </div> */}
      </div>
    </>
  );
}
