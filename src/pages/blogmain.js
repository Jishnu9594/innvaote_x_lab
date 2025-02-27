import React, { Fragment } from "react";
import Navbar from "./navbar";
import ClientsSection from "./clients";
import TeamSection from "./team";
import Footer from "./contactsection";
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
