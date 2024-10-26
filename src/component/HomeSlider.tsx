'use client'
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



interface DataList {
    _id: string;
    heading: String,
    slider_img: string;
}


// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import axios from "axios";

const HomeSlider = () => {


    const [dataList, setDataList] = useState<DataList[]>([]);

    useEffect(() => {
        getDataList();
    }, []);

    const getDataList = async () => {
        try {
            const response = await axios.get('/api/home-slider');

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
                backgroundImage: "linear-gradient(to right, rgba(0, 102, 181, 0.5), rgba(0, 102, 181, 0.5)), url('img/iz 1.png')"
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
                        modules={[Navigation, Pagination, Autoplay]}
                        className="mySwiper"
                    >

                        <div className="swiper-container position-relative" data-loop data-gap="30" data-slider-cols="base-1 xl-2 lg-2 md-2 sm-2">

                            {dataList && dataList.map((item, i) => {
                                return (
                                    <>
                                        <SwiperSlide key={i}>
                                            <div>
                                                <div>
                                                    {/* <img src="/img/pexels-sevenstormphotography-443376 1.png" alt="" /> */}
                                                    <Image

                                                        src={!item.slider_img ? '/img/pexels-sevenstormphotography-443376' : item.slider_img}

                                                        alt=""
                                                        width={50}
                                                        height={50}
                                                    />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </>
                                )
                            })}
                        </div>
                    </Swiper>
                </div>

            </section>

        </>
    )
}

export default HomeSlider;