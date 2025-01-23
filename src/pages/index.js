import React, { Fragment } from "react";
import ContactSection from "./contactsection";
import Navbar from "./navbar";
import HeroSection from "./hero";
import ServicesSection from "./services";
import AboutUs from "./about";
import CaseStudyPage from "./works";
import ClientsSection from "./clients";
import TeamSection from "./team";

function Index() {
  return (
    <Fragment>
      <>
        <HeroSection />
        <Navbar />

        <AboutUs />
        <ServicesSection />
        <CaseStudyPage />
        <ClientsSection />
        <TeamSection />
      </>
    </Fragment>
  );
}

export default Index;
