import React, { Fragment } from "react";
import ContactSection from "./contactsection";
import Navbar from "./navbar";
import HeroSection from "./hero";
import ServicesSection from "./services";
import AboutUs from "./about";
import CaseStudyPage from "./works";
import ClientsSection from "./clients";

function Index() {
  return (
    <Fragment>
      <>
        <ContactSection />
        <Navbar />
        <HeroSection />
        <AboutUs />
        <ServicesSection />
        <CaseStudyPage />
        <ClientsSection />
      </>
    </Fragment>
  );
}

export default Index;
