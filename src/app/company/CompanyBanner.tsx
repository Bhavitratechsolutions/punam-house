

'use client';
import axios from "axios";
import Image from 'next/image'
import { useEffect, useState } from "react";

interface SlugProps {
    slug: string;
}

interface ApiData {
    title?: string;
    heading?: string;
    description?: string;
    banner_img: String,
}

const CompanyBanner = ({ slug }: SlugProps) => {
    const [apiData, setApiData] = useState<ApiData | null>(null); // Specify initial state type as 'ApiData | null'

    useEffect(() => {
        getDataList();
    }, [slug]);

    const getDataList = async () => {
        try {
            const response = await axios.get(`/api/company-banner/slug/${slug}`);

            if (response.data) {
                setApiData(response.data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };


    return (
        <section className="banner position-relative">
            <div className="banner-overlay position-relative h-100">
                {/* <img className="w-100 h-100" src="/img/banner2.png" alt="Banner" /> */}
                <Image
                    className="w-100 h-100"

                    src={
                        typeof apiData?.banner_img === 'string'
                            ? apiData.banner_img
                            : '/img/banner2.png'
                    }

                    alt=""
                    width={0}
                    height={0}
                />
            </div>
            <div className="container position-absolute start-50 top-50 translate-middle z-2">
                <div className="row align-items-center">
                    <div className="col-12">
                        <div className="caption text-center">
                            <p className="text-white fw-light" style={{ letterSpacing: '4px' }} data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
                                {apiData?.title}
                            </p>
                            <h1 className="text-white mb-4 heading text-uppercase" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">
                                <span className="fw-bold">  {apiData?.heading?.substring(0, 6)} </span> {apiData?.heading?.substring(7)}

                            </h1>
                            <p className="text-white mb-5" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600">
                                {apiData?.description?.substring(0, 70)}  <br />   {apiData?.description?.substring(70)}

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
    );
};

export default CompanyBanner;

