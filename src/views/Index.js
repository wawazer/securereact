import React from "react";
import Navbar from "components/Navbars/Navbar.js";
import Hero from "./IndexSections/Hero.js";
import ContentSecure from "./IndexSections/ContentSecure.js";
import DaftarTender from "./IndexSections/DaftarTender.js";
import FaqSecure from "./IndexSections/Faq.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import CardBeranda from "./IndexSections/CardBeranda.js";

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <Navbar />
        <main ref="main">
          <Hero />
          <ContentSecure />
          <CardBeranda />
          <DaftarTender />
          <FaqSecure />
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Index;
