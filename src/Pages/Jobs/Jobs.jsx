import React from "react";
import "./Jobs.css";
import useFetch from "../../Hook/useFetch";
import Loader from "../../Tools/Loader/Loader";

const Jobs = () => {
    const API_BASE_URL =
        window.location.hostname === "localhost"
            ? "http://localhost:5000"
            : "https://vercel-backend-sigma-hazel.vercel.app";

    const { data, load, error } = useFetch(`${API_BASE_URL}/api/jobs`);

    if (load || !data) {
        return <Loader />;
    }

    return (
        <section className="jobs-section">
            <div className="jobs-container">
                <h1 className="jobs-title">{data?.jobspagedata?.title}</h1>
                <p className="jobs-subtitle">{data?.jobspagedata?.subtitle}</p>

                {/* Filters */}
                <div className="jobs-filters">
                    <select>
                        {data?.jobspagedata?.filters?.locations?.map((item, index) => (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                    <select>
                        {data?.jobspagedata?.filters?.types?.map((item, index) => (
                            <option key={index} value={item}>
                                {item}
                            </option>)
                        )}
                    </select>
                    <input type="text" placeholder="Search job title..." />
                </div>

                {/* Cards*/}
                <div className="jobs-grid">
                    {data?.jobsdata?.map((item) => (
                        <div className="job-card" key={item.id}>
                            <h3>{item.title}</h3>
                            <p className="company">{item.company}</p>
                            <div className="job-info">
                                <span>📍 {item.location}</span>
                                <span>💼 {item.type}</span>
                                <span>🧑‍💻 {item.experience}</span>
                            </div>
                            <button className="apply-btn">Apply Now</button>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="jobs-cta">
                    <h2>{data?.jobspagedata?.cta?.title}</h2>
                    <p>{data?.jobspagedata?.cta?.text}</p>
                    <button className="apply-btn">{data?.jobspagedata?.cta?.button}</button>
                </div>
            </div>
        </section>
    );
};

export default Jobs;
