import React, { useState } from 'react';

import { myPortfolio } from '../../utils/data';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import CustomImg from '../CustomImg';
import { AWS_CONTACT_API_V1 } from '../../utils/Constant';


const Contact = () => {
    const contactIllus = { "alt": "email campaign", "imageName": "ills/emailp.png", "className": "img-portfolio", "desc": "email-campaign-amico" };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [formMessage, setFormMessage] = useState({
        warning: '',
        success: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        setFormErrors({
            ...formErrors,
            [e.target.name]: '', // Clear the error when the user starts typing
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormMessage({
            warning: '',
            success: '',
        });

        // Validate the form fields
        const newFormErrors = {};
        Object.keys(formData).forEach((key) => {
            if (!formData[key]) {
                newFormErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required.`;
            }
        });
        if (Object.keys(newFormErrors).length > 0) {
            setFormErrors(newFormErrors);
            return;
        }

        try {
            const response = await fetch(AWS_CONTACT_API_V1, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormMessage({
                    warning: '',
                    success: 'Your message was sent, thank you!',
                });
            } else {
                setFormMessage({
                    warning: 'Error sending the message. Please try again later.',
                    success: '',
                });
            }
        } catch (error) {
            console.error('Error:', error);
            setFormMessage({
                warning: 'An unexpected error occurred. Please try again later.',
                success: '',
            });
        }
    };

    return (
        <div>
            <section className="" id="contact">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Drop us a message!</h2>
                            {/* <h3 className="section-subheading text-muted">Imagination is more important than knowledge.</h3> */}
                        </div>
                    </div>

                    <div className="content mt-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-10">
                                    <div className="row justify-content-center">
                                        <div className="col-md-6">
                                            <CustomImg image={contactIllus} />
                                        </div>

                                        <div className="col-md-6">
                                            <form className="mb-2" method="post" id="contactForm" name="contactForm" noValidate="novalidate" onSubmit={handleSubmit}>
                                                {Object.keys(formData).map((field) => (
                                                    field != 'message' ?
                                                        <div key={field} className="row">
                                                            <div className="col-md-12 form-group">
                                                            {/* <label for={field} className="label">{field.toUpperCase()} </label> */}
                                                                <input
                                                                    type="text"
                                                                    className={`form-control ${formErrors[field] ? 'is-invalid' : ''}`}
                                                                    name={field}
                                                                    id={field}
                                                                    placeholder={`Your ${field}`}
                                                                    value={formData[field]}
                                                                    onChange={handleChange}
                                                                    required
                                                                />
                                                                {formErrors[field] && <div className="invalid-feedback">{formErrors[field]}</div>}
                                                            </div>
                                                        </div>
                                                        :
                                                        <div key={field} className="row">
                                                            <div className="col-md-12 form-group">
                                                                <textarea
                                                                    className={`form-control ${formErrors[field] ? 'is-invalid' : ''}`}
                                                                    name={field}
                                                                    id={field}
                                                                    placeholder={`Your ${field}`}
                                                                    cols="30"
                                                                    rows="7"
                                                                    value={formData.message}
                                                                    onChange={handleChange}
                                                                    required
                                                                ></textarea>
                                                                {formErrors[field] && <div className="invalid-feedback">{formErrors[field]}</div>}
                                                            </div>
                                                        </div>
                                                ))}
                                                <div className="row">
                                                    <div className="col-12">
                                                        <input type="submit" value="Send Message" className="btn btn-primary rounded-0 py-2 px-4" />
                                                        <span className="submitting"></span>
                                                    </div>
                                                </div>
                                            </form>
                                            {formMessage.warning && <div className="text-danger" id="form-message-warning">{formMessage.warning}</div>}
                                            {formMessage.success && <div className="text-success" id="form-message-success">{formMessage.success}</div>}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );

};

export default Contact;

