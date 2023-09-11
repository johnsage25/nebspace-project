import React from 'react';
import Image from "next/image";
import promotion from "@assets/img/promotion/image-teacher-child.jpg";
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

const HomePromotion = ({promoImg, promo_space}) => {

    const { isVideoOpen, setIsVideoOpen } = useModal();

    return (
        <>
            <section className={`bd-promotion-area ${promo_space ? promo_space : 'pb-60'}`} id="bd-promotion-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="bd-promotion-thumb-wrapper mb-60 wow fadeInLeft" data-wow-duration="1s"
                                data-wow-delay=".2s">
                                <div className="bd-promotion-thumbs">
                                <Image src={promotion} className='rounded' style={{ width: "100%", height: "100%" }} alt="img not found" />
                                        <div className="panel wow"></div>
                                </div>
                                <div className="bd-promotion-shape d-none d-lg-block">
                                    <Image className='rounded' src={line} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="bd-promotion mb-60 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
                                <div className="bd-section-title-wrapper mb-35">
                                    <h2 className="bd-section-title mb-10">Excellent for Homeschooling</h2>

                                    <p>
                                    A fantastic selection of pre-made exercises for asynchronous, gifted, special needs, and ABA learners, as well as special education students.
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
                                        <li>Easy Report Sharing</li>
                                        <li>Personalized Activities</li>
                                        <li>Non-Punitive Feedback</li>
                                        <li>Create Custom Games</li>
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
                                    <div className="bd-promotion-btn-2 bd-pulse-btn btn-2">
                                        <button type='button' className="popup-video" onClick={() => setIsVideoOpen(true)}><i className="flaticon-play-button"></i>Intro video</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* video modal start */}
            <VideoModal
                isVideoOpen={isVideoOpen}
                setIsVideoOpen={setIsVideoOpen}
                videoId={"go7QYaQR494"}
            />
            {/* video modal end */}
        </>
    );
};

export default HomePromotion;