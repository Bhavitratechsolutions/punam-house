

'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
} from 'reactstrap';
import ClientLayCout from "@/component/ClientLayout";




interface Company {
    _id: string;
    name: string; // Assuming the company has a name property
}


interface List {
    _id: string;
    title: string;
    description: string;
    gallery_img: string;
    company: Company | null,
}




interface CustomCSSProperties extends React.CSSProperties {
    "--bs-nav-pills-link-active-bg"?: string; // Optional custom property
}




interface CompanyList {
    _id: String,
    name: String,

}



const Gallery = () => {

    const [galleryList, setGalleryList] = useState<List[]>([]);
    const [companyList, setCompanyList] = useState<CompanyList[]>([])
    const [modal, setModal] = useState(false);
    const [modelTitle, setModelTitle] = useState<string>('');
    const [modelImage, setModelImage] = useState<string>('');
    const [isActive, setIsActive] = useState(null)
    const [isDefultActive, setDefaultIsActive] = useState('active')
    const [companyId, setCompanyID] = useState<String>('')
    const toggle = () => setModal(!modal);

    // Fetch Data on Component Mount
    useEffect(() => {
        getGalleryList();
        getCompanyList()
    }, [isActive, isDefultActive, companyId]);

    const getGalleryList = async () => {
        try {
            const response = await axios.get(`/api/company-gallery`);
            if (response.data) {
                setGalleryList(response.data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const getCompanyList = async () => {
        try {
            const response = await axios.get(`/api/company`);
            if (response.data) {
                setCompanyList(response.data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    //  console.log('companyList  list ==========>', companyList)


    const handleOpenModal = (title: string, img: string) => {
        setModelTitle(title);
        setModelImage(img);
        toggle();
    };



    const handleIsActive = (index: any, id: String) => {
        setIsActive(index)
        setDefaultIsActive("")
        setCompanyID(id)



    }



    return (
        <>
         
            <ClientLayCout>
                <main className="overflow-hidden">
                    {/* Modal for Gallery Item */}
                    <Modal size="lg" isOpen={modal} toggle={toggle}  >
                        <ModalHeader toggle={toggle}>{modelTitle}</ModalHeader>
                        <ModalBody>
                            <Image
                                src={modelImage}
                                alt={modelTitle}
                                width={600}
                                height={400}
                                style={{ width: '100%', height: '600px' }}
                                loading="lazy"
                            />
                        </ModalBody>
                    </Modal>
                    <section className="py-5 breadcrumb-section"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(3, 112, 192, 0.8),rgba(3, 112, 192, 0.8)), url('img/electrical-engineering 1.png')",
                            backgroundSize: "100% 100%",
                        }}
                    >
                        <div className="container py-md-5">
                            <h1 className="text-white text-center fw-bold my-md-5 mb-0">GALLERY</h1>
                        </div>
                    </section>

                    <section className="py-5">
                        <div className="container">
                            <div>
                                <nav className="mb-5 d-flex justify-content-center">
                                    <div
                                        className="nav nav-pills border-bottom border-dark-subtle pb-4 px-4 justify-content-center position-relative"
                                        style={{ "--bs-nav-pills-link-active-bg": "var(--color-2)" } as CustomCSSProperties}
                                    >

                                        <button className={`nav-link ${isDefultActive}`} id="pills-1-tab" data-bs-toggle="pill" data-bs-target="#pills-1" type="button" onClick={(e) => {
                                            setDefaultIsActive('active')
                                            setIsActive(null)
                                            setCompanyID('');
                                        }}>All</button>
                                        {companyList && companyList.map((item, i) => (
                                            <>
                                                <button className={`nav-link ${isActive === i && isDefultActive == "" && 'active'}`} id="pills-2-tab" data-bs-toggle="pill" data-bs-target="#pills-2" type="button" key={i} onClick={(e) => handleIsActive(i, item._id)

                                                }>
                                                    {item.name} </button>
                                            </>
                                        ))}


                                    </div>
                                </nav>
                                <div className="tab-content">



                                    <div className="tab-pane fade show active" id="pills-1">
                                        <div className="row row-cols-1 row-cols-md-3 g-4">
                                            {(galleryList &&
                                                (companyId
                                                    ? galleryList.filter(item => item.company?._id === companyId) // Filter based on companyId
                                                    : galleryList) // Show all if companyId is not provided
                                            ).map((item, index) => (
                                                <div
                                                    key={index} // Unique key for list rendering
                                                    className="col"
                                                    style={{ cursor: 'pointer' }}
                                                    onClick={() => handleOpenModal(item.title, item.gallery_img)}
                                                >
                                                    <div className="gallery-img-box rounded-3 h-100 overflow-hidden position-relative">
                                                        <Image
                                                            src={item.gallery_img}
                                                            alt={item.title}
                                                            width={600}
                                                            height={400}
                                                            loading="lazy"
                                                        />
                                                        <span className="icon position-absolute top-50 start-50 translate-middle rounded-circle bg-color-2">
                                                            <i className="fa-solid fa-magnifying-glass text-white"></i>
                                                        </span>
                                                        <div className="caption position-absolute start-0 end-0 bottom-0 p-2">
                                                            <div className="caption-title bg-dark text-white px-3 py-2 d-inline-block">
                                                                <span style={{ fontSize: '13px' }}>{item.title}</span>
                                                            </div>
                                                            <div className="caption-descr bg-white text-dark px-3">
                                                                <p className="mb-0 py-2" style={{ fontSize: '13px' }}>
                                                                    {item.description}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </section>

                </main>
            </ClientLayCout>

        </>
    )
}

export default Gallery;