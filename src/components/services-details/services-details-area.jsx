"use client";
import FAQ from "@/common/faq";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebar_lists = [
  {
    id: "V_A",
    link: "/services/vuln-assessment/network-vuln-assessment",
    title: "Network Vulnerability Assessment",
  },
  {
    id: "V_A",
    link: "/services/vuln-assessment/web-application-vuln-assessment",
    title: "Web Application Vulnerability Assessment",
  },
  {
    id: "V_A",
    link: "/services/vuln-assessment/cloud-infrastructure-vuln-assessment",
    title: "Cloud Infrastructure Vulnerability Assessment",
  },
  {
    id: "V_A",
    link: "/services/vuln-assessment/mobile-application-vuln-assessment",
    title: "Mobile Application Vulnerability Assessment",
  },
  {
    id: "V_A",
    link: "/services/vuln-assessment/iot-ot-vuln-assessment",
    title: "IoT & OT Vulnerability Assessment",
  },

  {
    id: "P_S",
    link: "/services/pen-testing-services/network-pen-testing",
    title: "Network Penetration Testing",
  },
  {
    id: "P_S",
    link: "/services/pen-testing-services/web-application-pen-testing",
    title: "Web Application Penetration Testing",
  },
  {
    id: "P_S",
    link: "/services/pen-testing-services/cloud-pen-testing",
    title: "Cloud Penetration Testing",
  },
  {
    id: "P_S",
    link: "/services/pen-testing-services/mobile-application-pen-testing",
    title: "Mobile Application Penetration Testing",
  },
  {
    id: "P_S",
    link: "/services/pen-testing-services/iot-ot-pen-testing",
    title: "IoT & OT Penetration Testing",
  },
  {
    id: "P_S",
    link: "/services/pen-testing-services/social-engineering-pen-testing",
    title: "Social Engineering Penetration Testing",
  },
  {
    id: "P_S",
    link: "/services/pen-testing-services/red-team-pen-testing",
    title: "Red Team Penetration Testing",
  },
  {
    id: "A_S",
    link: "/services/advisory-services/cyber-policy-review",
    title: "Cyber Policy Review",
  },
  {
    id: "A_S",
    link: "/services/advisory-services/cyber-due-dilligence",
    title: "Cyber Due Diligence",
  },
  {
    id: "A_S",
    link: "/services/advisory-services/supply-chain-due-dilligence",
    title: "Supply Chain Due Diligence",
  },
  {
    id: "A_S",
    link: "/services/advisory-services/compliance-advisory",
    title: "Compliance Advisory",
  },
  {
    id: "A_S",
    link: "/services/advisory-services/virtual-CISO",
    title: "Virtual CISO",
  },
  {
    id: "A_S",
    link: "/services/advisory-services/DPO-services",
    title: "DPO Services",
  },
  {
    id: "A_S",
    link: "/services/advisory-services/dark-web-monitoring",
    title: "Dark Web Monitoring",
  },
  {
    id: "A_S",
    link: "/services/advisory-services/application-security",
    title: "Application Security",
  },
  {
    id: "A_S",
    link: "/services/advisory-services/threat-modelling",
    title: "Threat Modelling",
  },
  {
    id: "M_D_R",
    link: "/services/managed-detection-response/RSD-responder-MDR",
    title: "RSD Responder MDR",
  },
  {
    id: "M_D_R",
    link: "/services/managed-detection-response/MDR-for-microsoft",
    title: "MDR for Microsoft",
  },
  {
    id: "M_D_R",
    link: "/services/managed-detection-response/managed-SIEM",
    title: "Managed SIEM",
  },
  {
    id: "M_D_R",
    link: "/services/managed-detection-response/managed-EDR",
    title: "Managed EDR",
  },
  {
    id: "M_D_R",
    link: "/services/managed-detection-response/managed-SOC",
    title: "Managed SOC",
  },
  {
    id: "D_F_I_R",
    link: "/services/digital-forensics-incident-response/cyber-incident-response",
    title: "Cyber Incident Response",
  },
  {
    id: "D_F_I_R",
    link: "/services/digital-forensics-incident-response/incident-response-planning",
    title: "Incident Response Planning",
  },
  {
    id: "D_F_I_R",
    link: "/services/digital-forensics-incident-response/breach-notification",
    title: "Breach Notification",
  },
  {
    id: "D_F_I_R",
    link: "/services/digital-forensics-incident-response/digital-forensics",
    title: "Digital Forensics",
  },
  {
    id: "D_F_I_R",
    link: "/services/digital-forensics-incident-response/litigation-support",
    title: "Litigation Support",
  },
  {
    id: "D_F_I_R",
    link: "/services/digital-forensics-incident-response/malware-analysis-reverse-engineering",
    title: "Malware Analysis & Reverse Engineering",
  },
  {
    id: "D_F_I_R",
    link: "/services/digital-forensics-incident-response/cyber-risk-retainer",
    title: "Cyber Risk Retainer",
  },
];

const ServicesDetailsArea = ({
  img,
  img_alt,
  title,
  desc,
  title_2,
  desc_2,
  title_3,
  desc_3,
  steps,
  list,
  desc_3_2,
  title_4,
  img_2,
  img_2_alt,
  desc_4,
  list_2,
  desc_5,
  list_3,
  title_6,
  desc_6,
  title_7,
  desc_7,
  faqs,
}) => {
  const currentRoute = usePathname();
  return (
    <section className="services-details-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="services-details-wrap">
              <div className="services-details-thumb">
                <Image src={img} width={950} height={599} alt={img_alt} />
              </div>
              <div className="services-details-content">
                <h2 className="title">{title}</h2>
                <p>{desc}</p>
                <h4 className="services-content-title">{title_2}</h4>
                <p>{desc_2}</p>
                <div className="cards-container">
                  {steps?.map((step, i) => (
                    <div key={i} className="card">
                      <div className="card-inner">
                        <div className="card-front">{step.title}</div>
                        <div className="card-back">{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <h4 className="services-content-title">{title_3}</h4>
                <p>{desc_3}</p>
                <ul className="about-list">
                  {list?.map((li, index) => (
                    <li key={index}>{li}</li>
                  ))}
                </ul>
                <p className="desc_3_2">{desc_3_2}</p>
                <h4 className="services-content-title">{title_4}</h4>
                <div className="services-details-thumb">
                  <Image src={img_2} width={950} height={599} alt={img_2_alt} />
                </div>
                <p className="desc_3_2">{desc_4}</p>
                <ul className="about-list">
                  {list_2?.map((li, index) => (
                    <li key={index}>{li}</li>
                  ))}
                </ul>
                <p className="desc_3_2">{desc_5}</p>
                <ul className="about-list">
                  {list_3?.map((li, index) => (
                    <li key={index}>{li}</li>
                  ))}
                </ul>
                <h4 className="services-content-title">{title_6}</h4>
                <p>{desc_6}</p>
                <h4 className="services-content-title">{title_7}</h4>
                <p>{desc_7}</p>
                <FAQ data={faqs} />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <aside className="services-sidebar">
              <div className="widget services-widget">
                <ul className="sidebar-services-lists list-wrap">
                  {sidebar_lists.map((li, i) => {
                    if (currentRoute.includes(li.link.split("/")[2])) {
                      return (
                        <li key={i}>
                          <Link
                            href={li.link}
                            className={`${
                              li.link === currentRoute && "active-service"
                            }`}
                          >
                            {li.title}
                          </Link>
                        </li>
                      );
                    }
                    return;
                  })}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDetailsArea;
