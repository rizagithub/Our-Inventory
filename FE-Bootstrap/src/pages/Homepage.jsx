import React from "react";
import NavbarHomepage from "../components/NavbarHomepage";
import LandingPage from "../components/LandingPage";
import Footer2 from "../components/Footer2";
import ListAplikasi from "../components/ListAplikasi";

function Homepage() {
  return (
    <>
      <NavbarHomepage />
      {/* <LandingPage /> */}
      <ListAplikasi/>
      <Footer2 />
    </>
  );
}

export default Homepage;

