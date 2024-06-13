import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Container from "react-bootstrap/esm/Container";

export const DefaultLayout = ({ children, pageTitle, className }) => {
  return (
    <div>
      {/* header  */}
      <Header />
      <Container className={className} fluid>
        {pageTitle && <div className="p-2">{pageTitle}</div>}
        <main className="main">{children}</main>
      </Container>

      {/* footer  */}
      <Footer />
    </div>
  );
};
