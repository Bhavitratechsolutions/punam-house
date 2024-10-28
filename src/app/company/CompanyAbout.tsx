import axios from "axios";
import { useEffect, useState } from "react";
import ReactHtmlParser from 'react-html-parser';
import Image from 'next/image'

interface SlugProps {
    slug: string;
}


interface ApiData {
    aboutHeading: String,
    aboutDesc: String,
    title?: string;
    description?: string;
    otherDesc?: string;
    about_img: String,
    about_small_img: string
}

interface SectionApi {
    heading: string;
    description: string;
}

const CompanyAbout = ({ slug }: SlugProps) => {

    const [apiData, setApiData] = useState<ApiData | null>(null); // Specify initial state type as 'ApiData | null'
    const [section, setSection] = useState<SectionApi[]>([]);

    useEffect(() => {
        getDataList();
        getCompanyAbout()
    }, [slug]);

    const getDataList = async () => {
        try {
            const response = await axios.get(`/api/company-about/slug/${slug}`);

            if (response.data) {
                setApiData(response.data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const getCompanyAbout = async () => {
        try {
            const response = await axios.get(`/api/section`);

            if (response.data) {
                setSection(response.data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };




    return (
        <>


            <section className="py-5">
                <div className="container">
                    <h2 className="text-color-1 text-center"> {apiData?.aboutHeading}</h2>
                    <p className="text-center">{apiData?.aboutDesc.substring(0, 63)}  <br /> {apiData?.aboutDesc.substring(63)} </p>
                    {/* <p className="text-center">{section[4]?.description.substring(0,63)} <br /> {section[4]?.description.substring(63)} </p> */}
                    <div className="row mt-5">
                        <div className="col-md-6 mb-3 mb-md-0">
                            <div className="about-img-group position-relative">
                                {/* <img className="img-fluid" src="/img/about-img1 1.png" alt="" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="400" /> */}
                                <Image
                                    className="img-fluid"
                                    src={typeof apiData?.about_img === 'string' ? apiData.about_img : '/img/about-img1 1.png'}

                                    alt=""
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                                <Image
                                    className="about-img-2 img-fluid position-absolute bottom-0 end-0"
                                    src={!apiData?.about_small_img ? '/img/about-img2 1.png' : `/images/${apiData.about_small_img}`}

                                    alt=""
                                    width={0}
                                    height={0}
                                />
                                {/* <img className="about-img-2 img-fluid position-absolute bottom-0 end-0" src="/img/about-img2 1.png" alt="" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="400" /> */}
                                <div className="experience p-4 text-center bg-primary text-white position-absolute bottom-0 start-0" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">
                                    <h2>12+</h2>
                                    <span>Years of Experienced</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <div>
                                    <span className="badge px-4 py-3 bg-primary bg-opacity-10 text-color-1 fs-6">How it work</span>
                                </div>
                                <h3 className="text-color-1 mt-3">{apiData?.title}</h3>
                                <p className="my-4 text-color-1">{apiData?.description} .</p>
                                <div className="mb-5">
                                    {/* {ReactHtmlParser(apiData?.otherDesc)} */}

                                    <span>{apiData?.otherDesc ? ReactHtmlParser(apiData?.otherDesc as string) : null}</span>

                                </div>
                                <a className="btn btn-primary px-4 py-2" href="#" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1000">About us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CompanyAbout;