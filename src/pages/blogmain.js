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

function BlogMain() {
  return (
    <Fragment>
      <>
        <Navbar />
        <BlogSection />
        <TeamSection />
        <ClientsSection />

        <Footer />
      </>
    </Fragment>
  );
}

export default BlogMain;
