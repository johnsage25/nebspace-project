import React from 'react';
import Image from "next/image";
import aboutImg1 from "@assets/img/about/img1.jpg";
import line from "@assets/img/shape/tripple-line.png";
import Link from 'next/link';
import CountUpContent from '@components/common/counter';
import VideoModal from '@components/common/modals/modal-video';
import useModal from '@hooks/use-modal';

const fact_items = [
    {
        id: 1,
        count: '14',
        title: 'Years of',
        subTitle: 'experience',
        text: '+',
    },
    {
        id: 2,
        count: '7',
        title: 'Students',
        subTitle: 'each year',
        text: 'K+',
    },
    {
        id: 3,
        count: '15',
        title: 'Award',
        subTitle: 'Wining',
        text: '+',
    }
];

const SectionAbout = ({promoImg, promo_space}) => {

    const { isVideoOpen, setIsVideoOpen } = useModal();

    return (
        <>
            <section className={`bd-promotion-area pt-120 pb-60 ${promo_space ? promo_space : 'pb-60'}`} id="bd-promotion-area">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-xl-6 col-lg-6">
                            <div className="bd-promotion mb-60 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
                                <div className="bd-section-title-wrapper mb-35">
                                    <h2 className="bd-section-title mb-10">Quick feedback for speedier learning</h2>

                                    <p>
                                    Students can choose their incentives. Boom enables students to take ownership of their education.

                                    </p>
                                </div>
                                {/* {!promo_space && <div className="bd-promotion-counter-wrapper mb-40">
                                    {fact_items.map((item) => (
                                        <div className="bd-promotion-counter" key={item.id}>
                                            <CountUpContent number={item.count} add_style={false} text={item.text} />
                                            <div className="bd-promotion-counter-text">
                                                <span>{item.title}</span>
                                                <span>{item.subTitle}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>} */}
                                <div className="bd-promotion-list mb-50">
                                    <ul>
                                        <li>Gamified Student Player</li>
                                        <li>Real-Time Reports</li>
                                        <li>Student Accountability</li>
                                        <li>Custom Play Settings</li>
                                    </ul>
                                </div>
                                <div className="bd-promotion-btn-wrapper flex-wrap">
                                    <div className="bd-promotion-btn">
                                        <Link href="/programs" className="bd-btn">
                                            <span className="bd-btn-inner">
                                                <span className="bd-btn-normal">Apply now</span>
                                                <span className="bd-btn-hover">Apply now</span>
                                            </span>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="bd-promotion-thumb-wrapper mb-60 wow fadeInLeft" data-wow-duration="1s"
                                data-wow-delay=".2s">
                                <div className="bd-promotion-thumbs">
                                <Image src={aboutImg1} className='rounded' style={{ width: "100%", height: "100%" }} alt="img not found" />
                                        <div className="panel wow"></div>
                                </div>
                                <div className="bd-promotion-shape d-none d-lg-block">
                                    <Image className='rounded' src={line} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SectionAbout;