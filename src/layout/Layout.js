import React from "react";
import Header from "./Header";
import Form from "./Form";

function Layout({children}) {
  return (
    <>
      <Header />
      <Form />

      {children}
    </>
  );
}

export default Layout;
