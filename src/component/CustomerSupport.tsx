'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import Image from 'next/image'


interface List {
    _id: string;
    heading: String,
    description: string;

}

interface ImageData {
    customer_img?: string; // The property might be undefined or a string
}

interface Props{
    customerHeading:String,
    customerDesc:String,
}

const CustomerSupport = ({customerHeading,customerDesc}:Props) => {

    const [dataList, setDataList] = useState<List[]>([]);
    const [imgData, setImage] = useState<ImageData | null>(null);


    useEffect(() => {
        getDataList();
    }, []);

    const getDataList = async () => {
        try {
            const response = await axios.get('/api/customer');

            if (response.data) {

                setDataList(response.data);
                setImage(response.data[0])
            }
        } catch (error) {
            console.error("Error fetching data:", error);

        }
    }



    return (
        <>

            <section className="py-5" style={{ backgroundImage: "url('img/14206957_SL_030919_18910_42 [Converted] 1.png')" }}>
                <div className="container">
                    <h2 className="text-color-1 text-center"> {customerHeading} </h2>
                    <p className="text-center mb-5"> {customerDesc.substring(0,50)}  <br /> {customerDesc.substring(60)}</p>
                    <div className="row mt-5 align-items-center">
                        <div className="col-md-6 mb-3 mb-md-0">
                            <div>
                                {/* <img className="img-fluid" src="/img/Group 1000004154.png" alt="" /> */}
                                <Image
                                    className="rounded me-2"
                                    // src={!imgData?.customer_img ? '/images/placeholder.png' : `/images/${imgData?.customer_img}`}
                                    src={!imgData?.customer_img ? '/img/Group 1000004154.png' : imgData?.customer_img}
                                    alt=""
                                    width={600}
                                    height={600}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                {dataList && dataList.map((item, i) => {
                                    return (
                                        <>
                                            <div className="d-flex mb-3" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200" key={i}>
                                                <div className="me-3">
                                                    <span className="icon"><i className="fa-solid fa-phone"></i></span>
                                                </div>
                                                <div>
                                                    <h6 className="text-color-1">{item.heading}</h6>
                                                    <p> {item.description} </p>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}

                                {/* <div className="d-flex mb-3" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">
                                    <div className="me-3">
                                        <span className="icon"><i className="fa-solid fa-clipboard"></i></span>
                                    </div>
                                    <div>
                                        <h6 className="text-color-1">Best Price Guarantted</h6>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                    </div>
                                </div>
                                <div className="d-flex" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600">
                                    <div className="me-3">
                                        <span className="icon"><i className="fa-solid fa-location-dot"></i></span>
                                    </div>
                                    <div>
                                        <h6 className="text-color-1">Many Location</h6>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CustomerSupport;