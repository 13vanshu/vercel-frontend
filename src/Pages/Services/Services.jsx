import React from "react";
import "./Services.css";
import useFetch from "../../Hook/useFetch";
import Loader from "../../Tools/Loader/Loader";

const Services = () => {
  const API_BASE_URL = window.location.hostname === "localhost"
    ? "http://localhost:5000"
    : "https://vercel-backend-sigma-hazel.vercel.app";

  const { data, load, error } = useFetch(`${API_BASE_URL}/api/products?limit=6`);

  console.log(data);


  if (load || !data) {
    return <Loader />;
  }

  return (
    <main className="services">
      <section className="services-box">
        <h1>{data.title}</h1>
        <p className="services-intro">
          {data.intro}
        </p>

        <div className="services-grid">
          {data.productdata.map((item) => (
            <div className="service-card" key={item.id}>
              <img src={item.image} alt="" />
              <h2>{item.title}</h2>
              <p>{item.description}</p>

              <div className="service-meta">
                <span>{item.category}</span>
                <span>{item.rating.rate}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;
