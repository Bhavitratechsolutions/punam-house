




'use client';

import React, { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure this is imported to display toast notifications
import { useRouter, useParams } from 'next/navigation'
import axios from 'axios';
// import Dashboard from '../../../dashboard/page';
import { ApiList } from '@/component/CompanyList';


interface ComanyList {
    _id: String,
    name: String,
}

const Edit = () => {
    const [prevImg, setPrevImg] = useState<string | null>(null);
    const [heading, setHeading] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [company, setCompany] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [otherDesc, setOtherDesc] = useState<string>('');
    const [image, setImage] = useState<File | null>(null);
    const [companyList, setCompanyList] = useState<ComanyList[]>([]);
    const router = useRouter()
    const { id } = useParams();


    useEffect(() => {
        getSingleRecord();
    }, [id]);


    useEffect(() => {
        ApiList.getCompanyList().then((data) => {
            setCompanyList(data)
        })
    }, []);


    const getSingleRecord = async () => {
        try {
            let response = await axios.get(`/api/company-about/${id}`);
            if (response.data) {
                setDescription(response.data.description);
                setOtherDesc(response.data.otherDesc);
                setTitle(response.data.title);
                setCompany(response.data.company);
                setPrevImg(response.data.about_img);
                setImage(response.data.about_img);
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                // Use API error response if available
                const errorMessage = error.response.data.message || 'Error fetching record';
                toast.error(`Error: ${errorMessage}`);
            } else {
                toast.error('Error fetching record');
            }
        }
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!image) return toast.error("Please Upload Image");
        if (!description) return toast.error("Description is required");

        try {
            const data = new FormData();
            data.set('file', image);
            data.set('title', title);
            data.set('company', company);
            data.set('heading', heading);
            data.set('description', description);
            data.set('otherDesc', otherDesc);

            const response = await axios.put(`/api/company-about/${id}`, data);

            if (!response.data.success) {
                toast.error(response.data.message);
            } else {
                toast.success(response.data.message);
                setTimeout(() => {
                    router.push('/admin/company-about-list');
                }, 500);
            }
        } catch (error: any) {
            console.error('Error:', error);
            toast.error(error.response?.data?.message || "An unexpected error occurred");
        }
    };


    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            setImage(selectedFile);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPrevImg(reader.result as string);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleRemoveImage = () => {
        setPrevImg(null);
        setImage(null);
    };


    const handleChange = (event: any, editor: any) => {
        setOtherDesc(editor.getData());
    };

    return (
        <>




            <ToastContainer />
            <div className="container">
                <h5 className="mb-4">Add Company About </h5>
                <form onSubmit={handleSubmit}>
                    <div className="row row-cols-1">
                        <div className="col">
                            <div className="py-4 border-top">
                                <div className="row align-items-center">
                                    <div className="col-md-3">
                                        <div>
                                            <h6>Featured Image</h6>
                                            <p className="text-secondary">
                                                Upload your product featured image here <br /> Image size should not be more than 2 MB
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card border-0 p-3 shadow-sm">
                                            <div className="card-body">
                                                <div className="file-uploader">
                                                    <label className="w-100">
                                                        <div
                                                            className="border border-2 text-center p-3"
                                                            style={{
                                                                '--bs-border-style': 'dashed',
                                                                cursor: 'pointer',
                                                            } as React.CSSProperties}
                                                        >
                                                            <svg
                                                                className="text-body-tertiary m-3"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="41px"
                                                                height="30px"
                                                                viewBox="0 0 40.909 30"
                                                            >
                                                                <g transform="translate(0 -73.091)">
                                                                    <path
                                                                        data-name="Path 2125"
                                                                        d="M39.129,89.827A8.064,8.064,0,0,0,34.58,86.94,5.446,5.446,0,0,0,30,78.546a5.207,5.207,0,0,0-3.537,1.321,10.921,10.921,0,0,0-10.1-6.776,10.511,10.511,0,0,0-7.713,3.2A10.508,10.508,0,0,0,5.454,84q0,.277.043.916A9.528,9.528,0,0,0,0,93.546a9.193,9.193,0,0,0,2.8,6.743,9.191,9.191,0,0,0,6.744,2.8H32.728a8.172,8.172,0,0,0,6.4-13.264Zm-12.06-.575a.656.656,0,0,1-.479.2H21.818v7.5a.691.691,0,0,1-.681.681H17.045a.691.691,0,0,1-.682-.681v-7.5H11.59a.655.655,0,0,1-.681-.681.8.8,0,0,1,.213-.512L18.6,80.783a.722.722,0,0,1,.98,0l7.5,7.5a.663.663,0,0,1,.191.49A.656.656,0,0,1,27.07,89.252Z"
                                                                        fill="currentColor"
                                                                    />
                                                                </g>
                                                            </svg>
                                                            <p style={{ fontSize: '14px' }}>
                                                                <span className="text-color-1 fw-medium">Upload an image</span> or drag and
                                                                drop <br /> PNG, JPG
                                                            </p>
                                                            <input
                                                                className="form-control"
                                                                type="file"
                                                                name="file"
                                                                hidden
                                                                onChange={handleImageChange}
                                                            />
                                                        </div>
                                                        <br />
                                                    </label>
                                                    {prevImg && (
                                                        <>
                                                            <img
                                                                src={prevImg}
                                                                alt="Preview"
                                                                style={{ width: '100px', height: '100px' }}
                                                            />
                                                            <button
                                                                type="button"
                                                                onClick={handleRemoveImage}
                                                                className="btn btn-outline-primary"
                                                                style={{
                                                                    padding: '.25rem .5rem',
                                                                    fontSize: '.75rem',
                                                                    margin: '10px',
                                                                }}
                                                            >
                                                                Remove
                                                            </button>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="py-4 border-top">
                                <div className="row align-items-center">
                                    <div className="col-md-3">
                                        <div>
                                            <h6>Description</h6>
                                            <p className="text-secondary">
                                                Edit your necessary information from here
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-md-9">
                                        <div className="card border-0 p-3 shadow-sm">

                                            <div className="card-body">
                                                <div className="row mb-3">
                                                    <div className="col-12">
                                                        <label className="form-label fw-medium"> Select Company </label>

                                                        <select className="form-select" name="" value={company} onChange={(e) => setCompany(e.target.value)}>
                                                            <option value="">Select a company</option>
                                                            {companyList && companyList.map((item, i) => {
                                                                return (
                                                                    <>
                                                                        <option key={i} value={item._id?.toString()}>
                                                                            {item.name}
                                                                        </option>
                                                                    </>
                                                                )
                                                            })}

                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card border-0 p-3 shadow-sm">
                                            <div className="card-body">
                                                <div className="row mb-3">
                                                    <div className="col-12">
                                                        <label className="form-label fw-medium" >  Title  *</label>
                                                        <input className="form-control" type="text" name="" placeholder="Title"
                                                            value={title}
                                                            onChange={(e) => setTitle(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card border-0 p-3 shadow-sm">
                                            <div className="card-body">
                                                <div className="row mb-3">
                                                    <div className="col-12">
                                                        <label className="form-label fw-medium"  >Description</label>
                                                        <textarea className="form-control" value={description} placeholder="Description" rows={5} onChange={(e) => setDescription(e.target.value)} id="comment" name="text"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="card border-0 p-3 shadow-sm">
                                                <div className="card-body">
                                                    <div className="row mb-3">
                                                        <div className="col-12">
                                                            <label className="form-label fw-medium"> Details Description</label>
                                                            <CKEditor data={otherDesc ? otherDesc : ''} editor={ClassicEditor} onChange={handleChange} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col sticky-bottom">
                            <div className="mt-4 bg-gray-1 py-3 border-top border-primary">
                                <div className="row">
                                    <div className="col-auto">
                                        <a className="btn btn-outline-primary btn-lg fw-semibold" href="#">
                                            Back
                                        </a>
                                    </div>
                                    <div className="col-auto ms-auto">
                                        <button className="btn btn-primary btn-lg fw-semibold" type="submit">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </>
    );
};

export default Edit;
