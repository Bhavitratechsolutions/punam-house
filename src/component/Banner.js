

// 'use client'; // Ensure this line is at the top

// import '/public/css/custom-client.css';


// import Image from 'next/image';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import './style.css'


// interface BannerData {
//     heading: string;
//     description: string;
//     banner_img: String,
// }


// interface FlashApi {
//     heading: string;
//     description: string;
//     banner_img: String,
// }

// export default function Banner() {

//     const [bannerData, setBannerData] = useState<BannerData>({
//         heading: '',
//         description: '',
//         banner_img: '',
//     });

//     const [flashMessage, setFlashMessage] = useState<FlashApi[]>([]);

//     useEffect(() => {
//         getBanner();
//         getBanners()
//     }, []);

//     const getBanner = async () => {
//         try {
//             const response = await axios.get(`/api/banner/${'2'}`);
//             setBannerData(response.data);
//         } catch (error) {
//             console.error('Error fetching banner data:', error);
//         }
//     };

//     const getBanners = async () => {
//         try {
//             const response = await axios.get(`/api/flash`);
//             // console.log('flash is =========>',response.data)
//             setFlashMessage(response.data);
//         } catch (error) {
//             console.error('Error fetching banner data:', error);
//         }
//     };




//     return (
//         <>



//             <section className="banner position-relative">
//                 <div className="banner-overlay position-relative h-100">
//                     <Image
//                         className="w-100 h-100"
//                         src={typeof bannerData?.banner_img === 'string' ? bannerData.banner_img : '/img/Construction-for-New-Gas-insulated-Substation-Underway-in-Riyadhs-Diriyah-Gate-scaled 1.png'}
//                         alt=""
//                         width={500}
//                         height={500}
//                         loading="lazy" // Lazy loading for better performance
//                         priority={false}
//                     />
//                 </div>
//                 <div className="container position-absolute start-50 top-50 translate-middle z-2">
//                     <div className="row align-items-center">
//                         <div className="col-12 col-md-5">
//                             <div className="caption">
//                                 <h1
//                                     className="text-white mb-4 heading"
//                                     data-aos="fade-up"
//                                     data-aos-duration="1500"
//                                     data-aos-delay="200"
//                                 >
//                                     {bannerData?.heading}
//                                 </h1>
//                                 <p
//                                     className="text-white mb-5"
//                                     data-aos="fade-up"
//                                     data-aos-duration="1500"
//                                     data-aos-delay="400"
//                                 >
//                                     {bannerData?.description}
//                                 </p>
//                                 <a
//                                     className="btn btn-outline-light px-4 py-2 rounded-5"
//                                     href="#"
//                                     data-aos="fade-up"
//                                     data-aos-duration="1500"
//                                     data-aos-delay="700"
//                                 >
//                                     See more
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section className="bg-body-secondary">
//                 <div className="container">
//                     <div className="flash-news-box px-4 py-3 rounded-2 shadow">
//                         <div className="row align-items-center">
//                             <div className="col-md-2 mb-4 mb-md-0">
//                                 <div className="w-100 text-center">
//                                     <span className="px-4 py-2 bg-white d-inline-block">Flash News</span>
//                                 </div>
//                             </div>
//                             <div className="col-md-10">
//                                 <div>

//                                 <p className="scroll-text mb-0">
//                                 {flashMessage[0]?.description}
//                                     </p>
//                                     {/* <marquee className="py-3" behavior="scroll" direction="left">
//                                         <p className="mb-0">
//                                             {flashMessage[0]?.description}
//                                         </p>
//                                     </marquee> */}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* <section className="bg-body-secondary">
//                 <div className="container">
//                     <div className="flash-news-box px-4 py-3 rounded-2 shadow">
//                         <div className="row align-items-center">
//                             <div className="col-md-2 mb-4 mb-md-0">
//                                 <div className="w-100 text-center">
//                                     <span className="px-4 py-2 bg-white d-inline-block">Flash News</span>
//                                 </div>
//                             </div>
//                             <div className="col-md-10">
//                                 <div className="scroll-wrapper py-3">
//                                     <p className="scroll-text mb-0">
//                                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is si
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section> */}



//         </>
//     );
// }





'use client'; // Ensure this line is at the top

import '/public/css/custom-client.css';


import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';




export default function Banner() {

    const [bannerData, setBannerData] = useState({
        heading: '',
        description: '',
        banner_img: '',
    });

    const [flashMessage, setFlashMessage] = useState([]);

    useEffect(() => {
        getBanner();
        getBanners()
    }, []);

    const getBanner = async () => {
        try {
            const response = await axios.get(`/api/banner/${'2'}`);
            setBannerData(response.data);
        } catch (error) {
            console.error('Error fetching banner data:', error);
        }
    };

    const getBanners = async () => {
        try {
            const response = await axios.get(`/api/flash`);
            // console.log('flash is =========>',response.data)
            setFlashMessage(response.data);
        } catch (error) {
            console.error('Error fetching banner data:', error);
        }
    };




    return (
        <>


            {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper> */}

            <section className="banner position-relative">
                {/* <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={false}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Navigation, Pagination, Autoplay]}
                    className="mySwiper"
                > */}
                    <div className="banner-overlay position-relative h-100">

                        <Image
                            className="w-100 h-100"
                            src={typeof bannerData?.banner_img === 'string' ? bannerData.banner_img : '/img/Construction-for-New-Gas-insulated-Substation-Underway-in-Riyadhs-Diriyah-Gate-scaled 1.png'}
                            alt=""
                            width={500}
                            height={500}
                            loading="lazy" // Lazy loading for better performance
                            priority={false}
                        />
                    </div>
                    <div className="container position-absolute start-50 top-50 translate-middle z-2">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-5">
                                <div className="caption">
                                    <h1
                                        className="text-white mb-4 heading"
                                        data-aos="fade-up"
                                        data-aos-duration="1500"
                                        data-aos-delay="200"
                                    >
                                        {bannerData?.heading}
                                    </h1>
                                    <p
                                        className="text-white mb-5"
                                        data-aos="fade-up"
                                        data-aos-duration="1500"
                                        data-aos-delay="400"
                                    >
                                        {bannerData?.description}
                                    </p>
                                    <a
                                        className="btn btn-outline-light px-4 py-2 rounded-5"
                                        href="#"
                                        data-aos="fade-up"
                                        data-aos-duration="1500"
                                        data-aos-delay="700"
                                    >
                                        See more
                                    </a>
                                </div>
                            </div>
                        </div>


                    </div>
                {/* </Swiper> */}
            </section>





            <section class="bg-body-secondary">
                <div class="container">
                    <div class="flash-news-box px-4 py-3 rounded-2 shadow">
                        <div class="row align-items-center">
                            <div class="col-md-2 mb-4 mb-md-0">
                                <div class="w-100 text-center">
                                    <span class="text-center px-4 py-2 bg-white">Flash News</span>
                                </div>
                            </div>
                            <div class="col-md-10">
                                <div class="">
                                    <marquee class="py-3" behavior="scroll" direction="left">
                                        <p class="mb-0">{flashMessage[0]?.description}</p>
                                    </marquee>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    );
}

