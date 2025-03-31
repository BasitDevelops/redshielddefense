import About from "@/components/about/about";

export const metadata = {
  title: "About Us",
  description:
    "At RedShieldDefense, we provide cutting-edge cybersecurity solutions to protect your web applications from cyber threats, data breaches, and malware attacks. In today's evolving threat landscape, securing your web infrastructure against vulnerabilities, DDoS attacks, and zero-day exploits is more critical than ever. Our penetration testing, vulnerability management, and threat intelligence services ensure your applications remain secure, compliant, and resilient against hackers and cybersecurity risks.",
};

const page = () => {
  return (
    <>
      <About />
    </>
  );
};

export default page;
