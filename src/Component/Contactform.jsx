import React, { useRef, useState } from 'react';
import { Button } from 'react-scroll';
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const firstName_ref =  useRef();

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Validate form data
    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.message) newErrors.message = 'Message is required';
        return newErrors;
    };
    const sentEmail = (e) =>{
        if (formData.name === "") {
                Swal.fire({
                    title: "Error.",
                    text: "Name cannot be empty!",
                    icon: 'error',
                }).then(() => {
                    firstName_ref.current?.focus();
                })
                return;
            }
        else if (formData.email === "") {
                Swal.fire({
                    title: "Error.",
                    text: "Email cannot be empty!",
                    icon: 'error',
                });
                return;
            }
        else if (formData.message === "") {
                Swal.fire({
                    title: "Error.",
                    text: "Message cannot be empty!",
                    icon: 'error',
                });
                return;
            }

            // Using EmailJS to send the email
            const templateParams = {
                from_name: formData.name,
                user_mail: formData.email,
                to_name:"Shubham",
                message: formData.message,
            };

            emailjs.send(
                'service_3lv64y9', // Replace with your service ID
                'template_1hzkbza', // Replace with your template ID
                templateParams,
                'TsCG_N6MdJSCXZxAA'
                // Replace with your user ID from EmailJS
            )
                .then((response) => {
                    Swal.fire({
                        title: "Success!",
                        text: "Your response has been submitted.",
                        icon: 'success',
                    }).then(() => {
                        // setFirstName('');
                        // setemail('');
                        // setmessage('');
                        setFormData({ name: '', email: '', message: '' })
                    });
                }, (err) => {
                    Swal.fire({
                        title: "Error.",
                        text: "Something went wrong while sending your message.",
                        icon: 'error',
                    });
                });
    }

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setIsSubmitted(true);
            // Here you can add the logic to send the data, e.g., to an API
            console.log('Form data submitted:', formData);
        }
    };

    return (
        <div className="contact-form">
            <h2>Contact Us</h2>
            {isSubmitted ? (
                <>
                <p>Thank you for your message! We'll be in touch soon.</p>
                <Button>Return</Button>
                </>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            ref={firstName_ref}
                            onChange={handleChange}
                        />
                        {errors.name && <p className="error">{errors.name}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        {errors.message && <p className="error">{errors.message}</p>}
                    </div>

                        <Button className='button1' onClick={()=>{sentEmail()}} type="submit">Submit</Button>
                </form>
            )}
        </div>
    );
};

export default ContactForm;
