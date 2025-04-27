import Image from "next/image";
import Link from "next/link";
import React from "react";
import hacker_figure from "../../../public/assets/img/others/hacker_figure.png";

const AdditionalContent = () => {
  const additional_content = [
    {
      img: "https://cdn.pixabay.com/photo/2017/12/28/08/39/binary-3044661_960_720.jpg",
      title: "Global Cybersecurity Solutions",
      alt: "Digital globe surrounded by binary code, showing data networks. Global cybersecurity solutions",
      desc: "Cyber threats never rest, and neither do we. Whether you’re a rapidly growing startup or a global enterprise, our cybersecurity solutions provide seamless, round-the-clock protection through a powerful blend of AI, automation, and human expertise. Through threat detection, identity and access management services, and penetration testing, we assist businesses in building cyber resilience in this fast-paced computing age.",
    },
    {
      img: hacker_figure,
      title: "Stay One Step Ahead of Modern Threats",
      alt: "Hacker figure facing red code wall. Protect your data with an advanced penetration testing service",
      desc: "Every 39 seconds, a cyberattack occurs, impacting businesses across industries. Our experts combine AI-driven detection, real-time monitoring, and continuous threat hunting to identify and neutralize risks before they can cause harm. We expose vulnerabilities across your network, applications, and infrastructure to deliver comprehensive insights and clear, actionable steps to keep your operations secure.",
    },
    {
      img: "https://images.pexels.com/photos/5474291/pexels-photo-5474291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Future-Proof Identity and Access Management",
      alt: "Secure key and USB symbolizing security through smart identity and access management solutions.",
      desc: "Secure, frictionless access is the cornerstone of modern cybersecurity. Our intelligent identity and access management solutions unify secure single sign-on, adaptive multi-factor authentication, and behavior analytics to ensure only the right users access your resources. Harmonize efficiency and compliance throughout your enterprise and give IT teams complete control over human and machine identities.",
    },
  ];
  return (
    <section className="about-area security-area additional-content">
      <div className="container">
        {additional_content.map((content, i) => (
          <div
            key={i}
            className="row justify-content-center layout align-items-center"
          >
            <div className="col-xl-6 col-lg-8">
              <div className="about-img">
                <Image
                  className="wow fadeInLeft"
                  data-wow-delay=".2s"
                  src={content.img}
                  width={670}
                  height={400}
                  alt="img"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-8 col-md-11">
              <div className="about-content">
                <h2 className="title">{content.title}</h2>
                <p>{content.desc}</p>
                <Link
                  href="/contact"
                  className="btn wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <span className="text">Get Started</span>
                  <span className="shape"></span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdditionalContent;
