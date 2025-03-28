"use client";
import { useState } from "react";
import Link from "next/link";
import service_data from "@/data/services_data";

const Services = ({ style, inner_style }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

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
            {/* <div className="services-items-wrapper">
              <ul className="list-wrap">
                {service_data.map((item, index) => (
                  <li
                    key={item.id}
                    onMouseEnter={() => {
                      handleMouseEnter(index);
                      const siblings = document.querySelectorAll(
                        // ".services-items-wrapper ul li"
                      );
                      siblings.forEach((sibling) => {
                        sibling.style.zIndex = "-1";
                      });
                    }}
                    onMouseLeave={() => {
                      handleMouseLeave();
                      const siblings = document.querySelectorAll(
                        ".services-items-wrapper ul li"
                      );
                      siblings.forEach((sibling) => {
                        sibling.style.zIndex = "1";
                      });
                    }}
                    style={{ zIndex: hoveredIndex === index ? "1" : "auto" }}
                  >
                    <Link href="/services-details">
                      <div className="top-content">
                        <i className={item.big_icon}></i>
                        <span>{item.text}</span>
                      </div>
                      <i
                        className={`icon ${item.sm_icon} ${
                          hoveredIndex === index ? "d-block" : "d-none"
                        }`}
                      ></i>
                    </Link>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
