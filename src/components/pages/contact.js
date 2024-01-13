import React from 'react';
import '../../assets/Contact.css';
import Navbar from '../navbar/navbar';

const Contact = () => {
    return (
        <>
            <Navbar title={"Contact Me"} />
            <div className="contact-container">
                <div className='personal-info-container'>
                    <div className="personal-info-part part-with-img">


                    </div>
                    <div className='personal-info-part-vertical-separator' />
                    <div className="personal-info-part">
                        <div className="personal-info-title">
                            Contact Info
                        </div>
                        <div className='personal-info-part-horizontal-separator' />
                        <div className="personal-info-textarea">
                            <div className='personal-info'>
                                Name: Elifnur
                            </div>
                            <div className='personal-info'>
                                Surname: Demir
                            </div>
                            <div className='personal-info'>
                                Phone Number: +90 (551) 162 78 95

                            </div>
                            <div className='personal-info'>
                                E-Posta: elifnurdemir@outlook.com.tr
                            </div>
                            <div className='personal-info'>

                                Adress: Kocaeli/Turkey

                            </div>
                        </div>


                    </div>

                </div>

            </div>
        </>
    );
}

export default Contact;
