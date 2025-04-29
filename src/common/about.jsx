import Link from "next/link";
import Image from "next/image";

export const about_content = {
  title: "Your Trusted Partner in Cybersecurity Defense",
  des: (
    <>
      At RedShieldDefense, we work as an embedded extension of your security
      team, committed to helping you outpace and outsmart cyber adversaries.
      With a proactive, threat-informed approach and a deep understanding of
      attacker tactics, we empower organizations to strengthen their defenses,
      reduce risk, and rapidly respond to evolving threats.
      <br />
      <br />
      Our award-winning cybersecurity solutions are engineered to deliver
      measurable outcomes across detection, response, and resilience. Whether
      protecting critical infrastructure, securing digital assets, or enhancing
      compliance readiness, RedShieldDefense is your go-to partner for advanced,
      adaptive cyber defense.
    </>
  ),
  list: [
    "Web Application Security & Threat Protection",
    "Advanced Vulnerability Assessment & Risk Management",
    "Regulatory Compliance & Data Protection Solutions",
    "Cybersecurity Performance Optimization & Secure Infrastructure",
    "24/7 Managed Cybersecurity Services & Threat Monitoring",
  ],
  btn: "More About us",
};

const { title, des, list, btn } = about_content;

const About = ({ style }) => {
  return (
    <section className={`${style ? "inner-about-padding" : "about-area"}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img">
              <Image
                src="https://images.pexels.com/photos/5439476/pexels-photo-5439476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                width={705}
                height={567}
                alt="Cybersecurity professionals who use red team VAPT techniques for identifying vulnerabilities posing."
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-11">
            <div className="about-content">
              <h2 className="title">{title}</h2>
              <p>{des}</p>
              <ul className="about-list">
                {list.map((li, index) => (
                  <li key={index}>{li}</li>
                ))}
              </ul>
              <Link href="/about" className="btn">
                <span className="text">{btn}</span>
                <span className="shape"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
