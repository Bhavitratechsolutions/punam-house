'use client'

import ClientLayCout from "@/component/ClientLayout";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






interface FooterData {
    infoKey: String,
    infoValue: String,
}


const ContactUs = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNo, setPhoneNo] = useState("")
    const [description, setDescription] = useState("")
    const [footerData, setFooterData] = useState<FooterData[]>([]);

    useEffect(() => {
        getApiData()
    }, []);

    const getApiData = async () => {
        let response = await axios.get('/api/web-info');
        setFooterData(response.data)

    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (firstName == "") return toast.error("firstName is require");
        if (lastName == "") return toast.error("lastName is require");
        if (email == "") return toast.error("email is require");
        if (phoneNo == "") return toast.error("phoneNo is require");
        if (description == "") return toast.error("Description is require");


        try {

            const formData = {
                firstName,
                lastName,
                email,
                phoneNo,
                description
            }

            const response = await axios.post('/api/contact-us', formData);

            if (response.data.success === false) {
                toast.error(response.data.message, {
                    position: "top-center",
                });

            } else {
                toast.success(response.data.message, {
                    position: "top-center",
                });
                setFirstName('');
                setLastName('');
                setEmail('');
                setPhoneNo('');
                setDescription('');

            }

        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                // Use API error response if available
                const errorMessage = error.response.data.message || 'Error fetching record';
                toast.error(`Error: ${errorMessage}`, {
                    position: "top-center",
                });
            } else {
                toast.error('Error fetching record', {
                    position: "top-center",
                });
            }
        }
    };


    const contactEmail = footerData[0]?.infoValue || '';
    const footerNum = footerData[1]?.infoValue || '';
    const footerPhoneNo = footerData[2]?.infoValue || '';
    const footerAddress = footerData[3]?.infoValue || '';



    return (
        <>
            <ToastContainer />
            <ClientLayCout>
                <main className="overflow-hidden">

                    <section
                        className="py-5 breadcrumb-section"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(3, 112, 192, 0.8),rgba(3, 112, 192, 0.8)), url('img/electrical-engineering 1.png')",
                            backgroundSize: "100% 100%",
                        }}
                    >
                        <div className="container py-md-5">
                            <h1 className="text-white text-center fw-bold my-md-5 mb-0">CONTACT US</h1>
                        </div>
                    </section>

                    <section className="py-5">
                        <div className="container">
                            <div className="row justify-content-center mb-5">
                                <div className="col-md-5">
                                    <div className="text-center">
                                        <h2>
                                            Have questions? <br /> Get in touch!
                                        </h2>
                                        <p>
                                            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                <div className="col">
                                    <h5>Email Support</h5>
                                    <div className="d-flex align-items-center">
                                        <span className="me-2">
                                            <i className="fa-regular fa-envelope"></i>
                                        </span>
                                        <a href="mailto:abc@gmail.com" style={{ textDecoration: 'none' }} > {contactEmail} </a>
                                    </div>
                                </div>
                                <div className="col">
                                    <h5>Visit Our Office</h5>
                                    <div className="d-flex align-items-center">
                                        <span className="me-3">
                                            <i className="fa-solid fa-location-dot"></i>
                                        </span>
                                        <a href="#" style={{ textDecoration: 'none' }}> {footerAddress}</a>
                                    </div>
                                </div>
                                <div className="col">
                                    <h5>Call Us Directly</h5>
                                    <div className="d-flex align-items-center">
                                        <span className="me-3">
                                            <i className="fa-solid fa-phone"></i>
                                        </span>
                                        <a href="#" style={{ textDecoration: 'none' }}> {footerNum} / {footerPhoneNo} </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5 mb-4 mb-md-0">
                                    <div className="h-100">
                                        <img className="img-fluid h-100" src="img/pexels-yankrukov-8867258 1.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="border-start ps-md-4 ps-2">
                                        <h3>Let's Get In Touch...</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        <div>
                                            <form onSubmit={handleSubmit}>
                                                <div className="row mb-4">
                                                    <div className="col-12">
                                                        <label className="form-label">Name</label>
                                                        <div className="row">
                                                            <div className="col-md-6 mb-3 mb-md-0">
                                                                <div className="input-group mb-3 border-bottom">
                                                                    <span className="input-group-text border-0 bg-transparent">
                                                                        <i className="fa-solid fa-user"></i>
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control shadow-none border-0"
                                                                        placeholder="Enter your first name..."
                                                                        value={firstName}
                                                                        onChange={(e) => setFirstName(e.target.value)}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="input-group mb-3 border-bottom">
                                                                    <span className="input-group-text border-0 bg-transparent">
                                                                        <i className="fa-solid fa-user"></i>
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control shadow-none border-0"
                                                                        placeholder="Enter your last name..."
                                                                        value={lastName}
                                                                        onChange={(e) => setLastName(e.target.value)}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row mb-4">
                                                    <div className="col-12">
                                                        <label className="form-label">Email Address</label>
                                                        <div className="input-group mb-3 border-bottom">
                                                            <span className="input-group-text border-0 bg-transparent">
                                                                <i className="fa-solid fa-envelope"></i>
                                                            </span>
                                                            <input
                                                                type="text"
                                                                className="form-control shadow-none border-0"
                                                                placeholder="Enter your email address..."
                                                                value={email}
                                                                onChange={(e) => setEmail(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row mb-4">
                                                    <div className="col-12">
                                                        <label className="form-label">Phone Number</label>
                                                        <div className="input-group mb-3 border-bottom">
                                                            <span className="input-group-text border-0 bg-transparent">
                                                                <i className="fa-solid fa-phone"></i>
                                                            </span>
                                                            <input
                                                                type="text"
                                                                className="form-control shadow-none border-0"
                                                                placeholder="+91 0000000000"
                                                                value={phoneNo}
                                                                onChange={(e) => setPhoneNo(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row mb-4">
                                                    <div className="col-12">
                                                        <label className="form-label">Message</label>
                                                        <textarea
                                                            className="form-control shadow-none"
                                                            placeholder="Enter your message..."
                                                            rows={6}
                                                            value={description}
                                                            onChange={(e) => setDescription(e.target.value)}
                                                        ></textarea>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-12">
                                                        <button className="btn btn-primary w-100 py-2" type="submit">
                                                            Submit
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="py-5">
                        <div className="container">



                            <iframe
                                className="w-100"

                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14738.770985442463!2d88.3802056!3d22.5531797!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277b50996c415%3A0xb35e5e42a12a5602!2sPoonam&#39;s%20house!5e0!3m2!1sen!2sin!4v1728990752346!5m2!1sen!2sin"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </section>
                </main>
            </ClientLayCout>



        </>
    )
}

export default ContactUs;

// "use client"
// import type { Metadata } from 'next'
// import { useState } from 'react';

// export const metadata: Metadata = {
//     title: 'sanjay',
//     description: 'web developer',
//   }

// const ContactUs = () => {

//     const [lastName, setLastName] = useState("")
//   return (
//     <>
      
//       <h1>Hi Sanjay</h1>
//     </>
//   );
// };

// export default ContactUs;

