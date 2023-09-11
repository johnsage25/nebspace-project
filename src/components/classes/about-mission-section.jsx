import React from "react";
import { Scrollbar, A11y, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import class_data from "@data/class-data";
import Image from "next/image";
import Link from "next/link";
import about_class_data from "@data/about-mission";

const AboutMissionSection = () => {
  return (
    <section className="bd-feature-area p-relative theme-bg pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className="bd-section-title-wrapper text-center mb-55 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".2s"
            >
              <h2 className="bd-section-title mb-0">Mission Statement</h2>
              <p>
                At NEBS, we are committed to unlocking the full potential of
                every individual with Autism. Through evidence-based Applied
                Behavior Analysis (ABA) therapy, we strive to empower our
                clients to live, work, socialize, and play in a way that is
                meaningful to them. We recognize that each individual is unique,
                and we tailor our therapeutic interventions to meet their
                specific needs, enabling them to engage confidently with the
                world around them. We are passionate about fostering growth,
                independence, and happiness, as we work hand-in-hand with
                families and communities to build a more inclusive tomorrow.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div
              className="bd-class-active wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".4s"
            >
              <div>
                <Swiper
                  modules={[Scrollbar, A11y, Autoplay, Pagination]}
                  spaceBetween={24}
                  autoplaydisableoninteraction={"false"}
                  loop={false}
                  observeParents={true}
                  observer={true}
                  speed={1000}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                  }}
                  pagination={{
                    clickable: true,
                    el: ".bd-class-pagination",
                  }}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 2,
                    },
                    1200: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  {about_class_data.slice(0, 10).map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className="bd-class-wrapper text-center">
                          <div className="bd-class-bg">
                            <Image
                              src={item.shape}
                              style={{ width: "100%", height: "100%" }}
                              alt="img not found"
                            />
                          </div>
                          <div className="bd-class">
                            <div className="bd-class-icon">
                              <i className={item.icon}></i>
                            </div>
                            <div className="bd-class-content">
                              <h3 className="bd-class-title">
                                <Link href={`/class-details/${item.id}`}>
                                  {item.title}
                                </Link>
                              </h3>
                              <p>{item.teaser}</p>

                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
            <div className="bd-class-pagination bd-dots-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionSection;
