import React from 'react';
import Image from "next/image";
import shape from "@assets/img/shape/wave-section-break.png";

const features = [
    {
        id: 1,
        title: 'Empowerment',
        teaser: 'Our objective is to empower individuals to take charge of their own lives.',
        iconStyle: 'icon-1',
        icon: 'flaticon-exclusive',
    },
    {
        id: 2,
        title: 'Inclusivity',
        teaser: 'We believe in a world where everyone belongs, regardless of their neurological differences.',
        iconStyle: 'icon-2',
        icon: 'flaticon-humanitarian-help',
    },
    {
        id: 3,
        title: 'Integrity',
        teaser: 'We operate on a foundation of ethical behavior, ensuring confidentiality, dignity, and respect for all.',
        iconStyle: 'icon-3',
        icon: 'flaticon-like-1',
    },
    {
        id: 4,
        title: 'Quality',
        teaser: 'We are committed to providing the highest standard of ABA therapy, based on the latest scientific research.',
        iconStyle: 'icon-4',
        icon: 'flaticon-delivery',
    },
    {
        id: 5,
        title: 'Partnership',
        teaser: 'We view therapy as a collaborative effort, involving a multidisciplinary team of therapists, parents, educators, and community members.',
        iconStyle: 'icon-4',
        icon: 'flaticon-delivery',
    }
]

const HomeThreeFeature = ({wave}) => {
    return (
        <div className="bd-feature-area p-relative theme-bg pt-120 pb-120">
            {wave &&
                <div className="bd-feature-bottom-shape">
                    <Image src={shape} style={{ width: "100%", height: "100%" }} alt="img not found" />
                </div>
            }
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        <div className="bd-section-title-wrapper is-white text-center mb-55 wow fadeInUp" data-wow-duration="1s"
                            data-wow-delay=".3s">
                            <h2 className="bd-section-title mb-0">Mission Statement</h2>
                            <p>
                            At NEBS, we are committed to unlocking the full potential of every individual with Autism. Through evidence-based Applied Behavior Analysis (ABA) therapy, we strive to empower our clients to live, work, socialize, and play in a way that is meaningful to them. We recognize that each individual is unique, and we tailor our therapeutic interventions to meet their specific needs, enabling them to engage confidently with the world around them. We are passionate about fostering growth, independence, and happiness, as we work hand-in-hand with families and communities to build a more inclusive tomorrow.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bd-feature-wrapper wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                    <div className="row">
                        <div className="col-12">
                            <ul className="feature">
                                {features.map((item) => (
                                    <li className="feature-item" key={item.id}>
                                        <div className="bd-feature">
                                            <div className="bd-feature-content">
                                                <div className={`bd-feature-icon ${item.iconStyle}`}>
                                                    <i className={item.icon}></i>
                                                </div>
                                                <h4 className="bd-feature-title">{item.title}</h4>
                                                <p>{item.teaser}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeThreeFeature;