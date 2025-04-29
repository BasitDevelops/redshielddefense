import React from "react";

const Approach = () => {
  const list = [
    {
      title: "Adversarial Mindset",
      desc: "Our experts think like attackers to uncover weaknesses before they’re exploited, using red teaming, ethical hacking, and threat emulation to expose real-world risks.",
    },
    {
      title: "Outcome-Focused Engagements",
      desc: "We work closely with each client to align cybersecurity strategies with operational goals, compliance mandates, and threat environments.",
    },
    {
      title: "Uncompromising Quality",
      desc: "From technical reporting to customer support, our service delivery is defined by responsiveness, transparency, and excellence.",
    },
    {
      title: "Tool-Agnostic Flexibility",
      desc: "We’re not limited by vendor bias. We select and integrate the best technologies and methodologies to suit your environment and security objectives.",
    },
  ];
  return (
    <section className="container">
      <div className="approach">
        <h2 className="title">Our Approach</h2>
        <p>
          To safeguard organizations against modern cyber threats through elite
          threat detection, offensive security insights, and continuous
          collaboration, driven by innovation, intelligence, and integrity.
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

export default Approach;
