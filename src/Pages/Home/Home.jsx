import React from "react";
import "./Home.css";
import About from "../About/About";
import Services from "../Services/Services";
import Team from "../Team/Team";
import Contact from "../Contact/Contact";
import Highlight from "../../Component/UI/Highlight";
import Jobs from "../Jobs/Jobs";

const Home = () => {
  return (
    <main className="home">
      <section className="hero">
        <h1>MyCompany</h1>
        <p>
          We create modern, reliable, and efficient digital solutions
          that help businesses grow.
        </p>
      </section>
      <Highlight />
      <About />
      <Services />
      <Team />
      <Contact />
      <Jobs />
    </main>
  );
};

export default Home;
