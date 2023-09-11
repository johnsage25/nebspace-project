import React from "react";
import Image from "next/image";
import promotion from "@assets/img/promotion/girl-teacher-supporting.jpg";
import line from "@assets/img/shape/tripple-line.png";

const AboutPromotion = () => {
  return (
    <section className="bd-promotion-area-2 pt-120 pb-60 fix">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div
              className="bd-promotion bd-promotion-2 mb-60 wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <div className="bd-section-title-wrapper mb-35">
                <h2 className="bd-section-title mb-10">Our Commitment</h2>

                <p>
                  At NEBS, we are committed to building a supportive environment
                  that encourages growth, celebrates milestones, and honors the
                  uniqueness of each individual we serve. Your journey is
                  important to us, and we are dedicated to walking alongside you
                  every step of the way.
                </p>
              </div>
              <div className="bd-promotion-list mb-50">
                <ul>
                  <li>Gamified Student Player</li>
                  <li>Real-Time Reports</li>
                  <li>Student Accountability</li>
                  <li>Custom Play Settings</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div
              className="bd-promotion-thumb-wrapper mb-60 wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <div className="bd-promotion-thumbs">
                <Image
                  src={promotion}
                  className="rounded"
                  style={{ width: "100%", height: "100%" }}
                  alt="img not found"
                />
              </div>
              <div className="bd-promotion-shape d-none d-lg-block">
                <Image
                  src={line}
                  style={{ width: "100%", height: "100%" }}
                  alt="img not found"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPromotion;
