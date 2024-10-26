




'use client';
import axios from "axios";
import Image from 'next/image'
import { useEffect, useState } from "react";
import ClientLayCout from "@/component/ClientLayout";

import Company from "@/component/Company";

interface SlugProps {
    slug: string;
}

interface ApiData {
    title?: string;
    description?: string;
    about_img: String,
}




const AboutUs = () => {
    const [apiData, setApiData] = useState<ApiData[]>([]);

    useEffect(() => {
        getDataList();
    }, []);

    const getDataList = async () => {
        try {
            const response = await axios.get(`/api/about-us`);

            if (response.data) {
                setApiData(response.data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };


    interface ApiData {
        title?: string | null;
        description?: string | null;
        about_img?: string | null;
    }

    function getIndex(
        index: number | null = null,
        title: string | null = '',
        description: string | null = '',
        image: string | null = '',
        indexArray: ApiData[] = []
    ) {
        const data = index !== null ? indexArray[index] || {} : {};

        return {
            title: title || data.title || '',
            description: description || data.description || '',
            aboutImg: image || data.about_img || '',
        };
    }


    const title = apiData[0]?.title || '';
    const description = apiData[1]?.description || '';
    const aboutImg = apiData[1]?.about_img || '';

    // console.log('about us is =====>',apiData)
    return (
        <>
            <ClientLayCout>
                <main className="overflow-hidden">

                    <section className="py-5 breadcrumb-section" style={{
                        backgroundImage: "linear-gradient(rgba(3, 112, 192, 0.8), rgba(3, 112, 192, 0.8)), url('img/electrical-engineering 1.png')",

                        backgroundSize: '100% 100%',
                    }}>
                        <div className="container py-md-5">
                            <h1 className="text-white text-center fw-bold my-md-5 mb-0"> {apiData[0]?.title}</h1>
                        </div>
                    </section>

                    <section className="py-5">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-md-7">
                                    <div className="text-center">
                                        <h2 className="text-color-1">{apiData[1]?.title}</h2>
                                        <p> {apiData[1]?.description} </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5 align-items-center">
                                <div className="col-md-6 mb-4 mb-md-0">
                                    <div>
                                        {/* <img className="img-fluid" src={apiData[2]?.about_img} alt="" /> */}
                                        <img
                                            className="img-fluid"
                                            src={apiData[2]?.about_img ?? "/img/no-image.png"}
                                            alt=""
                                        />

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div>
                                        <h6 className="text-color-1">{apiData[2]?.title}</h6>
                                        <h2>{getIndex(3, '', '', '', apiData).title.substring(0, 52)} <span className="text-color-2">{getIndex(3, '', '', '', apiData).title.substring(52)}</span></h2>
                                        <p className="my-4">{getIndex(3, '', '', '', apiData).description}  </p>
                                        <div>
                                            <div className="d-flex">
                                                <div className="me-2">
                                                    <img src="/img/icons/star (3) 1.png" alt="" />
                                                </div>
                                                <div>
                                                    <h6 className="text-color-1" style={{ marginTop: '4px' }}>{getIndex(4, '', '', '', apiData).title}</h6>
                                                    <p>{getIndex(4, '', '', '', apiData).description} </p>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <div className="me-2">
                                                    <img src="/img/icons/star (3) 1.png" alt="" />
                                                </div>
                                                <div>
                                                    <h6 className="text-color-1" style={{ marginTop: '4px' }}>{getIndex(5, '', '', '', apiData).title}</h6>
                                                    <p> {getIndex(5, '', '', '', apiData).description} </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="py-5">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-md-7">
                                    <div className="text-center">
                                        <h2 className="text-color-1">{getIndex(6, '', '', '', apiData).title}</h2>
                                        <p> {getIndex(6, '', '', '', apiData).description} </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-6 mb-4 mb-md-0">
                                    <div className="img-hover-zoom overflow-hidden position-relative">
                                        <img className="img-fluid" src={apiData[7]?.about_img ?? "/default-image.png"} alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div>
                                        <div className="img-hover-zoom overflow-hidden position-relative mb-4">
                                            <img className="img-fluid" src={apiData[8]?.about_img ?? "/default-image.png"} alt="" />
                                        </div>
                                        <div>
                                            <div className="d-flex">
                                                <div className="me-2">
                                                    <img src="/img/icons/star (3) 1.png" alt="" />
                                                </div>
                                                <div>
                                                    <h6 className="text-color-1" style={{ marginTop: '4px' }}>{getIndex(8, '', '', '', apiData).title}</h6>
                                                    <p>{getIndex(8, '', '', '', apiData).description} </p>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <div className="me-2">
                                                    <img src="/img/icons/star (3) 1.png" alt="" />
                                                </div>
                                                <div>
                                                    <h6 className="text-color-1" style={{ marginTop: '4px' }}>{getIndex(9, '', '', '', apiData).title}</h6>
                                                    <p>{getIndex(9, '', '', '', apiData).description} </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 mb-4 mb-md-0">
                                    <div className="p-3 text-color-1">
                                        <h3 className="mb-4 text-uppercase">{apiData[10]?.title} </h3>
                                        <h3 className="fw-light">{apiData[11]?.title} </h3>
                                        <p className="my-4 fw-light">{apiData[11]?.description}</p>
                                        <div>
                                            <div className="d-flex">
                                                <div className="me-2">
                                                    <img src="/img/icons/star (3) 1.png" alt="" />
                                                </div>
                                                <div>
                                                    <h6 style={{ marginTop: '4px' }}> {apiData[12]?.title}</h6>
                                                    <p className="fw-light"> {apiData[11]?.description} </p>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <div className="me-2">
                                                    <img src="/img/icons/star (3) 1.png" alt="" />
                                                </div>
                                                <div>
                                                    <h6 style={{ marginTop: '4px' }}> {apiData[13]?.title} </h6>
                                                    <p className="fw-light"> {apiData[13]?.description} </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 bg-primary">
                                    <div className="p-3 text-white">
                                        <h3 className="mb-4 text-uppercase">{apiData[14]?.title}</h3>
                                        <h3 className="fw-light">{apiData[15]?.title}</h3>
                                        <p className="my-4 fw-light"> {apiData[15]?.description}</p>
                                        <div>
                                            <div className="d-flex">
                                                <div className="me-2">
                                                    <img src="/img/icons/star (3) 1.png" alt="" />
                                                </div>
                                                <div>
                                                    <h6 style={{ marginTop: '4px' }}>{apiData[16]?.title}</h6>
                                                    <p className="fw-light"> {apiData[16]?.description} </p>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <div className="me-2">
                                                    <img src="/img/icons/star (3) 1.png" alt="" />
                                                </div>
                                                <div>
                                                    <h6 style={{ marginTop: '4px' }}> {apiData[17]?.title} </h6>
                                                    <p className="fw-light"> {apiData[17]?.description} </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </main>
                <Company />
            </ClientLayCout>
        </>
    )
}

export default AboutUs;