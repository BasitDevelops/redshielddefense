import Image from "next/image";

const about_content = {
  about_img:
    "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN5YmVyJTIwc2VjdXJpdHklMjB0ZWFtfGVufDB8fDB8fHwy",
  title: "Advanced Cyber Security Operation Center",
  des: (
    <>
      Our Advanced Cyber Security Operations Center is designed to provide
      real-time monitoring, threat detection, and rapid response to safeguard
      your systems from emerging cyber threats. With cutting-edge technology and
      expert teams, we ensure your digital assets are always protected.
    </>
  ),
  about_list: [
    "Vulnerability Assessments & Penetration Testing",
    "Controlled Exploitation for Risk Assessment",
    "Network and Web Application Testing",
    "Phishing Simulation Services",
    "Controlled Exploitation for Risk Assessment",
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
