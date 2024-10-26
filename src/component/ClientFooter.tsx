'use client'
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

interface FooterData {
  infoKey: String,
  infoValue: String,
}

interface LogoApi {
  logo_img: string | undefined,
}


const ClientFooter = () => {

  const [footerData, setFooterData] = useState<FooterData[]>([]);
  const [logoApi, setLogoApi] = useState<LogoApi[]>([])

  useEffect(() => {
    getApiData()
  }, []);

  const getApiData = async () => {
    let response = await axios.get('/api/web-info');
    setFooterData(response.data)

  }



  useEffect(() => {
    getHeaderData();
  }, []);



  const getHeaderData = async () => {
    try {
      const response = await axios.get(`/api/logo`);
      setLogoApi(response.data);
    } catch (error) {
      console.error('Error fetching header data:', error);
    }
  };




  const email = footerData[0]?.infoValue || '';
  const footerDesc = footerData[5]?.infoValue || '';
  const footerNum = footerData[1]?.infoValue || '';
  const footerAddress = footerData[3]?.infoValue || '';
  const facebook = footerData[6]?.infoValue || '';
  const twitter = footerData[7]?.infoValue || '';
  const instagram = footerData[8]?.infoValue || '';

  // console.log('facebook =======>',facebook)

  return (
    <>
      <footer className="pt-5 bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4 mb-md-0">

              <img src={logoApi[0]?.logo_img || "/img/punamhouse.png"} alt="Logo" width="60px" />



              <p className="my-md-5 my-4 text-white">
                {/* {footerData.infoKey && footerData[5].infoValue} */}
                {footerDesc}
              </p>
              <div className="social-links">
                <a className="d-inline-block rounded-circle fs-5 me-2 text-center text-white" href={`${facebook}`} target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a className="d-inline-block rounded-circle fs-5 me-2 text-center text-white" href={`${twitter}`} target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a className="d-inline-block rounded-circle fs-5 me-2 text-center text-white" href={`${instagram}`} target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <h4 className="text-white mb-4">Links</h4>
              <ul className="list-unstyled">
                <li className="mb-3">
                  {/* <Link className="text-white" href="/company">
                    Home
                  </Link> */}
                  <Link className="text-white" href="/">
                    Home
                  </Link>
                </li>
                <li className="mb-3">
                  <Link className="text-white" href="/about-us">
                    About Us
                  </Link>
                </li>
                <li className="mb-3">
                  <Link className="text-white" href="/contact-us">
                    Contact Us
                  </Link>
                </li>

                <li className="mb-3">
                  <Link className="text-white" href="/gallery">
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4 className="text-white mb-4">Contact</h4>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <div className="d-flex align-items-center">
                    <i className="fa-solid fa-location-dot me-3 text-white"></i>
                    <a className="text-white ps-0" href="#">
                      {footerAddress}
                    </a>
                  </div>
                </li>
                <li className="mb-3">
                  <i className="fa-solid fa-phone me-3 text-white"></i>
                  <a className="text-white" href="tel:289-932-2102">
                    {footerNum}

                  </a>
                </li>
                <li className="mb-3">
                  <i className="fa-solid fa-envelope me-3 text-white"></i>
                  <a className="text-white" href="mailto:abc@gmail.com">
                    {email}

                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "#00233F" }}>
          <div className="container">
            <div className="d-flex justify-content-md-between py-4 flex-column flex-md-row mt-4 text-white">
              <span>
                &copy;{" "}
                <a className="text-white" href="/">
                  punamhouse.com.
                </a>{" "}
                All Rights Reserved
              </span>
              <span>
                Design & Developed By{" "}
                <a className="text-white fst-italic" href="https://www.bhavitra.com" target="_blank" rel="noopener noreferrer">
                  Bhavitra Technologies
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default ClientFooter;