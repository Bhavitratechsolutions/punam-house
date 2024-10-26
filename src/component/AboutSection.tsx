'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import Image from 'next/image'


interface List {
    _id: string;
    about_image: string;
    title: String,
    heading: String,
    description: string;
    subTitle: string;
    subDesc: string;
    subTitleS: string;
    subDescS: string;
}

interface Props {
    aboutHeading: string; 
    aboutDesc:String,
  }


const AboutSection = ({aboutHeading,aboutDesc}: Props) =>{

    const [dataList, setDataList] = useState<List[]>([]);

    useEffect(() => {
        getDataList();
    }, []);

    const getDataList = async () => {
        try {
            const response = await axios.get('/api/about-brief');
            if (response.data) {
                setDataList(response.data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);

        }
    }

    const about_image = dataList.length > 0 ? dataList[0].about_image : null;
    const title = dataList.length > 0 ? dataList[0].title : null;
    const heading = dataList.length > 0 ? dataList[0].heading : null;
    const description = dataList.length > 0 ? dataList[0].description : null;
    const subTitle = dataList.length > 0 ? dataList[0].subTitle : null;
    const subDesc = dataList.length > 0 ? dataList[0].subDesc : null;
    const subTitleS = dataList.length > 0 ? dataList[0].subTitleS : null;
    const subDescS = dataList.length > 0 ? dataList[0].subDescS : null;

    return (
        <>



            <section className="py-5">
                <div className="container">
                    {/* <h2 className="text-color-1 text-center">About Us</h2>
                    <p className="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
                        eiusmod tempor incididunt ut labore et
                    </p> */}

                    <h2 className="text-color-1 text-center"> {aboutHeading}  </h2>
                    <p className="text-center">
                        {aboutDesc?.substring(0,70)} <br /> {aboutDesc?.substring(50)} 
                    </p>
                    <div className="row mt-5 align-items-center">
                        <div className="col-md-6 mb-3 mb-md-0">
                            <div>
                                {/* <img className="img-fluid" src="img/Group 1000004182.png" alt="" /> */}
                                <Image
                                    className="rounded me-2"
                                    src={about_image ? about_image : '/img/Group 1000004182.png'}
                                    alt="About Image"
                                    width={600}
                                    height={600}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <h6 className="text-color-1">{title}</h6>
                                <h2>
                                    {heading?.substring(0, 52)}
                                    <span className="text-color-2"> {heading?.substring(52)}.</span>
                                </h2>
                                <p className="my-4"> {description} </p>
                                <div>
                                    <div className="d-flex" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
                                        <div className="me-2">
                                            <img src="/img/icons/star (3) 1.png" alt="Star Icon" />
                                        </div>
                                        <div>
                                            <h6 className="text-color-1" style={{ marginTop: '4px' }}> {subTitle} </h6>
                                            <p> {subDesc} </p>
                                        </div>
                                    </div>
                                    <div className="d-flex" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
                                        <div className="me-2">
                                            <img src="/img/icons/star (3) 1.png" alt="Star Icon" />
                                        </div>
                                        <div>
                                            <h6 className="text-color-1" style={{ marginTop: '4px' }}>{subTitleS}</h6>
                                            <p> {subDescS} </p>
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

export default AboutSection;

// interface Props {
//     aboutHeading: string; // Make sure this is defined
//     // ... any other props your component may need
//   }

// const AboutSection: React.FC<Props> = ({ aboutHeading }) => {
//     return (
//       <section>
//         <h2>{aboutHeading}</h2>
//         {/* Other content */}
//       </section>
//     );
//   };

