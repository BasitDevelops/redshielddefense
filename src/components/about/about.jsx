import Breadcrumb from "@/common/breadcrumb";
import About from "@/common/about";
import Counter from "@/common/counter";
import Marquee from "@/common/marquee";
import Testimonial from "@/common/testimonial";
import Header from "@/layout/headers/header";
import Image from "next/image";
import Link from "next/link";
import Mission from "./mission";
import Approach from "./approach";
import Services from "./services";

const AboutMain = () => {
  return (
    <>
      <Header />
      <main className="main-area fix">
        <Breadcrumb title="About Us" sm_title="About Us" />
        <About style={true} />
        <Counter style={true} />
        <Mission />
        <Approach />
        <section className="container">
          <div className="mission">
            <h2 className="title">Offensive Security Expertise</h2>
            <p>
              Stopping threats by thinking like the enemy.
              <br />
              <br />
              Modern cyber defense requires insight into how attackers operate.
              RedShieldDefense maintains a dedicated offensive security division
              that conducts advanced penetration tests, red team operations, and
              adversary simulations, equipping our blue team with the context
              needed to detect and respond faster.
              <br />
              <br />
              The result? A unified defense strategy informed by real-world
              threat actor tactics, ensuring you’re prepared for even the most
              sophisticated attacks.
            </p>
          </div>
        </section>
        <Services />
        <section className="container">
          <div className="mission">
            <p>
              Secure more than just systems. Protect your business, your
              reputation, and your future.
              <br />
              <br />
              Partner with RedShieldDefense, the name behind resilient,
              proactive cybersecurity.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutMain;
