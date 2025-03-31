import Link from "next/link";
import Image from "next/image";

export const about_content = {
  title: "Your Ultimate Partner for Advanced Cybersecurity Solutions.",
  des: (
    <>
      At RedShieldDefense, we provide cutting-edge cybersecurity solutions to
      protect your web applications from cyber threats, data breaches, and
      malware attacks.
      <br />
      In today's evolving threat landscape, securing your web infrastructure
      against vulnerabilities, DDoS attacks, and zero-day exploits is more
      critical than ever.
      <br />
      Our penetration testing, vulnerability management, and threat intelligence
      services ensure your applications remain secure, compliant, and resilient
      against hackers and cybersecurity risks.
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
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={705}
                height={567}
                alt="theme-pure"
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
