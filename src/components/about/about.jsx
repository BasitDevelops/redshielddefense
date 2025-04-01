import Breadcrumb from "@/common/breadcrumb";
import About from "@/common/about";
import Counter from "@/common/counter";
import Marquee from "@/common/marquee";
import Testimonial from "@/common/testimonial";
import Header from "@/layout/headers/header";

const AboutMain = () => {
  return (
    <>
      <Header />
      <main className="main-area fix">
        <Breadcrumb title="About Us" sm_title="About Us" />
        <About style={true} />
        <Counter style={true} />
        {/* <Marquee /> */}
        {/* <Testimonial /> */}
      </main>
    </>
  );
};

export default AboutMain;
