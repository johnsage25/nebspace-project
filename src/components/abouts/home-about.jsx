import React from "react";
import faqImg from "@assets/img/faq/1.jpg";
import aboutImg1 from "@assets/img/about/img1.jpg";
import trippleLine from "@assets/img/shape/tripple-line.png";
import Image from "next/image";

const HomeAbout = () => {
  return (
    <>
      <section className="bd-faq-area pt-120 pb-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="bd-faq-content mb-60">
                <div
                  className="bd-section-title-wrapper mb-25 wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay=".3s"
                >
                  <h2 className="bd-section-title mb-10">Our Commitment</h2>

                  <p>
                    A fantastic selection of pre-made exercises for
                    asynchronous, gifted, special needs, and ABA learners, as
                    well as special education students.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div
                className="bd-faq-thumb-wrapper mb-70 wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <div className="bd-faq-thumbs">
                  <Image
                    src={aboutImg1}
                    style={{ width: "100%", height: "100%" }}
                    className="rounded"
                    alt="Section 3"
                  />
                </div>
                <div className="bd-faq-shape d-none p-relative d-lg-block">
                  <Image
                    src={trippleLine}
                    style={{ width: "100%", height: "100%" }}
                    alt="shape not found"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAbout;
