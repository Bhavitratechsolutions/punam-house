
'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import Image from 'next/image'
import Link from 'next/link'


interface List {
    _id: string;
    name
    : String,
    description: string;
    company_img: string;
    slug: String,
}


interface SectionApi {
    heading: string;
    description: string;
}



const Company = () => {

    const [dataList, setDataList] = useState<List[]>([]);
    const [sectionApi, setSectionApi] = useState<SectionApi[]>([])


    useEffect(() => {
        getDataList();
        getSectionData()
    }, []);

    const getDataList = async () => {
        try {
            const response = await axios.get('/api/company');
            if (response.data) {

                setDataList(response.data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);

        }
    }

    const getSectionData = async () => {
        try {
            const response = await axios.get(`/api/section`);
            setSectionApi(response.data);
        } catch (error) {
            console.error('Error fetching header data:', error);
        }
    };



    return (
        <>

            <section className="py-5">
                <div className="container">
                    <h2 className="text-color-1 text-center">{sectionApi[1]?.heading}</h2>
                    <p className="text-center mb-5"> {sectionApi[1]?.description.substring(0, 70)} <br />  {sectionApi[1]?.description.substring(70)} </p>
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {dataList && dataList.slice(0, 4).map((item, i) => {
                            return (
                                <>
                                    <div className="col" key={i}>
                                        <div className="card border-0 rounded-3 overflow-hidden home-card h-100" data-aos="fade-zoom" data-aos-duration="1500" data-aos-delay="200">
                                            <div className="card-header border-0 bg-transparent position-absolute top-0 start-0 w-100 p-3 z-1">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <span className="text-white"> {item.name} </span>
                                                    </div>
                                                    <div>
                                                        <i className="fa-regular fa-heart text-white"></i>
                                                    </div>
                                                </div>
                                            </div>
                                           
                                            <Image
                                                className="rounded me-2"
                                                src={!item.company_img ? '/img/excavator-action-scaled-1 1.png' : item.company_img}

                                                alt=""
                                                width={400}
                                                height={400}
                                            />

                                            <div className="card-footer border-0 position-absolute bottom-0 start-0 w-100 bg-color-2 p-3 z-1">
                                                {/* <Link className="text-white text-center" href="/company">{item.description}</Link> */}
                                                <Link className="text-white text-center" href={`/company/${item.slug}`}>{item.description}</Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}


                    </div>
                </div>
            </section>
        </>
    )
}

export default Company;