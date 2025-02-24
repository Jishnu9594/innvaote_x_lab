import React, { Fragment } from "react";
import ContactSection from "./contactsection";
import Navbar from "./navbar";
import HeroSection from "./hero";
import ServicesSection from "./services";
import CaseStudyPage from "./works";
import ClientsSection from "./clients";
import TeamSection from "./team";
import TestimonialSection from "./testimonals";
import OurStorySection from "./about";
import BlogSection from "./blog";
import AboutHero from "../aboutsHero";
import VideoSection from "./aboutusvideo";
import ExpertiseSection from "./expertiseSection";
import Footer from "./contactsection";

function About() {
  return (
    <Fragment>
      <>
        <Navbar />
        <HeroSection />
        <ExpertiseSection />
        <ServicesSection />
        <BlogSection />
        <Footer />
      </>
    </Fragment>
  );
}

export default About;
