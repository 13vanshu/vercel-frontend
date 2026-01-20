import React from "react";
import "./Team.css";

const Team = () => {
  return (
    <main className="team">
      <section className="team-box">
        <h1>Our Team</h1>

        <p className="team-intro">
          Our team consists of skilled professionals with experience across
          technology, design, and business operations. We work collaboratively
          to deliver reliable and high-quality solutions.
        </p>

        <div className="team-grid">
          <div className="team-member">
            <div className="avatar">A</div>
            <h2>Alex Kumar</h2>
            <p className="role">Project Manager</p>
            <p className="desc">
              Responsible for planning, coordination, and timely delivery of
              projects while ensuring quality standards.
            </p>
          </div>

          <div className="team-member">
            <div className="avatar">B</div>
            <h2>Bhavna Sharma</h2>
            <p className="role">Frontend Developer</p>
            <p className="desc">
              Focuses on building responsive user interfaces and maintaining
              consistency across web applications.
            </p>
          </div>

          <div className="team-member">
            <div className="avatar">C</div>
            <h2>Chirag Verma</h2>
            <p className="role">Backend Developer</p>
            <p className="desc">
              Handles server-side logic, APIs, and system performance to ensure
              stability and scalability.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Team;
