import React from 'react';

const ContactInfo = () => {
    return (
        <section className="bd-contact-info-area pt-120 pb-95">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="bd-contact-info-wrap mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                            <div className="bd-contact-info">
                                <div className="bd-contact-info-content">
                                    <div className="bd-contact-info-icon cat-1">
                                        <a href="tel:9072003462"><i className="flaticon-mobile-phone"></i></a>
                                    </div>
                                    <h6><a href="tel:9072003462">1-844-ABA-TALK</a></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="bd-contact-info-wrap mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                            <div className="bd-contact-info">
                                <div className="bd-contact-info-content">
                                    <div className="bd-contact-info-icon cat-2">
                                        <a href="#"><i className="flaticon-address"></i></a>
                                    </div>
                                    <h6><a href="#">The Austism Center 150 Bank Street, Attleboro, MA 02703</a></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="bd-contact-info-wrap mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                            <div className="bd-contact-info">
                                <div className="bd-contact-info-content">
                                    <div className="bd-contact-info-icon cat-3">
                                        <a href="mailto:info@nebehaviouralservices.com"><i className="flaticon-email"></i></a>
                                    </div>
                                    <h6><a href="mailto:info@nebehaviouralservices.com">info@nebehaviouralservices.com</a></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;