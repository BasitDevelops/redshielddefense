"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import NavMenu from "./nav-menu";
import useSticky from "../../hooks/use-sticky";
import Sidebar from "@/common/sidebar";
import Offcanvas from "@/common/offcanvas";
import Image from "next/image";
import img from "../../../public/assets/img/logo/logo.png";

const Header = ({ style }) => {
  const { sticky } = useSticky();
  const [isActive, setIsActive] = useState(false);
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);
  const offCanvasRef = useRef(null);

  const handleClickOutside = (event) => {
    if (offCanvasRef.current && !offCanvasRef.current.contains(event.target)) {
      setOffCanvasOpen(false);
    }
  };

  useEffect(() => {
    if (offCanvasOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [offCanvasOpen]);
  return (
    <>
      <header ref={offCanvasRef}>
        <div
          className={`menu-area transparent-header header-style-two " ${
            sticky
              ? "sticky-menu"
              : "" || style
              ? "header-shop-cart-active"
              : ""
          }`}
          id="sticky-header"
        >
          <div className="container custom-container">
            <div className="row">
              <div className="col-12 adjustnow">
                <div
                  onClick={() => setIsActive(true)}
                  className="mobile-nav-toggler"
                >
                  <i className="fas fa-bars"></i>
                </div>
                <div className="menu-wrap">
                  <nav className="menu-nav">
                    <div className="logo">
                      <Link href="/" className="logo-adjust">
                        <Image
                          src={img}
                          width={65}
                          height="auto"
                          alt="Logo"
                          layout="intrinsic"
                        />
                      </Link>
                    </div>
                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                      <NavMenu />
                    </div>
                    {style && (
                      <div className="header-shop-cart-active header-cart">
                        <Link href="/shop-details" className="mini-cart-link">
                          <Image
                            src="/assets/img/icons/cart.svg"
                            width={21}
                            height={20}
                            alt="icon"
                          />
                          <span className="mini-cart-count">Cart (0)</span>
                        </Link>
                      </div>
                    )}
                    <div className="offcanvas-btn">
                      <button
                        onClick={() => setOffCanvasOpen(true)}
                        className="btn-area"
                      >
                        <Image
                          src="/assets/img/icons/dots.png"
                          width={22}
                          height={14}
                          alt="Icon"
                        />
                      </button>
                    </div>
                  </nav>
                </div>
                <div className="menu-backdrop"></div>
                {/* End Mobile Menu  */}
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar isActive={isActive} setIsActive={setIsActive} />
      <Offcanvas
        offCanvasOpen={offCanvasOpen}
        setOffCanvasOpen={setOffCanvasOpen}
      />
    </>
  );
};

export default Header;
