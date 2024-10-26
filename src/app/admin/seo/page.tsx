

// 'use client'
// import React, { useEffect, useState } from 'react'
// import Modal from 'react-bootstrap/Modal';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';
// import 'react-tagsinput/react-tagsinput.css';
// // import Loader from '@/component/Loader';


// interface list {
//     _id: string,
//     title: String,
//     description: string;
//     keywords: string;

// }
// const Page = () => {

//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     const [title, setTitle] = useState("")
//     const [keywords, setKeywords] = useState("")
//     const [description, setDescription] = useState("")
//     const [dataList, setDataList] = useState<list[]>([])
//     const [loading, setLoading] = useState(true)
//     const [searchItem, setSearchItem] = useState("")
//     const [isEdit, setIsEdit] = useState(false);
//     const [editItemId, setEditItemId] = useState("");
//     // const [tags, setTags] = useState<string[]>([]); // useState with string array type




//     useEffect(() => {
//         getItemList()
//     }, [editItemId])




//     const getItemList = async () => {
//         let response = await axios.get('/api/seo');
//         setDataList(response.data)
//         setLoading(false)
//         console.log(response.data)
//     }


//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

//         e.preventDefault()

//         let formData = {
//             title,
//             keywords,
//             description
//         }

//         if (isEdit) {


//             let response = await axios.put(`/api/seo/${editItemId}`, formData);

//             if (response.data.success) {
//                 setTitle("");
//                 setKeywords("");
//                 setDescription("")
//                 setEditItemId("")
//                 getItemList()
//                 handleClose()

//                 throw toast.success("Record Updated Successfully ");
//             }


//         } else {


//             try {
//                 let response = await axios.post('/api/seo', formData);
//                 // console.log(response)
//                 if (response.data.success) {
//                     getItemList()
//                     handleClose()
//                     setTitle("");
//                     setKeywords("");
//                     setDescription("")
//                     throw toast.success("Record Added Successfully ");

//                 } else {
//                     throw toast.error("something went wrong ");
//                 }
//             } catch (error) {

//             }
//         }



//     }


//     const handleEdit = async (item: any, id: string) => {
//         setShow(true)

//         if (item) {
//             setIsEdit(true);
//             setTitle(item.title);
//             setKeywords(item.keywords);
//             setDescription(item.description)
//             setEditItemId(item._id)
//         }

//     }


//     const handleDelete = async (id: String) => {
//         let response = await axios.delete(`/api/seo/${id}`)
//         if (response.data.success) {
//             getItemList()
//             throw toast.success("Record Deleted Successfully ");

//         }
//     }



//     // const handleChange = (newTags: string[]) => {
//     //   setTags(newTags);
//     // };

//     return (
//         <>

//             <ToastContainer />



//             <div className="container">




//                 <div className="row row-cols-1 g-3 g-md-5">

//                     <div className="col">
//                         <div className="bg-white px-4 py-5 rounded-3">

//                             <div className="d-flex justify-content-between align-items-center mb-5">
//                                 <h5 className="sec-title position-relative mb-0"> <button className="btn btn-sm btn-primary" style={{ float: 'right' }}
//                                     onClick={handleShow}> + Add Seo</button><br /> </h5>
//                                 <div className="w-50">

//                                     <div className="search-box d-flex align-items-center border rounded overflow-hidden ms-3">
//                                         <div className="h-100 ps-3">
//                                             <i className="fa-solid fa-search"></i>
//                                         </div>
//                                         <form className="flex-grow-1" action="#">
//                                             <input
//                                                 className="form-control shadow-none border-0 bg-transparent"
//                                                 type="text"
//                                                 placeholder="Search..."
//                                                 value={searchItem}
//                                                 onChange={(e) => setSearchItem(e.target.value)}
//                                             />
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col">






//                         <div className="p-0 overflow-auto">
//                             <div>
//                                 <table className="table bg-white rounded-3 shadow-sm">
//                                     <thead>
//                                         <tr>
//                                             <th>ID</th>
//                                             <th>Title</th>
//                                             <th>Description</th>
//                                             <th>Keywords</th>

