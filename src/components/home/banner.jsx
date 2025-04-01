"use client";
import Link from "next/link";

const Banner = () => {
  return (
    <section
      className="banner-area banner-three-bg fix"
      style={{ backgroundImage: `url("assets/img/banner/background.webp")` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="banner-three-content text-center">
              <h2 className="heading wow fadeInUp" data-wow-delay=".2s">
                We safeguard your <span>data</span> against cyber threats and
                hackers.
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                RedShieldDefense offers expert penetration testing services to
                uncover and remediate security vulnerabilities, protecting your
                business from cyber threats, data breaches, and hacking
                attempts. Our ethical hacking and security assessments ensure
                your systems remain secure, compliant, and resilient against
                evolving cyberattacks. 🚀
              </p>
              <Link
                href="/contact"
                className="btn wow fadeInUp"
                data-wow-delay=".6s"
              >
                <span className="text">Contact Us</span>
                <span className="shape"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
