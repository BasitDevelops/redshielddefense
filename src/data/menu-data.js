import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { TfiTarget } from "react-icons/tfi";
import { FaNetworkWired, FaMixcloud, FaMobileAlt } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { GiMonoWheelRobot, GiTargeting } from "react-icons/gi";
import { IoShareSocialOutline } from "react-icons/io5";

const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Home",
    link: "/",
    // sub_menus: [
    //     { link: "/", title: "Home-One" },
    //     { link: "/home-two", title: "Home-Two" },
    //     { link: "/home-three", title: "Home-Three" },
    // ],
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "About",
    link: "/about-us",
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "Services",
    link: "#",
    sub_menus: [
      {
        id: "va",
        link: "/services/vuln-assessment/network-vuln-assessment",
        title: "Vulnerabilty Assessment",
        icon: <MdOutlineScreenSearchDesktop />,
        has_dropdown: true,
        sub_menus: [
          {
            id: "va",
            link: "/services/vuln-assessment/network-vuln-assessment",
            title: "Network Vulnerability Assessment",
            desc: "Identify and analyze security weaknesses in a network to prevent potential threats.",
            icon: <FaNetworkWired />,
          },
          {
            id: "va",
            link: "/services/vuln-assessment/web-application-vuln-assessment",
            title: "Web Application Vulnerability Assessment",
            desc: "Identify and analyze security flaws in a web app to prevent potential exploits.",
            icon: <TbWorldWww />,
          },
          {
            id: "va",
            link: "/services/vuln-assessment/cloud-infrastructure-vuln-assessment",
            title: "Cloud Infrastructure Vulnerability Assessment",
            desc: "Identify and mitigate security risks in cloud environments to prevent breaches.",
            icon: <FaMixcloud />,
          },
          {
            id: "va",
            link: "/services/vuln-assessment/mobile-application-vuln-assessment",
            title: "Mobile Application Vulnerability Assessment",
            desc: "Detect and analyze security flaws in mobile apps to prevent exploits.",
            icon: <FaMobileAlt />,
          },
          {
            id: "va",
            link: "/services/vuln-assessment/iot-ot-vuln-assessment",
            title: "IoT & OT Vulnerability Assessment",
            desc: "Identify security risks in connected devices and operational technology.",
            icon: <GiMonoWheelRobot />,
          },
        ],
      },
      {
        id: "ps",
        link: "/services/pen-testing-services/network-pen-testing",
        title: "Pentesting Services",
        icon: <TfiTarget />,
        has_dropdown: true,
        sub_menus: [
          {
            id: "ps",
            link: "/services/pen-testing-services/network-pen-testing",
            title: "Network Penetration Testing",
            desc: "Simulate attacks to identify and exploit security weaknesses in a network.",
            icon: <FaNetworkWired />,
          },
          {
            id: "ps",
            link: "/services/pen-testing-services/web-application-pen-testing",
            title: "Web Application Penetration Testing",
            desc: "Simulate attacks to find and exploit security flaws in web apps.",
            icon: <TbWorldWww />,
          },
          {
            id: "ps",
            link: "/services/pen-testing-services/cloud-pen-testing",
            title: "Cloud Penetration Testing",
            desc: "Evaluate cloud security by simulating real-world cyber threats to uncover vulnerabilities.",
            icon: <FaMixcloud />,
          },
          {
            id: "ps",
            link: "/services/pen-testing-services/mobile-application-pen-testing",
            title: "Mobile Application Penetration Testing",
            desc: "Mimic cyber threats to expose vulnerabilities in mobile apps and strengthen security.",
            icon: <FaMobileAlt />,
          },
          {
            id: "ps",
            link: "/services/pen-testing-services/iot-ot-pen-testing",
            title: "IoT & OT Penetration Testing",
            desc: "Expose vulnerabilities in smart and industrial systems through cyber threat simulation.",
            icon: <GiMonoWheelRobot />,
          },
          {
            id: "ps",
            link: "/services/pen-testing-services/social-engineering-pen-testing",
            title: "Social Engineering Penetration Testing",
            desc: "Simulate real-world manipulations to test employee security awareness.",
            icon: <IoShareSocialOutline />,
          },
          {
            id: "ps",
            link: "/services/pen-testing-services/red-team-pen-testing",
            title: "Red Team Penetration Testing",
            desc: "Simulate cyberattacks to test an organization’s defense and resilience.",
            icon: <GiTargeting />,
          },
        ],
      },
    ],
  },
  // {
  //     id: 4,
  //     mega_menu: false,
  //     has_dropdown: true,
  //     title: "Pages",
  //     link: "#",
  //     sub_menus: [
  //         { link: "/pricing", title: "Pricing" },
  //         { link: "/team", title: "Our Team" },
  //         { link: "/faq", title: "Faq" },
  //         { link: "/not-found", title: "4o4 Page" },
  //     ],
  // },
  // {
  //     id: 5,
  //     mega_menu: false,
  //     has_dropdown: true,
  //     title: "Shop",
  //     link: "#",
  //     sub_menus: [
  //         { link: "/shop", title: "Our-Shop" },
  //         { link: "/shop-details", title: "Shop Details" },
  //     ],
  // },
  // {
  //     id: 6,
  //     mega_menu: false,
  //     has_dropdown: true,
  //     title: "Blog",
  //     link: "#",
  //     sub_menus: [
  //         { link: "/blog-grid", title: "Blog-Grid" },
  //         { link: "/blog", title: "Blog-Standard" },
  //         { link: "/blog-details", title: "Blog-Details" },
  //     ],
  // },
  {
    id: 7,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
  },
];
export default menu_data;
