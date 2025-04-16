import Image from "next/image";
import Link from "next/link";

const OffCanvas = ({ offCanvasOpen, setOffCanvasOpen }) => {
  return (
    <div className={` ${offCanvasOpen ? "offcanvas-menu-visible" : ""}`}>
      <div className="offCanvas-wrap">
        <div
          onClick={() => setOffCanvasOpen(false)}
          className="offCanvas-toggle"
        >
          <Image
            src="/assets/img/icons/cross.svg"
            width={18}
            height={18}
            alt="icon"
          />
        </div>
        <div className="offCanvas-body">
          <div className="offCanvas-content">
            <h3 className="title">
              Ensure <span>top-tier</span> digital security—your{" "}
              <span>safety</span> starts here.
            </h3>
            <p>
              Digital security is vital for businesses and individuals alike.
              Protecting data and assets ensures privacy, trust, and resilience
              against cyber threats.
            </p>
          </div>
          <div className="offcanvas-contact footer-contact-info">
            <h4 className="number">+358 44 5040308</h4>
            <h4 className="email">contact@redshielddefense.com</h4>
            <p>
              3828 Delmas Terrace, Culver City, <br /> CA, United States
            </p>
            <ul className="footer-social list-wrap">
              <li>
                <Link href="#">
                  <i className="fab fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fab fa-instagram"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="offCanvas-overlay"></div>
    </div>
  );
};

export default OffCanvas;
