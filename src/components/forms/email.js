// EmailForm.js

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const EmailForm = () => {
    const [toName, setToName] = useState('');
    const [fromName, setFromName] = useState('');
    const [message, setMessage] = useState('');
    const [fromMail, setFromMail] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        const emailData = {
            to_name: toName,
            from_name: fromName,
            message: message,
            from_mail: fromMail,
        };

        emailjs.send(
            'service_4izjuyk', // Your service ID
            'template_ba8zvec', // Your template ID
            emailData,
            'user_your_user_id' // Your user ID
        )
            .then((response) => {
                console.log('Email sent successfully:', response);
            })
            .catch((error) => {
                console.error('Email failed to send:', error);
            });
    };

    return (
        <>

            <div className="mail-input-area">
                <input type="text" placeholder="Name" />
            </div>
            <div className="mail-input-area">
                <input type="email" placeholder="example@mail.com" />
            </div>
            <div className="mail-input-area">
                <textarea className="mail-long-text-area"  placeholder="At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.">
                </textarea>
            </div>

            <div className="mail-send-button" href="#">
                SEND
                <span />
            </div>
        </>
    );
};

export default EmailForm;
