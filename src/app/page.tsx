import Services from "@/components/services";
import Features from "@/components/features";
import Hero from "@/components/hero";
import LogoContainer from "@/components/logo";
import HeroAnimation from '@/components/animation/hero/index';
import FreshData from "@/components/freshData";
import DataAttributes from "@/components/dataAttributes";
import Testimonial from "@/components/testimonial";
import Capabilities from "@/components/capabilities";
import Improvements from "@/components/improvements";
import Cta from "@/components/cta";


export default function Home() {
  return (
    <>
      <Hero />
      <LogoContainer />
      <Features />
      <Improvements/>
      <Capabilities/>
      <Services />
      {/* <div className="max-w-7xl mx-auto px-4 pt-16">
        <div className="w-50% py-12">
          <HeroAnimation />
        </div>
      </div> */}
      <FreshData/>
      <DataAttributes/>
      {/* <Testimonial/> */}
      <Cta/>
    </>
  );
}
