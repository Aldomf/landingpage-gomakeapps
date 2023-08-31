import React from "react";
import Header from "./Header";
import Form from "./Form";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import Footer from "./Footer";
import SectionFive from "./SectionFive";

function Layout({children}) {
  return (
    <>
      <Header />
      <Form />
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <Form/>
      <SectionFour/>
      <SectionFive/>
      <Footer/>

      {children}
    </>
  );
}

export default Layout;
