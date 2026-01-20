import React from "react";
import "./Services.css";
import useFetch from "../../Hook/useFetch";

const Services = () => {
 const API_BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:5000"
    : "https://vercel-backend-sigma-hazel.vercel.app";

const { data, load, error } = useFetch(
  `${API_BASE_URL}/products`
);


  console.log(data);
   

  if (load) return <p>Loading services...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main className="services">
      <section className="services-box">
        <h1>Our Services</h1>
        <p className="services-intro">
          Below are representative services displayed using live public API data.
        </p>

        <div className="services-grid">
          {data.productdata.map((item) => (
            <div className="service-card" key={item.id}>
              <img src={item.image} alt="" />
              <h2>{item.title}</h2>
              <p>{item.description}</p>

              <div className="service-meta">
                <span>{item.category}</span>
                <span>Professional</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;
