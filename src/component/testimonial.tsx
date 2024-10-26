// 'use client'
// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';



// interface ApiData {
//     _id: string;
//     fullName: String,
//     title: String,
//     description: string;

// }

// // import required modules
// import { Navigation, Pagination } from 'swiper/modules';
// import axios from "axios";

// const Testimonial = () => {

//     const [apiData, setApiData] = useState<ApiData[]>([])

//     useEffect(() => {
//         getApiData()
//     }, []);

//     const getApiData = async () => {
//         const response = await axios.get('/api/testimonial');
//         setApiData(response.data)

//     }

//     return (
//         <>

//             <section className="py-5 testimonial-section" style={{ backgroundImage: "url('img/14206957_SL_030919_18910_42 [Converted] 1.png')" }}>
//                 <div className="container">
//                     <div className="row justify-content-center mb-2">
//                         <div className="col-md-6">
//                             <div className="text-center">
//                                 <h3 className="text-color-1">Trusted by Thousands of Happy Customer</h3>
//                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="swiper-container">
//                         <Swiper
//                             slidesPerView={1}
//                             spaceBetween={10}
//                             pagination={{
//                                 clickable: true,
//                             }}
//                             navigation={true}
//                             breakpoints={{
//                                 '@0.00': {
//                                     slidesPerView: 1,
//                                     spaceBetween: 10,
//                                 },
//                                 '@0.75': {
//                                     slidesPerView: 2,
//                                     spaceBetween: 20,
//                                 },
//                                 '@1.00': {
//                                     slidesPerView: 3,
//                                     spaceBetween: 40,
//                                 },
//                                 '@1.50': {
//                                     slidesPerView: 3,
//                                     spaceBetween: 50,
//                                 },
//                             }}
//                             modules={[Navigation, Pagination]}
//                             className="mySwiper"
//                         >


//                             {apiData && apiData.map((item, i) => {
//                                 return (
//                                     <>
//                                         <SwiperSlide key={i}>
//                                             <div className="card testimonial-card bg-body-secondary border-0 rounded-3">
//                                                 <div className="card-body">
//                                                     <div className="d-flex align-items-center mb-3">
//                                                         <span className="icon bg-white rounded-circle me-3"></span>
//                                                         <div>
//                                                             <span className="fw-medium">{item.fullName}</span><br />
//                                                             <span style={{ marginTop: "4px" }}>{item.title}</span>
//                                                         </div>
//                                                     </div>
//                                                     <div>
//                                                         <p>
//                                                             {item.description}
//                                                         </p>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </SwiperSlide>
//                                     </>
//                                 )
//                             })}
//                         </Swiper>
//                     </div>

//                 </div>
//             </section>
//         </>
//     )
// }

// export default Testimonial;


'use client'; // Keep this if you're using Next.js

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Define the ApiData interface
interface ApiData {
    _id: string;
    fullName: string;  // Changed to lowercase 'string'
    title: string;     // Changed to lowercase 'string'
    description: string;
}

// Import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import axios from "axios";

interface Props{
    testoHeading:String,
    testoDesc:String,
}

const Testimonial = ({testoHeading,testoDesc}:Props) => {
    const [apiData, setApiData] = useState<ApiData[]>([]);

    useEffect(() => {
        getApiData();
    }, []);

    const getApiData = async () => {
        try {
            const response = await axios.get('/api/testimonial');
            setApiData(response.data);
        } catch (error) {
            console.error("Error fetching testimonial data:", error);
            // Handle error (optional)
        }
    };

    return (
        <section className="py-5 testimonial-section" style={{ backgroundImage: "url('img/14206957_SL_030919_18910_42 [Converted] 1.png')" }}>
            <div className="container">
                <div className="row justify-content-center mb-2">
                    <div className="col-md-6">
                        <div className="text-center">
                            <h3 className="text-color-1"> {testoHeading} </h3>
                            <p> {testoDesc} </p>
                        </div>
                    </div>
                </div>


                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={false}
                    navigation={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}

                    breakpoints={{
                        '@0.00': {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        '@0.75': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        '@1.00': {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        '@1.50': {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Navigation, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <div className="swiper-container">
                        {apiData && apiData.map((item, i) => (
                            <SwiperSlide key={i}>
                                <div className="card testimonial-card bg-body-secondary border-0 rounded-3">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center mb-3">
                                            <span className="icon bg-white rounded-circle me-3"></span>
                                            <div>
                                                <span className="fw-medium">{item.fullName}</span><br />
                                                <span style={{ marginTop: "4px" }}>{item.title}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <p>
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>


            </div>
        </section>
    );
};

export default Testimonial;
