"use client";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="banner-area banner-three-bg fix">
      {/* <Image
        src="/assets/img/banner/background.webp"
        alt="Banner Background"
        layout="fill"
        objectFit="cover"
        quality={90}
        priority
      /> */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="banner-three-content text-center">
              <h2 className="heading wow fadeInUp" data-wow-delay=".2s">
                Proactive Cybersecurity Solutions to Shield Your{" "}
                <span>Data</span> Against Cyber Threats
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Our expert penetration testing identifies critical
                vulnerabilities before attackers can exploit them. We deliver
                actionable remediation strategies that strengthen your security
                posture while ensuring continuous regulatory compliance and
                operational integrity.
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
