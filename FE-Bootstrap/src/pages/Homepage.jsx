import React from "react";
import NavbarHomepage from "../components/NavbarHomepage";
import Jumbotron from "../components/Jumbotron";
import Footer2 from "../components/Footer2";

function Homepage() {


  return (
    <>
      {<NavbarHomepage />}
      {<Jumbotron/>}
      <Footer2 />
    </>
  );
}

export default Homepage;
