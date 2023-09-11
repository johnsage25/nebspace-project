import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@assets/img/logo/logo.svg";
import MobileMenus from "./mobile-menus";

const OffCanvasMain = ({ isOffCanvasOpen, setIsOffCanvasOpen }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <div
        className={`offcanvas__area ${
          isOffCanvasOpen ? "offcanvas-opened" : ""
        }`}
      >
        <div className="offcanvas__bg"></div>
        <div className="offcanvas__wrapper">
          <div className="offcanvas__content">
            <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
              <div className="offcanvas__logo logo">
                <Link href="/">
                  <Image
                    src={logo}
                    style={{ width: "100%", height: "100%" }}
                    alt="img not found"
                  />
                </Link>
              </div>
              <div className="offcanvas__close">
                <button
                  className="offcanvas__close-btn"
                  type="button"
                  onClick={() => setIsOffCanvasOpen(false)}
                >
                  <i className="fa-thin fa-times"></i>
                </button>
              </div>
            </div>
            <div className="offcanvas__search mb-40">
              <form onSubmit={handleSubmit}>
                <button type="submit">
                  <i className="flaticon-search"></i>
                </button>
                <input type="text" placeholder="Search here" />
              </form>
            </div>
            <div className="mobile-menu fix mb-30 menu-counter d-lg-none mean-container">
              <div className="mean-bar">
                <MobileMenus />
              </div>
            </div>
            <div className="offcanvas__about d-none d-lg-block mb-30">
              <h4>About NEBS</h4>
              <p>
                We are passionate about fostering growth, independence, and
                happiness, as we work hand-in-hand with families and communities
                to build a more inclusive tomorrow.
              </p>
            </div>
            <div className="offcanvas__contact mb-30">
              <h4>Contact Info</h4>
              <ul>
                <li className="d-flex align-items-center gap-2">
                  <div className="offcanvas__contact-icon">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.google.com/maps/place/150+Bank+St,+Attleboro,+MA+02703,+USA/@41.9499389,-71.2872374,17z/data=!3m1!4b1!4m6!3m5!1s0x89e460b506376829:0x41f9503eb164b4b4!8m2!3d41.9499389!4d-71.2846625!16s%2Fg%2F11cpn43tnw?entry=ttu"
                    >
                      <i className="fal fa-map-marker-alt"></i>
                    </a>
                  </div>
                  <div className="offcanvas__contact-text">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.google.com/maps/place/150+Bank+St,+Attleboro,+MA+02703,+USA/@41.9499389,-71.2872374,17z/data=!3m1!4b1!4m6!3m5!1s0x89e460b506376829:0x41f9503eb164b4b4!8m2!3d41.9499389!4d-71.2846625!16s%2Fg%2F11cpn43tnw?entry=ttu"
                    >
                      The Austism Center 150 Bank Street, Attleboro, MA
                      02703
                    </a>
                  </div>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <div className="offcanvas__contact-icon">
                    <a href="tel:1-844-ABA-TALK">
                      <i className="far fa-phone"></i>
                    </a>
                  </div>
                  <div className="offcanvas__contact-text">
                    <a href="tel:1-844-ABA-TALK">1-844-ABA-TALK</a>
                  </div>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <div className="offcanvas__contact-icon">
                    <a href="mailto:info@nebehaviouralservices.com">
                      <i className="fal fa-envelope"></i>
                    </a>
                  </div>
                  <div className="offcanvas__contact-text">
                    <a href="mailto:info@nebehaviouralservices.com">
                      info@nebehaviouralservices.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="offcanvas__social">
              <ul>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/"
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.youtube.com/"
                  >
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`body-overlay ${isOffCanvasOpen ? "opened" : ""}`}
        onClick={() => setIsOffCanvasOpen(false)}
      ></div>
    </React.Fragment>
  );
};

export default OffCanvasMain;
