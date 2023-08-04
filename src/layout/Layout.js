import React from "react";
import Header from "./Header";
import Form from "./Form";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";

function Layout({children}) {
  return (
    <>
      <Header />
      <Form />
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <Form/>

      {children}
    </>
  );
}

export default Layout;
