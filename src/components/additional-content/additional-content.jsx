import Image from "next/image";
import Link from "next/link";
import React from "react";

const AdditionalContent = () => {
  const additional_content = [
    {
      img: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Global Cybersecurity Protection",
      desc: "Cyber threats operate on a global scale, targeting businesses of all sizes. Our state-of-the-art cybersecurity solutions provide 24/7 protection, leveraging AI-driven threat detection, advanced encryption, and real-time monitoring to keep your data, systems, and operations secure. Whether you're a startup or a global enterprise, our security framework adapts to your needs—because in today's digital world, safety should have no boundaries.",
    },
    {
      img: "https://cdn.pixabay.com/photo/2023/11/05/02/07/ai-generated-8366100_640.jpg",
      title: "Stay One Step Ahead",
      desc: "Every 39 seconds, a cyberattack occurs. Hackers exploit vulnerabilities through phishing, malware, and ransomware, costing businesses billions. Our cybersecurity experts anticipate and neutralize threats before they strike, using proactive monitoring, ethical hacking simulations, and AI-powered defense mechanisms. Don’t wait for a breach to take action—fortify your digital infrastructure now and keep your business ahead of the attackers.",
    },
    {
      img: "https://cdn.pixabay.com/photo/2022/06/16/09/09/humanoid-7265468_640.jpg",
      title: "The Future of Secure Authentication",
      desc: "Traditional passwords are no longer enough to safeguard sensitive data. With cyber threats evolving, authentication methods must advance. Our biometric authentication, AI-driven access controls, and multi-layered encryption redefine digital security, ensuring only authorized personnel can access critical systems. Reduce fraud, eliminate weak passwords, and future-proof your security with our next-gen identity protection solutions.",
    },
  ];
  return (
    <div className="additional-content">
      {additional_content.map((content) => (
        <div>
          <Image src={content.img} width={350} height={350} alt="" />
          <div>
            <h3>{content.title}</h3>
            <p>{content.desc}</p>
            <Link
              href="/contact"
              className="btn wow fadeInUp"
              data-wow-delay=".6s"
            >
              <span className="text">Get Started</span>
              <span className="shape"></span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdditionalContent;
