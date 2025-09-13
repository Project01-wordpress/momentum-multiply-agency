import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <CaseStudies />
      <WhyUs />
      <Contact />
    </main>
  );
};

export default Index;