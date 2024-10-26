'use client'
import Link from 'next/link'
import '/public/css/custom-client.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { usePathname } from 'next/navigation'

interface LogoApi {
    logo_img: string | undefined,
}

interface List {
    _id: string;
    name
    : String,
    description: string;
    company_img: string;
    slug: String,
}


const ClientHeader = () => {

    const [logoApi, setLogoApi] = useState<LogoApi[]>([])
    const pathname = usePathname()
    const [toggleMenu, setToggleMenu] = useState(false);
    const [companyList, setCompanyList] = useState<List[]>([]);

    useEffect(() => {
        getHeaderData();
        getCompanyList()
    }, []);




    const getCompanyList = async () => {
        try {
            const response = await axios.get('/api/company');
            if (response.data) {

                setCompanyList(response.data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);

        }
    }

    const getHeaderData = async () => {
        try {
            const response = await axios.get(`/api/logo`);
            setLogoApi(response.data);
        } catch (error) {
            console.error('Error fetching header data:', error);
        }
    };

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu)
    }

//     return(
//         <>
//         <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">Navbar</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Link</a>
//         </li>
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul className="dropdown-menu">
//             <li><a className="dropdown-item" href="#">Action</a></li>
//             <li><a className="dropdown-item" href="#">Another action</a></li>
//             <li><hr className="dropdown-divider" /></li>
//             <li><a className="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link disabled" aria-disabled="true">Disabled</a>
//         </li>
//       </ul>
//       <form className="d-flex" role="search">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
//         </>
//     )

    return (
        <>

            <div className={`menu-content overlay d-md-none ${toggleMenu ? 'open' : 'close'}`} >

                <div className="menu">

                    <ul>

                        <li className="menu__item">
                            <Link href="/" className="menu__link">Home</Link>
                        </li>
                        <li className="menu__item dropdown ">
                                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Company
                                </Link>
                                <ul className="dropdown-menu" style={{background:'#0563a9', width:'100%',textAlign:'center'}}>
                                    {companyList && companyList.map((item,i) =>(
                                        <>
                                         <li className="menu__item"><Link className="menu__link" href={`/company/${item.slug}`}> {item.name} </Link></li>
                                         
                                        </>
                                    ))}
                                   
                                </ul>
                            </li>
                        <li className="menu__item">
                            <Link href="/about-us" className="menu__link">About Us</Link>
                        </li>
                        <li className="menu__item">
                            <Link href="/gallery" className="menu__link">Gallery</Link>
                        </li>
                        <li className="menu__item">
                            <Link href="/contact-us" className="menu__link"> Contact Us</Link>
                        </li>


                        {/*     
                <li className="menu__item">
                    <a href="#" className="menu__link">Media Centre</a>
                </li>
    
                <li className="menu__item">
                    <a href="#" className="menu__link">ESG</a>
                </li>

                <li className="menu__item">
                    <a href="#" className="menu__link">Get in Touch</a>
                </li> */}

                    </ul>

                </div>

            </div>
            <div className="mobile-nav d-md-none">
                <div>
                    {/* <img src="/img/logo.png" width="100px" alt="Logo" /> */}
                    <img
                        src={logoApi[2]?.logo_img || "/img/punamhouse logo 2 1.png"}
                        width="100px"
                        alt="Logo"
                    />
                </div>
                <div id="nav-icon" className="menu-button visible-xs" onClick={handleToggleMenu}>
                    <span className="burger-icon"></span>
                </div>
            </div>
            {/* <!-- /mobile sidebar menu end --> */}

            {/* <!-- ======== navbar start ======= --> */}
            <nav className="navbar navbar-expand-lg d-none d-md-block">
                <div className="container">
                    <a className="navbar-brand text-black fw-semibold" href="/">
                        <img
                            src={logoApi[2]?.logo_img || "/img/punamhouse logo 2 1.png"}
                            width="60px"
                            alt="Logo"
                        />
                    </a>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mt-3 mt-md-0" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto my-2 my-lg-0">
                            <li className={`nav-item me-md-2 position-relative ${pathname === '/' ? 'active' : ''}`} >
                                <Link className="nav-link" aria-current="page" href="/">Home</Link>
                            </li>
                            <li className="nav-item dropdown ">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Company
                                </a>
                                <ul className="dropdown-menu">
                                    {companyList && companyList.map((item,i) =>(
                                        <>
                                         <li><Link className="dropdown-item" href={`/company/${item.slug}`}> {item.name} </Link></li>
                                         
                                        </>
                                    ))}
                                   
                                </ul>
                            </li>

                            <li className={`nav-item me-md-2 position-relative ${pathname === '/about-us' ? 'active' : ''}`} >
                                <Link className="nav-link" href="/about-us">About Us</Link>
                            </li>
                            <li className={`nav-item me-md-2 position-relative ${pathname === '/gallery' ? 'active' : ''}`} >
                                <Link className="nav-link" href="/gallery" >Gallery</Link>

                            </li>
                            <li className={`nav-item me-md-2 position-relative ${pathname === '/contact-us' ? 'active' : ''}`}>
                                <Link className="nav-link" href="/contact-us" > Contact Us</Link>
                            </li>

                           
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <!-- ======== /navbar end ======= --> */}


        </>
    )
}

export default ClientHeader;