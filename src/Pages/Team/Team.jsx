import React from "react";
import "./Team.css";
import useFetch from "../../Hook/useFetch";
import Loader from "../../Tools/Loader/Loader";

const Team = () => {

  const API_BASE_URL = window.location.hostname === "localhost"
    ? "http://localhost:5000"
    : "https://vercel-backend-sigma-hazel.vercel.app"

  const { data, load, error } = useFetch(`${API_BASE_URL}/api/team`);

  if (load || !data) {
    return <Loader />;
  }

  return (
    <main className="team">
      <section className="team-box">
        <h1>{data.title}</h1>
        <p className="team-intro">{data.intro}</p>

        <div className="team-grid">
          {data?.teamdata?.map((item) => (
            <div className="team-member" key={item.id}>
              <div className="avatar">{item.avatar}</div>
              <h2>{item.name}</h2>
              <p className="role">{item.role}</p>
              <p className="desc">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Team;
