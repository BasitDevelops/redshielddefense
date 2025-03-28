import Breadcrumb from "@/common/breadcrumb";
import ServicesDetailsContent from "./services-details-area";
import Header from "@/layout/headers/header";

const ServicesDetails = () => {
  const data = {
    main_title: "Network Vulnerability Assessments",
    title: "Strengthen Your Network with Vulnerability Assessments",
    desc: "In today's threat landscape, it is essential to understand the vulnerabilities in your network before attackers do. Network Vulnerability Assessment identifies weaknesses, helping you protect your critical systems and data from potential breaches.",
    title_2: "Our Comprehensive Network Vulnerability Assessment Approach",
    desc_2:
      "Ensure the security of your network by identifying, assessing, and addressing vulnerabilities before they become a threat.",
    steps: [
      {
        title: "Comprehensive Network Scanning",
        desc: "We perform thorough scans to identify vulnerabilities in your network infrastructure, from outdated software to misconfigurations.",
      },
      {
        title: "Risk Assessment & Prioritization",
        desc: "Our experts prioritize vulnerabilities based on risk and potential impact, ensuring you focus on fixing the most critical issues first.",
      },
      {
        title: "Actionable Insights & Recommendations",
        desc: "Receive clear, actionable reports with recommendations to address vulnerabilities and strengthen your network defenses.",
      },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <Breadcrumb spyware={data.main_title} sm_title="Services" />
        <ServicesDetailsContent
          title={data.title}
          desc={data.desc}
          title_2={data.title_2}
          desc_2={data.desc_2}
          steps={data.steps}
        />
      </main>
    </>
  );
};

export default ServicesDetails;
