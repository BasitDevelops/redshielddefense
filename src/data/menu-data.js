import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { TfiTarget } from "react-icons/tfi";

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
          },
          {
            id: "va",
            link: "/services/vuln-assessment/web-application-vuln-assessment",
            title: "Web Application Vulnerability Assessment",
          },
          {
            id: "va",
            link: "/services/vuln-assessment/cloud-infrastructure-vuln-assessment",
            title: "Cloud Infrastructure Vulnerability Assessment",
          },
          {
            id: "va",
            link: "/services/vuln-assessment/mobile-application-vuln-assessment",
            title: "Mobile Application Vulnerability Assessment",
          },
          {
            id: "va",
            link: "/services/vuln-assessment/iot-ot-vuln-assessment",
            title: "IoT & OT Vulnerability Assessment",
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
          },
          {
            id: "ps",
            link: "/services/pen-testing-services/web-application-pen-testing",
            title: "Web Application Penetration Testing",
          },
          {
            id: "ps",
            link: "/services/pen-testing-services/cloud-pen-testing",
            title: "Cloud Penetration Testing",
          },
          {
            id: "ps",
            link: "/services/pen-testing-services/mobile-application-pen-testing",
            title: "Mobile Application Penetration Testing",
          },
          {
            id: "ps",
            link: "/services/pen-testing-services/iot-ot-pen-testing",
            title: "IoT & OT Penetration Testing",
          },
          {
            id: "ps",
            link: "/services/pen-testing-services/social-engineering-pen-testing",
            title: "Social Engineering Penetration Testing",
          },
          {
            id: "ps",
            link: "/services/pen-testing-services/red-team-pen-testing",
            title: "Red Team Penetration Testing",
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
