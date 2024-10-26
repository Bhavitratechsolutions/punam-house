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
    description: string;
    product_img: string;
}

const CompanyProduct = ({ slug }: SlugProps) => {

    const [dataList, setDataList] = useState<List[]>([]);

    useEffect(() => {
        getDataList();
    }, [slug]);

    const getDataList = async () => {
        try {
            const response = await axios.get(`/api/company-product/slug/${slug}`);

            if (response.data) {
                setDataList(response.data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

 



    return (
        <>
            <section className="products-section">
                <div className="container">
                    <h2 className="section-title line-after mb-5 text-center">Our Products</h2>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {dataList && dataList.map((item) => (
                            <>
                                <div className="col">
                                    <div className="card h-100 product-card">
                                        <div className="card-body py-4 border border-dark border-opacity-50 text-center overflow-hidden">
                                            {/* <img className="img-fluid" src="/img/pngegg (19) 1.png" alt="" /> */}

                                            <Image
                                                className="/img-fluid"
                                                src={!(item.product_img) ? '/img/pngegg (19) 1.png' : item.product_img}
                                                alt=""
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                style={{ width: '100%', height: '300px' }}
                                                loading="lazy"
                                            />

                                        </div>
                                        <div className="card-footer bg-color-2 text-center text-white py-2 rounded-0 border-0">
                                            <span className="text-capitalize">{item.title}</span>
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

export default CompanyProduct;