import HeroDashboard from "./components/hero/Hero";
import Funnel from "./components/funnel/Funnel";
import Mechanism from "./components/mechanism/Mechanism";
import CaseStudies from "./components/case-studies/CaseStudies";
import Validation from "./components/validation/Validation";
import CTA from "./components/cta/CTA";
import SiteFooter from "./components/footer/Footer";


export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroDashboard />
      <Funnel />
      <Mechanism />
      <CaseStudies />
      <Validation />
      <CTA />
      <SiteFooter />
    </main>
  );
}



// Colors

// brand = #0A392B

// brand-light = #10543F

// brand-dark = #06261D

// brand-tint = #E8F2EE

// base-white = #F9FBFC

// Typography

// Display: Manrope

// Body: Inter

// Headings: font-display font-semibold

// Body: font-inter text-brand/90

// Motion

// fadeInUp

// fadeIn

// slideInLeft

// slideInRight

// Shadows

// soft

// medium

// Gradients

// brand-gradient