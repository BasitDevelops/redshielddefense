"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const details_content = {
  details_img: "/assets/img/others/services_details.jpg",
  sidebar_lists: [
    {
      id: "va",
      link: "/services/vuln-assessment/network-vuln-assessment",
      title: "Network Vulnerability Assessment",
    },
    {
      id: "va",
      link: "/services/vuln-assessment/web-application-vuln-assessment",
      title: "Web Application Vulnerability Assessment",
    },
    {
      id: "va",
      link: "/services/vuln-assessment/cloud-infrastructure-vuln-assessment",
      title: "Cloud Infrastructure Vulnerability Assessment",
    },
    {
      id: "va",
      link: "/services/vuln-assessment/mobile-application-vuln-assessment",
      title: "Mobile Application Vulnerability Assessment",
    },
    {
      id: "va",
      link: "/services/vuln-assessment/iot-ot-vuln-assessment",
      title: "IoT & OT Vulnerability Assessment",
    },

    {
      id: "ps",
      link: "/services/pen-testing-services/network-pen-testing",
      title: "Network Penetration Testing",
    },
    {
      id: "ps",
      link: "/services/pen-testing-services/web-application-pen-testing",
      title: "Web Application Penetration Testing",
    },
    {
      id: "ps",
      link: "/services/pen-testing-services/cloud-pen-testing",
      title: "Cloud Penetration Testing",
    },
    {
      id: "ps",
      link: "/services/pen-testing-services/mobile-application-pen-testing",
      title: "Mobile Application Penetration Testing",
    },
    {
      id: "ps",
      link: "/services/pen-testing-services/iot-ot-pen-testing",
      title: "IoT & OT Penetration Testing",
    },
    {
      id: "ps",
      link: "/services/pen-testing-services/social-engineering-pen-testing",
      title: "Social Engineering Penetration Testing",
    },
    {
      id: "ps",
      link: "/services/pen-testing-services/red-team-pen-testing",
      title: "Red Team Penetration Testing",
    },
  ],
};
const { details_img, sidebar_lists } = details_content;

const ServicesDetailsArea = ({ title, desc, title_2, desc_2, steps }) => {
  const currentRoute = usePathname();
  return (
    <section className="services-details-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="services-details-wrap">
              <div className="services-details-thumb">
                <Image src={details_img} width={950} height={599} alt="img" />
              </div>
              <div className="services-details-content">
                <h2 className="title">{title}</h2>
                <p>{desc}</p>
                <h4 className="services-content-title">{title_2}</h4>
                <p>{desc_2}</p>
                <div className="cards-container">
                  {steps?.map((step, i) => (
                    <div key={i} className="card">
                      <div className="card-inner">
                        <div className="card-front">{step.title}</div>
                        <div className="card-back">{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* <ul className="about-list">
                  {about_list.map((li, index) => (
                    <li key={index}>{li}</li>
                  ))}
                </ul> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <aside className="services-sidebar">
              <div className="widget services-widget">
                <ul className="sidebar-services-lists list-wrap">
                  {sidebar_lists.map((li, i) => (
                    <li key={i}>
                      <Link
                        href={li.link}
                        className={`${
                          li.link === currentRoute && "active-service"
                        }`}
                      >
                        {li.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDetailsArea;
