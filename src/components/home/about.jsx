import Image from "next/image";

const about_content = {
  about_img:
    "https://cdn.pixabay.com/photo/2018/08/07/11/54/internet-3589684_1280.jpg",
  title: "Advanced Cybersecurity Operations Center (CSOC)",
  des: "Our Advanced Cyber Security Operations Center (CSOC) is your cyber resilience command center. Backed by cutting-edge technology and a team of certified experts, it delivers continuous monitoring, immediate threat detection, and proactive responses. Our center guarantees that your digital environment remains secure, compliant, and ready for the future with:",
  about_list: [
    "Vulnerability Assessments & Penetration Testing",
    "Network and Web Application Testing",
    "Controlled Exploitation for Risk Assessment",
    "Phishing Simulation Services",
    "Clear, Actionable Reporting",
  ],
};
const { about_img, img, title, des, about_list } = about_content;

const About = () => {
  return (
    <section className="about-area security-area">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-6 col-lg-8">
            <div className="about-img">
              <Image
                className="wow fadeInLeft"
                data-wow-delay=".2s"
                src={about_img}
                width={670}
                height={606}
                alt="img"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-8 col-md-11">
            <div className="about-content">
              <h2 className="title">{title}</h2>
              <p>{des}</p>
              <ul className="about-list security-list">
                {about_list.map((list, index) => (
                  <li key={index}>{list}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
