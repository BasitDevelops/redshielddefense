"use client";
import Image from "next/image";
import Slider from "react-slick";

const brand_data = [
  {
    id: 1,
    img: "/assets/img/brand/arkime.png",
    width: 100,
    height: 50,
  },
  {
    id: 2,
    img: "/assets/img/brand/cortex.jpg",
    width: 100,
    height: 50,
  },
  {
    id: 3,
    img: "/assets/img/brand/cuckoo.jpg",
    width: 100,
    height: 36,
  },
  {
    id: 4,
    img: "/assets/img/brand/docker.png",
    width: 100,
    height: 50,
  },
  {
    id: 5,
    img: "/assets/img/brand/elastic_stack.jpg",
    width: 100,
    height: 38,
  },
  {
    id: 6,
    img: "/assets/img/brand/falco.jpg",
    width: 100,
    height: 50,
  },
  {
    id: 7,
    img: "/assets/img/brand/graylog.png",
    width: 100,
    height: 50,
  },
  {
    id: 8,
    img: "/assets/img/brand/misp.png",
    width: 100,
    height: 50,
  },
  {
    id: 9,
    img: "/assets/img/brand/n8n.png",
    width: 100,
    height: 50,
  },
  {
    id: 10,
    img: "/assets/img/brand/osquery.png",
    width: 100,
    height: 50,
  },
  //   {
  //     id: 11,
  //     img: "/assets/img/brand/security_onion.png",
  //     width: 100,
  //     height: 50,
  //   },
  {
    id: 12,
    img: "/assets/img/brand/shuffle.png",
    width: 100,
    height: 50,
  },
  {
    id: 13,
    img: "/assets/img/brand/stackstorm.jpg",
    width: 100,
    height: 50,
  },
  {
    id: 14,
    img: "/assets/img/brand/suricata.jpg",
    width: 100,
    height: 50,
  },
  {
    id: 15,
    img: "/assets/img/brand/sysinternals.jpg",
    width: 100,
    height: 50,
  },
  {
    id: 16,
    img: "/assets/img/brand/sysmon.png",
    width: 100,
    height: 50,
  },
  {
    id: 17,
    img: "/assets/img/brand/the_hive.jpg",
    width: 100,
    height: 50,
  },
  //   {
  //     id: 18,
  //     img: "/assets/img/brand/wazuh.png",
  //     width: 100,
  //     height: 50,
  //   },
  {
    id: 19,
    img: "/assets/img/brand/wireshark.jpg",
    width: 100,
    height: 50,
  },
  {
    id: 20,
    img: "/assets/img/brand/yara.jpg",
    width: 100,
    height: 50,
  },
  //   {
  //     id: 21,
  //     img: "/assets/img/brand/zeek.png",
  //     width: 100,
  //     height: 50,
  //   },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  arrows: false,
  slidesToShow: 6,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};
const Brand = ({ style_2, style_3 }) => {
  return (
    <section
      className={`brand-area ${
        style_2 ? "brand-two-area" : "" || style_3 ? "brand-three-area" : ""
      }`}
    >
      <div className="container">
        <div className="brand-wrap">
          <div className="row">
            <div className="col-12">
              <h4 className="brand-title">
                Open Source Cybersecurity <span>Technologies</span> We Use
              </h4>
            </div>
          </div>
          <div className="row brand-active">
            <Slider {...settings}>
              {brand_data.map((item) => (
                <div key={item.id} className="col-2">
                  <div className="brand-item">
                    <Image
                      src={item.img}
                      width={item.width}
                      height={item.height}
                      alt="Brand Logo"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
