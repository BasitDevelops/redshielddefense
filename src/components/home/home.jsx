import Banner from "./banner";
import Brand from "@/common/brand";
import About from "@/components/home/about";
import Testimonial from "@/common/testimonial";
import Services from "@/common/services";
import Header from "@/layout/headers/header";
import FAQ from "@/common/faq";
import CertificationsMarquee from "@/components/certfications-marquee/certifications-marquee";
import AdditionalContent from "@/components/additional-content/additional-content";

const Home = () => {
  return (
    <>
      <Header />
      <main className="main-area fix">
        <Banner />
        <Brand style_3={true} />
        <Services style={true} />
        <About />
        <CertificationsMarquee />
        <AdditionalContent />
        <Testimonial />
        <FAQ style_3={true} />
      </main>
    </>
  );
};

export default Home;
