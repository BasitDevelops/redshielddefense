// "use client";
// import Link from "next/link.js";
// import { usePathname } from "next/navigation";
// import menu_data from "../../data/menu-data.js";

// const NavMenu = ({ num = false }) => {
//     const currentRoute = usePathname();
//     return (
//         <ul className=" navigation">
//             {menu_data.map((menu, index) => (
//                 <li key={index} className={menu.has_dropdown ? "menu-item-has-children" : ""}>
//                     <Link href={menu.link}
//                         className={`${currentRoute === menu.link ? "active" : ""}`}
//                     >
//                         {num && index <= 9
//                             ? `0${index + 1 + "."}`
//                             : num && index + 1 + "."}
//                         {menu.title}
//                     </Link>
//                     {menu.has_dropdown && (
//                         <>
//                             {menu.sub_menus && (
//                                 <ul className="sub-menu">
//                                     {menu.sub_menus.map((sub_m, i) => (
//                                         <li key={i}>
//                                             <Link
//                                                 href={sub_m.link}
//                                                 className={`${currentRoute === sub_m.link ? "active" : ""
//                                                     }`}
//                                             >
//                                                 {sub_m.title}
//                                             </Link>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             )}
//                         </>
//                     )}
//                 </li>
//             ))}
//         </ul>
//     );
// };

// export default NavMenu;

"use client";
import Link from "next/link.js";
import { usePathname } from "next/navigation";
import menu_data from "../../data/menu-data.js";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const NavMenu = ({ num = false }) => {
  const currentRoute = usePathname();

  const [activeSubMenu, setActiveSubMenu] = useState("va");

  const isMenuItemActive = (menuLink) => {
    return currentRoute === menuLink;
  };

  const isSubMenuItemActive = (subMenuLink) => {
    return currentRoute === subMenuLink;
  };

  const handleSubMenus = (value) => {
    setActiveSubMenu(value);
  };

  return (
    <ul className="navigation">
      {menu_data.map((menu) => (
        <li
          key={menu.id}
          className={menu.has_dropdown ? "menu-item-has-children" : ""}
        >
          <div className="custom-flex">
            <Link
              href={menu.link}
              className={
                isMenuItemActive(menu.link) ||
                (menu.sub_menus &&
                  menu.sub_menus.some(
                    (sub_m) => sub_m.link && isSubMenuItemActive(sub_m.link)
                  ))
                  ? "active"
                  : ""
              }
            >
              {num && menu.id <= 9 ? `0${menu.id}.` : num && `${menu.id}.`}
              {menu.title}
            </Link>
            {menu.has_dropdown && <FaAngleDown />}
          </div>

          {menu.has_dropdown && (
            <>
              {menu.sub_menus && (
                <div className="sub-menu-container">
                  <div className="sub-menu">
                    <ul>
                      {menu.sub_menus.map((sub_m, i) => (
                        <li
                          key={i}
                          onMouseOver={() => handleSubMenus(sub_m.id)}
                        >
                          <Link
                            href={sub_m.link}
                            key={i}
                            className={`${
                              currentRoute.includes(sub_m.link.split("/")[2]) &&
                              "active-sub-menu"
                            }`}
                          >
                            {sub_m.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="inner-sub-menu">
                    <ul>
                      {menu.sub_menus.map((sub_m, i) =>
                        sub_m?.sub_menus?.map((inner_sub_m, i) => {
                          if (inner_sub_m.id === activeSubMenu) {
                            return (
                              <li key={i}>
                                <Link
                                  href={inner_sub_m.link}
                                  className={`${
                                    inner_sub_m.link === currentRoute &&
                                    "active-sub-menu"
                                  }`}
                                >
                                  {inner_sub_m.title}
                                </Link>
                              </li>
                            );
                          }
                        })
                      )}
                    </ul>
                  </div>
                </div>
                // <ul className="sub-menu">
                //   {menu.sub_menus.map((sub_m, i) => (
                //     <li key={i}>
                //       <Link
                //         href={sub_m.link}
                //         className={
                //           sub_m.link && isSubMenuItemActive(sub_m.link)
                //             ? "active"
                //             : ""
                //         }
                //       >
                //         {sub_m.title}
                //       </Link>
                //       {/* {sub_m?.has_dropdown && <ul className="inner-sub-menu">
                //                                 {sub_m?.sub_menus?.map((sub_m, i) => (
                //                                     <li key={i}>
                //                                         <Link
                //                                             href={sub_m.link}
                //                                             className={
                //                                                 sub_m.link && isSubMenuItemActive(sub_m.link)
                //                                                     ? "active"
                //                                                     : ""
                //                                             }
                //                                         >
                //                                             {sub_m.title}
                //                                         </Link>

                //                                     </li>
                //                                 ))}
                //                             </ul>} */}
                //     </li>
                //   ))}
                // </ul>
              )}
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
