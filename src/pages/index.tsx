import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../component/Header";
import Footer from "../component/Footer";
import LandingSection from "../component/LandingSection";
import "../styles/index.css";

const IndexPage: React.FC<PageProps> = () => {
 return (
  <>
   <Header />
   <LandingSection />
   <Footer />
  </>
 );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
