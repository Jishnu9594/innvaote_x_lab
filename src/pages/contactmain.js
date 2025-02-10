import React, { Fragment } from "react";
import ContactSection from "./contactsection";
import Navbar from "./navbar";
import HeroSection from "./hero";
import ServicesSection from "./services";
import CaseStudyPage from "./works";
import ClientsSection from "./clients";
import TeamSection from "./team";
import TestimonialSection from "./testimonals";
import Footer from "./contactsection";
import ServiceHero from "./servicehero";
import IndustriesSection from "./IndustriesSection";
import TechStackSection from "./TechStackSection";
import CareerHeroSection from "./CareerHeroSection";
import CareerSection from "./jobposition";
import BlogSection from "./blog";
import Contact from "./contactpage";
import Location from "./location";

function ContactMain() {
  return (
    <Fragment>
      <>
        <Navbar />
        <Contact />
        <Location />

        <Footer />
      </>
    </Fragment>
  );
}

export default ContactMain;
