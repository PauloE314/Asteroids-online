import React from "react";
import { AboutTheProject } from "./AboutTheProject";
import { Footer } from "./Footer";
import { LandingPage } from "./LandingPage";

import { Container } from "./style";

// Project's home page
export function Home() {
  // Scrolls screen to element
  function scrollScreen(id: string) {
    return () => {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo(0, element.offsetTop);
      }
    };
  }

  return (
    <Container>
      {/* Main landing page */}
      <LandingPage onDownClick={scrollScreen("about-the-project")} />

      {/* About the project */}
      <AboutTheProject />

      {/* Footer */}
      <Footer />
    </Container>
  );
}
