import React from "react";

const Services = () => {
  const list = [
    {
      title: "Managed Detection & Response (MDR)",
      desc: "24/7 threat monitoring and rapid response from our global SOC teams to detect and contain attacks in real time.",
    },
    {
      title: "Security Assessments & Advisory",
      desc: "Penetration testing, cloud security assessments, and risk audits to identify and remediate hidden vulnerabilities.",
    },
    {
      title: "Incident Response & Forensics",
      desc: "Immediate support during cyber crises, including breach containment, root cause analysis, and post-incident guidance.",
    },
    {
      title: "Web Application & API Security",
      desc: "Continuous protection against web-based attacks, injection flaws, and business logic abuse across public-facing applications.",
    },
    {
      title: "Threat Intelligence & Strategy",
      desc: "Industry-specific threat intelligence fused with proactive defense planning to enhance situational awareness and long-term resilience.",
    },
  ];
  return (
    <section className="container">
      <div className="approach">
        <h2 className="title">Our Services</h2>
        <p>
          RedShieldDefense delivers a full spectrum of cybersecurity services
          tailored to your environment:
        </p>
        <ul className="about-list">
          {list.map((li, index) => (
            <li key={index}>
              <div>
                <h3>{li?.title}</h3>
                <p>{li?.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
