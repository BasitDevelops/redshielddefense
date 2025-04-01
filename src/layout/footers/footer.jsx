"use client";
import Image from "next/image";
import Link from "next/link";

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
];
const footer_content = {
  number: "+358 44 5040308",
  email: "contact@redshielddefense.com",
  des: (
    <>
      3828 Delmas Terrace, Culver City, <br /> CA, United States
    </>
  ),
  icon: ["fab fa-facebook-f", "fab fa-twitter", "fab fa-instagram"],
};
const { number, email, des, icon } = footer_content;
const Footer = () => {
  return (
    <footer className="footer-area footer-bg">
      <Image
        src="/assets/img/bg/footer_bg.webp"
        alt="Footer Background"
        layout="fill"
        objectFit="cover"
        quality={90}
        priority
      />
      <div className="container">
        <div className="footer-top-wrap">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="footer-widget">
                <div className="footer-contact-info">
                  <h4 className="number">{number}</h4>
                  <h4 className="email">{email} </h4>
                  <p>{des}</p>
                  <ul className="footer-social list-wrap">
                    {icon.map((li, i) => (
                      <li key={i}>
                        <Link href="#">
                          <i className={li}></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
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
            <div className="col-xxl-4 col-xl-3 col-lg-4 col-md-6 col-sm-7">
              <div className="footer-widget">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="newsletter-form"
                >
                  <div className="form-grp">
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                    />
                  </div>
                  <button type="submit" className="btn">
                    Subscribe now <span className="shape"></span>
                  </button>
                  <p className="newsletter-alert">
                    <span>*</span> Don&apos;t worry, we don&apos;t spam
                  </p>
                </form>
              </div>
            </div>
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