//                                             <th>Actions</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {dataList && dataList.length > 0 ? (
//                                             dataList
//                                                 .filter((item) => {
//                                                     return searchItem.toLocaleLowerCase() === "" ? item : item.title.toLowerCase().includes(searchItem.toLowerCase());
//                                                 })
//                                                 .map((item, i) => (
//                                                     <tr key={i}>
//                                                         <td>{i + 1}</td>
//                                                         <td>{item.title}</td>
//                                                         <td>{item.description}</td>
//                                                         <td>{item.keywords}</td>

//                                                         <td>
//                                                             <div>
//                                                                 <i className="fa-solid fa-pencil text-color-1" onClick={() => handleEdit(item, item._id)} style={{ cursor: 'pointer' }}></i>&nbsp;&nbsp;
//                                                                 <i className="fa-solid fa-trash text-danger" style={{ cursor: 'pointer' }} onClick={() => handleDelete(item._id)}></i>
//                                                             </div>
//                                                         </td>
//                                                     </tr>
//                                                 ))
//                                         ) : (
//                                             <tr>
//                                                 <td colSpan={4} className='text-center text-primary'>No record</td>
//                                             </tr>
//                                         )}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>

//                     </div>
//                 </div>

//             </div>



//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Write Seo title and Description for to improve google search  </Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>

//                     <form action="" method="post" onSubmit={handleSubmit}>
//                         <div className="form-group">
//                             <label >SEO Title </label>
//                             <input type="text" className="form-control" placeholder="Enter Title" onChange={(e) => setTitle(e.target.value)} value={title} />
//                         </div>

//                         <br />
//                         <div className="form-group">
//                             <label >SEO Description</label>
//                             <textarea className="form-control" rows={5} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
//                         </div>
//                         <br />
//                         <div className="form-group">
//                             <label >SEO Keywords</label>
//                             {/* <TagsInput value={tags} onChange={handleChange}  />; */}
//                             {/* <input type="text" className="form-control" placeholder="Enter Keyword" onChange={(e) => setKeywords(e.target.value)} value={keywords} /> */}
//                             <textarea className="form-control" rows={5} value={keywords} onChange={(e) => setKeywords(e.target.value)}></textarea>
//                         </div>
//                         <br />
//                         <button type="submit" className="btn btn-primary">Submit</button>
//                     </form>

//                 </Modal.Body>

//             </Modal>



//         </>


//     )
// }

// export default Page;



'use client';
import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import 'react-tagsinput/react-tagsinput.css';
// import Loader from '@/component/Loader';

interface List {
    _id: string;
    title: string;
    description: string;
    keywords: string;
    seoPage:String,
}

