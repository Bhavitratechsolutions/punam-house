'use client'
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'

import { Autoplay, Navigation, Pagination, } from 'swiper/modules';
import axios from "axios";


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface SlugProps {
    slug: string;
}


interface DataList {
    _id: string;
    title: String,
    slider_img: string;
}




const CompanySlider = ({ slug }: SlugProps) => {


    const [dataList, setDataList] = useState<DataList[]>([]);

    useEffect(() => {
        getDataList();
    }, []);

    const getDataList = async () => {
        try {
            const response = await axios.get(`/api/company-slider/slug/${slug}`);

            if (response.data) {

                setDataList(response.data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);

        }
    }


    return (
        <>

            <section className="py-5 home-slider-section" style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 102, 181, 0.5), rgba(0, 102, 181, 0.5)), url('img/iz 1.png')`
            }}>

                <div className="container">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        pagination={false}
                        navigation={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                        modules={[Navigation, Pagination,Autoplay]}
                        className="mySwiper"
                    >

                        <div className="swiper-container position-relative" data-loop data-gap="30" data-slider-cols="base-1 xl-2 lg-2 md-2 sm-2">
                            <div className="swiper mySwiper">
                                <div className="swiper-wrapper">

                                    {dataList && dataList.map((item, i) => {
                                        return (
                                            <>
                                                <SwiperSlide key={i}>

                                                    <div className="swiper-slide">
                                                        <div className="">
                                                            <Image

                                                                src={!item.slider_img ? '/img/slider1.jpg' : item.slider_img}

                                                                alt=""
                                                                width={500}
                                                                height={500}
                                                            />
                                                        </div>
                                                    </div>



                                                </SwiperSlide>
                                            </>
                                        )
                                    })}


                                </div>
                            </div>

                        </div>
                    </Swiper>
                </div>

            </section>

        </>
    )
}

export default CompanySlider;

// Import Swiper React components

// import { Navigation, Pagination,Autoplay, Scrollbar, A11y } from 'swiper/modules';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import 'swiper/css/autoplay';

// export default () => {
//   return (
//     <Swiper
//       // install Swiper modules
//       modules={[Navigation, Autoplay,Pagination, Scrollbar, A11y]}
//       spaceBetween={50}
//       slidesPerView={3}
//       navigation
      
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//       autoplay={{
//         delay: 2500,
//         disableOnInteraction: false,
//       }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log('slide change')}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       ...
//     </Swiper>
//   );
// };