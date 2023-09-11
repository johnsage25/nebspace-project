import ContactForm from '@components/forms/contact-form';
import React from 'react';

const ContactFormMain = () => {
    return (
        <section className="bd-contact-area pb-60">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 mb-60">
                        <div className="bd-contact-form wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s">
                            <h3 className="bd-contact-form-title mb-25">Contact Us Right Here</h3>
                            <ContactForm />
                        </div>
                    </div>
                    <div className="col-xl-6 mb-60">
                        <div className="bd-contact-map wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.344316701838!2d-71.28723742420432!3d41.94993887123403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e460b506376829%3A0x41f9503eb164b4b4!2s150%20Bank%20St%2C%20Attleboro%2C%20MA%2002703%2C%20USA!5e0!3m2!1sen!2sng!4v1694376404594!5m2!1sen!2sng"
                                 loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFormMain;