import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import oscp from "../../../public/assets/img/logo/oscp.webp";
import crest_ovs_apps from "../../../public/assets/img/logo/crest-ovs-apps.webp";
import crest_ovs_mobile from "../../../public/assets/img/logo/crest-ovs-mobile.webp";
import intelligence_led_pen_testing_logo from "../../../public/assets/img/logo/intelligence-led-pen-testing-logo.webp";
import iso_9001 from "../../../public/assets/img/logo/iso-9001.webp";
import iso_27001 from "../../../public/assets/img/logo/iso-27001.webp";
import logo_crest from "../../../public/assets/img/logo/logo-crest.webp";
import logo_pen_test from "../../../public/assets/img/logo/logo-pen-test.webp";
import oswp from "../../../public/assets/img/logo/oswp.webp";
import owasp from "../../../public/assets/img/logo/owasp.svg";
import cisa from "../../../public/assets/img/logo/cisa.svg";
import cism from "../../../public/assets/img/logo/cism.svg";
import aws_certified_cloud_practitioner from "../../../public/assets/img/logo/aws-certified-cloud-practitioner.webp";
import ccent from "../../../public/assets/img/logo/ccent.webp";
import ceh from "../../../public/assets/img/logo/ceh.webp";
import cissp from "../../../public/assets/img/logo/cissp.webp";
import offensive_azure_security_professional from "../../../public/assets/img/logo/offensive-azure-security-professional.webp";
import crown_commercial_service from "../../../public/assets/img/logo/crown-commercial-service.webp";
import cyber_essentials from "../../../public/assets/img/logo/cyber-essentials.webp";
import delivery_partner_badge_ca from "../../../public/assets/img/logo/delivery-partner-badge-ca.webp";
import certified_appsec_practitioner from "../../../public/assets/img/logo/certified-appsec-practitioner.webp";
import g_cloud from "../../../public/assets/img/logo/g-cloud.webp";
import ce_advisor_scheme from "../../../public/assets/img/logo/ce-advisor-scheme.webp";
import cyber_essentials_plus_certification_body_logo from "../../../public/assets/img/logo/cyber-essentials-plus-certification-body-logo.webp";

const CertificationsMarquee = () => {
  const certfications = [
    {
      src: oscp,
      alt: "OSCP",
    },
    {
      src: oswp,
      alt: "OWSP",
    },
    {
      src: owasp,
      alt: "OWASP",
    },
    {
      src: logo_crest,
      alt: "CREST",
      width: 60,
    },
    {
      src: crest_ovs_apps,
      alt: "CREST OVS Apps",
      width: 45,
    },
    {
      src: crest_ovs_mobile,
      alt: "CREST OVS Mobile",
      width: 45,
    },
    {
      src: logo_pen_test,
      alt: "PEN TEST",
    },
    {
      src: intelligence_led_pen_testing_logo,
      alt: "CREST Pen Testing",
    },
    {
      src: iso_9001,
      alt: "ISO 9001",
    },
    {
      src: iso_27001,
      alt: "ISO 27001",
    },
  ];

  const certfications_2 = [
    {
      src: cisa,
      alt: "CISA",
    },
    {
      src: cism,
      alt: "CISM",
    },
    {
      src: aws_certified_cloud_practitioner,
      alt: "AWS Certified Cloud Practioner",
    },
    {
      src: offensive_azure_security_professional,
      alt: "Offensive Azure Security Professional",
    },
    {
      src: ccent,
      alt: "CCENT",
      width: 73,
    },
    {
      src: ceh,
      alt: "CEH",
      width: 140,
    },
    {
      src: cissp,
      alt: "CISSP",
    },
    {
      src: oscp,
      alt: "OSCP",
    },
    {
      src: oswp,
      alt: "OWSP",
    },
    {
      src: owasp,
      alt: "OWASP",
    },
  ];

  const certfications_3 = [
    {
      src: crown_commercial_service,
      alt: "Crown Commercial Service Supplier",
      width: 99,
    },
    {
      src: cyber_essentials,
      alt: "Cyber Essentials",
    },
    {
      src: delivery_partner_badge_ca,
      alt: "National Cyber Security Centre Cyber Advisor",
      width: 140,
      height: 75,
    },
    {
      src: certified_appsec_practitioner,
      alt: "Certified AppSec Practitioner",
    },
    {
      src: g_cloud,
      alt: "HM Government G-Cloud",
      width: 139,
      height: 53,
    },
    {
      src: ce_advisor_scheme,
      alt: "Cyber Essentials",
      width: 139,
      height: 63,
    },
    {
      src: cyber_essentials_plus_certification_body_logo,
      alt: "Cyber Advisor",
      width: 139,
      height: 63,
    },
    {
      src: logo_pen_test,
      alt: "PEN TEST",
    },
    {
      src: intelligence_led_pen_testing_logo,
      alt: "CREST Pen Testing",
    },
    {
      src: iso_9001,
      alt: "ISO 9001",
    },
  ];
  return (
    <>
      <Marquee gradient gradientColor="#3e0f1b" gradientWidth={250}>
        <div className="certification-cards-container">
          {certfications.map((certfication, i) => (
            <div key={i} className="certification-card">
              <Image
                src={certfication.src}
                width={certfication.width || 80}
                height={certfication.height || 80}
                alt={certfication.alt}
                layout="fixed"
              />
            </div>
          ))}
        </div>
      </Marquee>
      <Marquee
        gradient
        gradientColor="#3e0f1b"
        gradientWidth={250}
        direction="right"
      >
        <div className="certification-cards-container">
          {certfications_2.map((certfication, i) => (
            <div key={i} className="certification-card">
              <Image
                src={certfication.src}
                width={certfication.width || 80}
                height={certfication.height || 80}
                alt={certfication.alt}
                layout="fixed"
              />
            </div>
          ))}
        </div>
      </Marquee>
      <Marquee gradient gradientColor="#3e0f1b" gradientWidth={250}>
        <div className="certification-cards-container">
          {certfications_3.map((certfication, i) => (
            <div key={i} className="certification-card">
              <Image
                src={certfication.src}
                width={certfication.width || 80}
                height={certfication.height || 80}
                alt={certfication.alt}
                layout="fixed"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </>
  );
};

export default CertificationsMarquee;
