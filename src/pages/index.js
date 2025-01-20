import React, { Fragment } from "react";
import ContactSection from "./contactsection";
import Navbar from "./navbar";
import HeroSection from "./hero";
import ServicesSection from "./services";
import AboutUs from "./about";

function Index() {
  return (
    <Fragment>
      <>
        <ContactSection />
        <Navbar />
        <HeroSection />
        <AboutUs />
        <ServicesSection />
      </>
    </Fragment>
  );
}

export default Index;
