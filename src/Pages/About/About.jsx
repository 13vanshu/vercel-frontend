import React from "react";
import "./About.css";

const About = () => {
  return (
    <main className="about">
      <section className="about-box">
        <h1>About Our Company</h1>

        <p>
          MyCompany is a professionally managed organization providing
          structured and reliable digital solutions. We work with businesses
          and institutions to support their operational and technological
          requirements through practical and efficient services.
        </p>

        <p>
          Our focus is on delivering solutions that are stable, scalable, and
          aligned with business objectives. We follow defined workflows and
          industry standards to ensure consistency and quality in every
          engagement.
        </p>

        {/* New section */}
        <h2>Our Approach</h2>
        <p>
          We believe that effective solutions are built through clarity,
          discipline, and collaboration. Our approach emphasizes understanding
          client needs, careful planning, and systematic execution.
        </p>

        <ul>
          <li>Requirement analysis and structured planning</li>
          <li>Use of modern and proven technologies</li>
          <li>Clear communication and documentation</li>
          <li>Quality assurance and timely delivery</li>
        </ul>

        {/* New section */}
        <h2>Our Commitment</h2>
        <p>
          MyCompany is committed to maintaining high professional standards.
          We aim to build long-term relationships by delivering dependable
          outcomes, maintaining transparency, and continuously improving our
          processes.
        </p>
      </section>
    </main>
  );
};

export default About;
