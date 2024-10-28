'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import Image from 'next/image'
import Link from 'next/link'

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

const CompanyService = ({ slug }: SlugProps) => {

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

    // console.log('apiData service =>', dataList)

    return (
        <>
            <section className="py-5 bg-primary bg-opacity-10">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 mb-4 mb-md-0">
                            <div>
                                <div>
                                    <span className="badge px-4 py-3 bg-primary bg-opacity-10 text-color-1 fs-6">How it work</span>
                                </div>
                                <h3 className="text-color-1 mt-3">How to Work Our Electricity Service</h3>
                                <p className="my-4 text-color-1">Throughout the process, transparency & communication, keeping you informed.</p>
                                <div className="row">
                                    <div className="col-md-9">
                                        <div className="electricity-service-list">
                                            <ul className="nav nav-pills list-unstyled">

                                                {dataList.length > 0 &&  dataList.slice(0,5).map((item, i) => (
                                                    <>
                                                        <li className="nav-item mb-3 w-100" key={i} onClick={() => setActive(i)}>
                                                            <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="400">
                                                                <button className={`${i === active ? 'nav-link active p-3 rounded w-100 text-start' : 'nav-link  p-3 rounded w-100 text-start'}`} type="button" data-bs-toggle="pill" data-bs-target="#pills-1">
                                                                    <span className="icon bg-color-1 rounded-circle me-2">
                                                                        {i === 0 && <img src="/img/icons/list1.svg" alt="" />}
                                                                        {i === 1 && <img src="/img/icons/work2.svg" alt="" />}
                                                                        {i === 2 && <img src="/img/icons/list1.svg" alt="" />}
                                                                        {i === 3 && <img src="/img/icons/work2.svg" alt="" />}
                                                                        {i > 3 && <img src="/img/icons/list1.svg" alt="" />}
                                                                        {i > 4 && <img src="/img/icons/list1.svg" alt="" />}
                                                                        
                                                                    </span>
                                                                    <span> {item.serviceName}</span>
                                                                </button>
                                                            </div>
                                                        </li>
                                                    </>
                                                ))}


                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="pills-1">
                                    <div>


                                        <div className="img-hover-zoom overflow-hidden position-relative rounded mb-3">
                                            <Image
                                                className="/img-fluid"
                                                src={dataList?.[active]?.service_img}
                                             
                                                alt=""
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                style={{ width: '100%', height: '100%' }}
                                            />
                                              {/* <img className="/img-fluid" src="/img/no-image.png" alt=""  style={{ width: '100%', height: '100%' }} /> */}

                                            {/* <img className="/img-fluid" src="/img/work-img1 1.png" alt="" /> */}
                                        </div>
                                        <div className="p-3">
                                            <h3 className="text-color-1">
                                                {dataList?.[active]?.title || 'No Title Available'}
                                            </h3>
                                            <p className="text-secondary mb-4">
                                                {dataList?.[active]?.description || 'No Description Available'}
                                            </p>
                                            <Link href="/contact-us" className="btn btn-primary px-4 py-2" >
                                                Book A Consultation
                                            </Link>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CompanyService;