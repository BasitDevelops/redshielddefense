"use client";
import service_data from "@/data/services_data";

const Services = ({ style, inner_style }) => {
  return (
    <section
      className={`${
        style
          ? "services-three-area"
          : "services-area" || inner_style
          ? "inner-services-padding"
          : ""
      }`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div
              className={`${
                inner_style ? "d-none" : "section-title text-center mb-55"
              }`}
            >
              <h2 className="title">
                We Offer Expert <br /> Security Solutions
              </h2>
            </div>
            <div className="cards-container">
              {service_data.map((item, i) => (
                <div key={i} className="card">
                  <div className="card-inner">
                    <div className="card-front">{item.text}</div>
                    <div className="card-back">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
