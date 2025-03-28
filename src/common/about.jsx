import Link from "next/link";
import Image from "next/image";

const about_content = {
  title: "Your Ultimate Partner for Advanced Web Application Security.",
  des: (
    <>
      At RedShield, we specialize in securing your web applications with
      innovative solutions. In today's threat landscape, ensuring the protection
      of your web infrastructure is crucial. Our tailored solutions shield your
      applications from vulnerabilities, ensuring safety, compliance, and
      resilience.
    </>
  ),
  list: [
    "Web Application Shielding",
    "Comprehensive Vulnerability Management",
    "Compliance Support",
    "Performance Optimization",
    "Managed Security Services",
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
                src="/assets/img/others/about.png"
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
