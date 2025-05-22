"use client";
import Image from "next/image";
import Link from "next/link";
import img from "../../../public/assets/img/logo/logo.png";

const footer_data = [
  {
    id: 1,
    title: "Quick Links",
    class: "column-2",
    links: [
      { list: "About us", link: "/about-us" },
      {
        list: "Our Services",
        link: "/services/vuln-assessment/network-vuln-assessment",
      },
      { list: "Terms & Conditions", link: "/contact" },
      { list: "Privacy Policy", link: "/contact" },
      { list: "Contact Us", link: "/contact" },
    ],
  },
  {
    id: 2,
    title: "Our Services",
    class: "column-3",
    links: [
      {
        list: "Vulnerability Assessment",
        link: "/services/vuln-assessment/network-vuln-assessment",
      },
      {
        list: "Penetration Testing",
        link: "/services/pen-testing-services/network-pen-testing",
      },
      {
        list: "Advisory Services",
        link: "/services/advisory-services/cyber-policy-review",
      },
      {
        list: "Managed Detection and Response",
        link: "/services/managed-detection-response/RSD-responder-MDR",
      },
      {
        list: "Digital Forensics and Incident Response",
        link: "/services/digital-forensics-incident-response/cyber-incident-response",
      },
    ],
  },
  {
    id: 2,
    title: "Pentesting Services",
    class: "column-4",
    links: [
      {
        link: "/services/pen-testing-services/network-pen-testing",
        list: "Network Pentesting",
      },
      {
        link: "/services/pen-testing-services/web-application-pen-testing",
        list: "Web Application Pentesting",
      },
      {
        link: "/services/pen-testing-services/cloud-pen-testing",
        list: "Cloud Pentesting",
      },
      {
        link: "/services/pen-testing-services/mobile-application-pen-testing",
        list: "Mobile Application Pentesting",
      },
      {
        link: "/services/pen-testing-services/iot-ot-pen-testing",
        list: "IoT & OT Pentesting",
      },
      {
        link: "/services/pen-testing-services/social-engineering-pen-testing",
        list: "Social Engineering Pentesting",
      },
      {
        link: "/services/pen-testing-services/red-team-pen-testing",
        list: "Red Team Pentesting",
      },
    ],
  },
];
const footer_content = {
  email: "contact@redshielddefense.com",
};
const { email } = footer_content;
const Footer = () => {
  return (
    <footer className="footer-area footer-bg">
      <div className="container">
        <div className="footer-top-wrap">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="footer-widget">
                <div className="footer-contact-info">
                  <div className="logo">
                    <Link href="/" className="logo-adjust">
                      <Image
                        src={img}
                        width={65}
                        height="auto"
                        alt="Logo"
                        layout="intrinsic"
                      />
                    </Link>
                  </div>
                  <h4 className="email mt-4">{email} </h4>
                </div>
              </div>
            </div>
            {footer_data.map((item) => (
              <div
                key={item.id}
                className={`col-xl-2 col-lg-3 col-md-6 col-sm-4 ${item.class}`}
              >
                <div className="footer-widget">
                  <h4 className="fw-title">{item.title}</h4>
                  <ul className="footer-link">
                    {item.links.map((li, index) => (
                      <li key={index}>
                        <Link href={li.link}>{li.list}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="copyright-wrap">
          <p className="copyright-text">
            Copyright ©2024 <span>RedShieldDefense</span>. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