const Page = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title, setTitle] = useState('');
    const [keywords, setKeywords] = useState('');
    const [description, setDescription] = useState('');
    const [dataList, setDataList] = useState<List[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchItem, setSearchItem] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const [editItemId, setEditItemId] = useState('');
    const [seoPage, setSeoPage] = useState('');

    useEffect(() => {
        getItemList();
    }, [editItemId]);

    const getItemList = async () => {
        let response = await axios.get('/api/seo');
        setDataList(response.data);
        setLoading(false);
        // console.log(response.data);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!seoPage || seoPage==="" ) return toast.error(" Please Select Page ");

        // Split the keywords by comma and trim spaces
        const keywordsArray = keywords.split(',').map((keyword) => keyword.trim()).join(',');

        let formData = {
            title,
            keywords: keywordsArray,
            description,
             seoPage
        };

      
        

        

        if (isEdit) {
            let response = await axios.put(`/api/seo/${editItemId}`, formData);

            if (response.data.success) {
                resetForm();
                getItemList();
                handleClose();
                toast.success("Record Updated Successfully ");
            }
        } else {
            try {
                let response = await axios.post('/api/seo', formData);
                if (response.data.success) {
                    resetForm();
                    getItemList();
                    handleClose();
                    toast.success("Record Added Successfully ");
                } else {
                    toast.error("Something went wrong ");
                }
            } catch (error: any) {
                toast.error("An error occurred: " + error.message);
            }
        }
    };

    const resetForm = () => {
        setTitle('');
        setKeywords('');
        setDescription('');
        setEditItemId('');
        setIsEdit(false);
    };

    const handleEdit = (item: any, id: string) => {
        setShow(true);
        if (item) {
            // console.log('item is =======>',item)
            setIsEdit(true);
            setTitle(item.title);
            setKeywords(item.keywords);
            setDescription(item.description);
            setEditItemId(item._id);
            setSeoPage(item?.seoPage);
        }
    };

    const handleDelete = async (id: string) => {
        let response = await axios.delete(`/api/seo/${id}`);
        if (response.data.success) {
            getItemList();
            toast.success("Record Deleted Successfully ");
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="container">
                <div className="row row-cols-1 g-3 g-md-5">
                    <div className="col">
                        <div className="bg-white px-4 py-5 rounded-3">
                            <div className="d-flex justify-content-between align-items-center mb-5">
                                <h5 className="sec-title position-relative mb-0">
                                    <button className="btn btn-sm btn-primary" style={{ float: 'right' }} onClick={handleShow}>
                                        + Add SEO
                                    </button>
                                    <br />
                                </h5>
                                <div className="w-50">
                                    <div className="search-box d-flex align-items-center border rounded overflow-hidden ms-3">
                                        <div className="h-100 ps-3">
                                            <i className="fa-solid fa-search"></i>
                                        </div>
                                        <form className="flex-grow-1" action="#">
                                            <input
                                                className="form-control shadow-none border-0 bg-transparent"
                                                type="text"
                                                placeholder="Search..."
                                                value={searchItem}
                                                onChange={(e) => setSearchItem(e.target.value)}
                                            />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="p-0 overflow-auto">
                            <div>
                                <table className="table bg-white rounded-3 shadow-sm">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Page Name</th>
                                            <th>Title</th>
                                            <th>Description</th>
                                            <th>Keywords</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dataList && dataList.length > 0 ? (
                                            dataList
                                                .filter((item) =>
                                                    searchItem.toLocaleLowerCase() === ''
                                                        ? item
                                                        : item.title.toLowerCase().includes(searchItem.toLowerCase())
                                                )
                                                .map((item, i) => (
                                                    <tr key={i}>
                                                        <td>{i + 1}</td>
                                                        <td>{item.seoPage}</td>
                                                        <td>{item.title.substring(0,30)}</td>
                                                        <td>{item.description.substring(0,30)}</td>
                                                        <td>{item.keywords.substring(0,30)}  </td>
                                                        <td>
                                                            <div>
                                                                <i
                                                                    className="fa-solid fa-pencil text-color-1"
                                                                    onClick={() => handleEdit(item, item._id)}
                                                                    style={{ cursor: 'pointer' }}
                                                                ></i>&nbsp;&nbsp;
                                                                <i
                                                                    className="fa-solid fa-trash text-danger"
                                                                    style={{ cursor: 'pointer' }}
                                                                    onClick={() => handleDelete(item._id)}
                                                                ></i>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                        ) : (
                                            <tr>
                                                <td colSpan={4} className='text-center text-primary'>No record</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Write SEO title and Description to improve Google search</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>


                        <div className="card-body">
                            <div className="row mb-3">
                                <div className="col-12">
                                    <label className="form-label fw-medium"> Seo Page </label>
                                    <select className="form-select" name=""  value={seoPage} onChange={(e) => setSeoPage(e.target.value)}>
                                        <option value=""> Select Page </option>
                                        <option value="about-us"> About Us</option>
                                        <option value="contact-us"> Contact Us</option>
                                        <option value="gallery"> Gallery </option>


                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>SEO Title</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Title"
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                            />
                        </div>
                        <br />
                        <div className="form-group">
                            <label>SEO Description</label>
                            <textarea
                                className="form-control"
                                rows={5}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                        <br />
                        <div className="form-group">
                            <label>SEO Keywords (comma-separated)</label>
                            <textarea
                                className="form-control"
                                rows={5}
                                value={keywords}
                                onChange={(e) => setKeywords(e.target.value)}
                            ></textarea>
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Page;




// 'use client';
// import React, { useEffect, useState } from 'react';
// import Modal from 'react-bootstrap/Modal';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';
// import TagsInput from 'react-tagsinput';
// import 'react-tagsinput/react-tagsinput.css';

// interface List {
//     _id: string;
//     title: string;
//     description: string;
//     keywords: string[];
// }

// const Page = () => {
//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     const [title, setTitle] = useState('');
//     const [keywords, setKeywords] = useState<string[]>([]);
//     const [description, setDescription] = useState('');
//     const [dataList, setDataList] = useState<List[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [searchItem, setSearchItem] = useState('');
//     const [isEdit, setIsEdit] = useState(false);
//     const [editItemId, setEditItemId] = useState('');

//     useEffect(() => {
//         getItemList();
//     }, [editItemId]);

//     const getItemList = async () => {
//         const response = await axios.get('/api/seo');
//         setDataList(response.data);
//         setLoading(false);
//     };

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();

//         const formData = {
//             title,
//             keywords,
//             description,
//         };



//         try {
//             if (isEdit) {
//                 const response = await axios.put(`/api/seo/${editItemId}`, formData);
//                 if (response.data.success) {
//                     resetForm();
//                     toast.success('Record Updated Successfully');
//                 }
//             } else {
//                 const response = await axios.post('/api/seo', formData);
//                 if (response.data.success) {
//                     resetForm();
//                     toast.success('Record Added Successfully');
//                 } else {
//                     toast.error('Something went wrong');
//                 }
//             }
//         } catch (error) {
//             console.log('error is =>', error)
//             toast.error('Error submitting form');
//         }
//     };

//     const resetForm = () => {
//         setTitle('');
//         setKeywords([]);
//         setDescription('');
//         setEditItemId('');
//         getItemList();
//         handleClose();
//     };

//     const handleEdit = (item: List) => {
//         setShow(true);
//         setIsEdit(true);
//         setTitle(item.title);
//         setKeywords(item.keywords);
//         setDescription(item.description);
//         setEditItemId(item._id);
//     };

//     const handleDelete = async (id: string) => {
//         const response = await axios.delete(`/api/seo/${id}`);
//         if (response.data.success) {
//             getItemList();
//             toast.success('Record Deleted Successfully');
//         }
//     };

//     const handleKeywordChange = (newTags: string[]) => {
//         setKeywords(newTags);
//     };

//     const getRandomColor = () => {
//         const letters = '0123456789ABCDEF';
//         let color = '#';
//         for (let i = 0; i < 6; i++) {
//             color += letters[Math.floor(Math.random() * 16)];
//         }
//         return color;
//     };


//     return (
//         <>
//             <ToastContainer />
//             <div className="container">
//                 <div className="row row-cols-1 g-3 g-md-5">
//                     <div className="col">
//                         <div className="bg-white px-4 py-5 rounded-3">
//                             <div className="d-flex justify-content-between align-items-center mb-5">
//                                 <h5 className="sec-title position-relative mb-0">
//                                     <button
//                                         className="btn btn-sm btn-primary"
//                                         style={{ float: 'right' }}
//                                         onClick={handleShow}
//                                     >
//                                         + Add Seo
//                                     </button>
//                                 </h5>
//                                 <div className="w-50">
//                                     <div className="search-box d-flex align-items-center border rounded overflow-hidden ms-3">
//                                         <div className="h-100 ps-3">
//                                             <i className="fa-solid fa-search"></i>
//                                         </div>
//                                         <form className="flex-grow-1" action="#">
//                                             <input
//                                                 className="form-control shadow-none border-0 bg-transparent"
//                                                 type="text"
//                                                 placeholder="Search..."
//                                                 value={searchItem}
//                                                 onChange={(e) => setSearchItem(e.target.value)}
//                                             />
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col">
//                         <div className="p-0 overflow-auto">
//                             <table className="table bg-white rounded-3 shadow-sm">
//                                 <thead>
//                                     <tr>
//                                         <th>ID</th>
//                                         <th>Title</th>
//                                         <th>Description</th>
//                                         <th>Keywords</th>
//                                         <th>Actions</th>
//                                     </tr>
//                                 </thead>
//                                  <tbody>
//                   {dataList.length > 0 ? (
//                     dataList
//                       .filter((item) =>
//                         searchItem
//                           ? item.title.toLowerCase().includes(searchItem.toLowerCase())
//                           : true
//                       )
//                       .map((item, i) => (
//                         <tr key={item._id}>
//                           <td>{i + 1}</td>
//                           <td>{item.title.substring(0,15)}</td>
//                           <td>{item.description.substring(0,15)}</td>
//                           <td>{item.keywords.join(', ')}</td>
//                           <td>
//                             <i
//                               className="fa-solid fa-pencil text-color-1"
//                               onClick={() => handleEdit(item)}
//                               style={{ cursor: 'pointer' }}
//                             ></i>
//                             &nbsp;&nbsp;
//                             <i
//                               className="fa-solid fa-trash text-danger"
//                               onClick={() => handleDelete(item._id)}
//                               style={{ cursor: 'pointer' }}
//                             ></i>
//                           </td>
//                         </tr>
//                       ))
//                   ) : (
//                     <tr>
//                       <td colSpan={5} className="text-center text-primary">
//                         No record
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//                                 <tbody>
//                                     {dataList.length > 0 ? (
//                                         dataList
//                                             .filter((item) =>
//                                                 searchItem
//                                                     ? item.title.toLowerCase().includes(searchItem.toLowerCase())
//                                                     : true
//                                             )
//                                             .map((item, i) => (
//                                                 <tr key={item._id}>
//                                                     <td>{i + 1}</td>
//                                                     <td>{item.title.substring(0, 15)}</td>
//                                                     <td>{item.description.substring(0, 15)}</td>
//                                                     <td>
//                                                         {item.keywords.map((keyword, index) => (
//                                                             <span
//                                                                 key={index}
//                                                                 style={{
//                                                                     backgroundColor: getRandomColor(),
//                                                                     color: '#fff',
//                                                                     padding: '5px 8px',
//                                                                     margin: '2px',
//                                                                     borderRadius: '5px',
//                                                                     display: 'inline-block',
//                                                                 }}
//                                                             >
//                                                                 {keyword}
//                                                             </span>
//                                                         ))}
//                                                     </td>
//                                                     <td>
//                                                         <i
//                                                             className="fa-solid fa-pencil text-color-1"
//                                                             onClick={() => handleEdit(item)}
//                                                             style={{ cursor: 'pointer' }}
//                                                         ></i>
//                                                         &nbsp;&nbsp;
//                                                         <i
//                                                             className="fa-solid fa-trash text-danger"
//                                                             onClick={() => handleDelete(item._id)}
//                                                             style={{ cursor: 'pointer' }}
//                                                         ></i>
//                                                     </td>
//                                                 </tr>
//                                             ))
//                                     ) : (
//                                         <tr>
//                                             <td colSpan={5} className="text-center text-primary">
//                                                 No record
//                                             </td>
//                                         </tr>
//                                     )}
//                                 </tbody>

//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Write SEO Title and Description</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <form onSubmit={handleSubmit}>
//                         <div className="form-group">
//                             <label>SEO Title</label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 placeholder="Enter Title"
//                                 value={title}
//                                 onChange={(e) => setTitle(e.target.value)}
//                             />
//                         </div>
//                         <br />
//                         <div className="form-group">
//                             <label>SEO Description</label>
//                             <textarea
//                                 className="form-control"
//                                 rows={5}
//                                 value={description}
//                                 onChange={(e) => setDescription(e.target.value)}
//                             ></textarea>
//                         </div>
//                         <br />
//                         <div className="form-group">
//                             <label>SEO Keywords</label>
//                             <TagsInput
//                                 value={keywords}
//                                 onChange={handleKeywordChange}
//                                 inputProps={{ placeholder: 'keywords' }}
//                             />
//                         </div>
//                         <br />
//                         <button type="submit" className="btn btn-primary">
//                             Submit
//                         </button>
//                     </form>
//                 </Modal.Body>
//             </Modal>
//         </>
//     );
// };

// export default Page;

