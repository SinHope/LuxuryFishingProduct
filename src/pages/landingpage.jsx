  import React from "react";  
  import TopSection from "../components/topSection.jsx";
  import LogoSection from "../components/LogoSection.jsx";
  import FeatureSection from "../components/featureSection.jsx";
  import FeatureSection2 from "../components/featureSection2.jsx";
  import StatSection from "../components/statSection.jsx";
  import CtaSection from "../components/ctaSection.jsx";
  import FooterSection from "../components/footerSection.jsx";
  
  
  
  // My Codes Below //

  

 
  export default function LandingPage() {
    return (
      <div className="bg-neutral-950">
        <main>
          {/* Hero section */}
          <TopSection />
  
          {/* Logo cloud */}
          
          <LogoSection />
          
  
          {/* Feature section */}
          <FeatureSection />
  
          {/* Feature section */}
          <FeatureSection2 />
  
          {/* Stats */}
          <StatSection />
  
          {/* CTA section */}
          <CtaSection />

        </main>
  
          {/* Footer */}
          <FooterSection />

      </div>
    )
  }
  