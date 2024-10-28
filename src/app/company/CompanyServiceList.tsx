'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import Image from 'next/image'

interface SlugProps {
    slug: string;
}


interface List {
    _id: string;
    title: String,
    serviceName: String,
    description: string;
    service_img: string;
}

const CompanyServiceList = ({ slug }: SlugProps) => {

    const [dataList, setDataList] = useState<List[]>([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        getDataList();
    }, [slug]);

    const getDataList = async () => {
        try {
            const response = await axios.get(`/api/company-service/slug/${slug}`);

            if (response.data) {
                setDataList(response.data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };


    return (
        <>
            <section className="py-5">
                <div className="container">

                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {dataList && dataList.slice(5).map((item, i) => (
                            <>
                                <div className="col" key={item._id}>
                                    <div className="card border-0 rounded-3 overflow-hidden home-card h-100" data-aos="fade-zoom" data-aos-duration="1500" data-aos-delay="200">
                                        <div className="card-header border-0 bg-transparent position-absolute top-0 start-0 w-100 p-3 z-1">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div>
                                                    {/* <span className="text-white">All New Rush </span> */}
                                                </div>
                                                <div>
                                                    <i className="fa-regular fa-heart text-white"></i>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <img className="img-fluid object-fit-cover" src="/img/excavator-action-scaled-1 1.png" alt="" /> */}
                                        <Image
                                            className="img-fluid object-fit-cover"
                                            // src={!item.service_img ? '/img/no-image.png' : item.service_img}
                                            src={item.service_img !== "" ? item.service_img : '/img/no-image.png'}

                                            alt=""
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{ width: '100%', height: '400px' }}
                                        />

                                        <div className="card-footer border-0 position-absolute bottom-0 start-0 w-100 bg-color-2 p-3 z-1">
                                            <a className="text-white text-center" href="#"> {item.serviceName}</a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}

                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default CompanyServiceList;