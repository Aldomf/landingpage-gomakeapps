import React from "react";
import Header from "./Header";
import Form from "./Form";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";

function Layout({children}) {
  return (
    <>
      <Header />
      <Form />
      <SectionOne/>
      <SectionTwo/>

      {children}
    </>
  );
}

export default Layout;
