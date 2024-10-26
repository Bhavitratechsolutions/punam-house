


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

interface SlugProps {
    slug: string;
}

interface List {
    _id: string;
    title: string;
    description: string;
    gallery_img: string;
}

const CompanyGallery = ({ slug }: SlugProps) => {
    const [dataList, setDataList] = useState<List[]>([]);
    const [modal, setModal] = useState(false);
    const [modelTitle, setModelTitle] = useState<string>('');
    const [modelImage, setModelImage] = useState<string>('');

    // Toggle Modal Function
    const toggle = () => setModal(!modal);

    // Fetch Data on Component Mount
    useEffect(() => {
        const getDataList = async () => {
            try {
                const response = await axios.get(`/api/company-gallery/slug/${slug}`);
                if (response.data) {
                    setDataList(response.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getDataList();
    }, [slug]);

    // Handle Modal Opening with Item Data
    const handleOpenModal = (title: string, img: string) => {
        setModelTitle(title);
        setModelImage(img);
        toggle();
    };

    return (
        <>
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

            {/* Gallery Section */}
            <section className="py-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {dataList.map((item) => (
                            <div
                                key={item._id}
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
                                        // style={{ width: '100%', height: 'auto' }}
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
            </section>
        </>
    );
};

export default CompanyGallery;
