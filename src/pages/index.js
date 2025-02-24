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
import VideoSection from "./aboutusvideo";

function Index() {
  return (
    <Fragment>
      <>
        <Navbar />
        <VideoSection />
        <ServicesSection />
        <ClientsSection />
        <CaseStudyPage />
        <TestimonialSection />
        <TeamSection />
        <BlogSection />
        <ContactSection />
      </>
    </Fragment>
  );
}

export default Index;
