import ClientLayCout from "@/component/ClientLayout";



const Page = () => {
    return (
        <>


            <ClientLayCout>
                <main className="overflow-hidden">

                    <section className="banner position-relative">
                        <div className="banner-overlay position-relative h-100">
                            <img className="w-100 h-100" src="/img/4773684_4cbc_2 1.png" alt="" />
                        </div>
                        <div className="container position-absolute start-50 top-50 translate-middle z-2">
                            <div className="row align-items-center">
                                <div className="col-12">
                                    <div className="caption text-center">
                                        <p className="text-white fw-light" style={{ letterSpacing: '4px' }} data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">Neque porro quisquam est qui dolorem ipsum quia</p>
                                        <h1 className="text-white mb-4 heading text-uppercase" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400"><span className="fw-bold">Ayaansh</span> electro construction</h1>
                                        <p className="text-white mb-5" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600">
                                            A complete industrial solution of total electrical Trunkey project & <br /> total power Quality management
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="py-5">
                        <div className="container">
                            <h2 className="text-color-1 text-center">About Us</h2>
                            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et</p>
                            <div className="row mt-5">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="about-img-group position-relative">
                                        <img className="img-fluid" src="/img/about-img1 1.png" alt="" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="400" />
                                        <img className="about-img-2 img-fluid position-absolute bottom-0 end-0" src="/img/about-img2 1.png" alt="" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="400" />
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
                                        <h3 className="text-color-1 mt-3">Charged with Purpose to Shaping Future of Energy</h3>
                                        <p className="my-4 text-color-1">We more than just a provider of electricity services - we're pioneers in the energy industry, dedicated to shaping a brighter, more sustainable future for all.</p>
                                        <div className="mb-5">
                                            <ul className="list-unstyled">
                                                <li className="mb-3" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">
                                                    <i className="fa-solid fa-circle-check text-color-1 me-1"></i>
                                                    <span>Highlight the unique features or benefits</span>
                                                </li>
                                                <li className="mb-3" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600">
                                                    <i className="fa-solid fa-circle-check text-color-1 me-1"></i>
                                                    <span>Our Commitment to Sustainable Energy</span>
                                                </li>
                                                <li className="mb-3" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="800">
                                                    <i className="fa-solid fa-circle-check text-color-1 me-1"></i>
                                                    <span>Present your main solutions/services.</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <a className="btn btn-primary px-4 py-2" href="#" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1000">About us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="py-5 bg-primary bg-opacity-10">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5 mb-4 mb-md-0">
                                    <div>
                                        <div>
                                            <span className="badge px-4 py-3 bg-primary bg-opacity-10 text-color-1 fs-6">How it work</span>
                                        </div>
                                        <h3 className="text-color-1 mt-3">How to Work Our Electricity Service</h3>
                                        <p className="my-4 text-color-1">Throughout the process, transparency & communication, keeping you informed.</p>
                                        <div className="row">
                                            <div className="col-md-9">
                                                <div className="electricity-service-list">
                                                    <ul className="nav nav-pills list-unstyled">
                                                        <li className="nav-item mb-3 w-100">
                                                            <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="400">
                                                                <button className="nav-link active p-3 rounded w-100 text-start" type="button" data-bs-toggle="pill" data-bs-target="#pills-1">
                                                                    <span className="icon bg-color-1 rounded-circle me-2"><img src="/img/icons/list1.svg" alt="" /></span>
                                                                    <span>Power Path Unveiling Our Process</span>
                                                                </button>
                                                            </div>
                                                        </li>
                                                        <li className="nav-item mb-3 w-100">
                                                            <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="600">
                                                                <button className="nav-link p-3 rounded w-100 text-start" type="button" data-bs-toggle="pill" data-bs-target="#pills-2">
                                                                    <span className="icon bg-color-1 rounded-circle me-2"><img src="/img/icons/work2.svg" alt="" /></span>
                                                                    <span>Electro Flow Decoding Our Method</span>
                                                                </button>
                                                            </div>
                                                        </li>
                                                        <li className="nav-item mb-3 w-100">
                                                            <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="800">
                                                                <button className="nav-link p-3 rounded w-100 text-start" type="button" data-bs-toggle="pill" data-bs-target="#pills-3">
                                                                    <span className="icon bg-color-1 rounded-circle me-2"><img src="/img/icons/list1.svg" alt="" /></span>
                                                                    <span>Energetic Engine Behind Scenes</span>
                                                                </button>
                                                            </div>
                                                        </li>
                                                        <li className="nav-item mb-3 w-100">
                                                            <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1000">
                                                                <button className="nav-link p-3 rounded w-100 text-start" type="button" data-bs-toggle="pill" data-bs-target="#pills-4">
                                                                    <span className="icon bg-color-1 rounded-circle me-2"><img src="/img/icons/work2.svg" alt="" /></span>
                                                                    <span>Watt Works Discover Operations</span>
                                                                </button>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="pills-1">
                                            <div>
                                                <div className="img-hover-zoom overflow-hidden position-relative rounded mb-3">
                                                    <img className="/img-fluid" src="img/work-img1 1.png" alt="" />
                                                </div>
                                                <div className="p-3">
                                                    <h3 className="text-color-1">Power Path Unveiling Our Process</h3>
                                                    <p className="text-secondary mb-4">
                                                        Our process begins with a thorough assessment of energy needs and goals. Once we understand your requirements, we work closely with you to develop.
                                                    </p>
                                                    <a className="btn btn-primary px-4 py-2" href="#">Book A Consulation</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-2">
                                            <div>
                                                <div className="img-hover-zoom overflow-hidden position-relative rounded mb-3">
                                                    <img className="img-fluid" src="/img/work-img1 1.png" alt="" />
                                                </div>
                                                <div className="p-3">
                                                    <h3 className="text-color-1">Electro Flow Decoding Our Method</h3>
                                                    <p className="text-secondary mb-4">
                                                        Our process begins with a thorough assessment of energy needs and goals. Once we understand your requirements, we work closely with you to develop.
                                                    </p>
                                                    <a className="btn btn-primary px-4 py-2" href="#">Book A Consulation</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-3">
                                            <div>
                                                <div className="img-hover-zoom overflow-hidden position-relative rounded mb-3">
                                                    <img className="img-fluid" src="/img/work-img1 1.png" alt="" />
                                                </div>
                                                <div className="p-3">
                                                    <h3 className="text-color-1">Energetic Engine Behind Scenes</h3>
                                                    <p className="text-secondary mb-4">
                                                        Our process begins with a thorough assessment of energy needs and goals. Once we understand your requirements, we work closely with you to develop.
                                                    </p>
                                                    <a className="btn btn-primary px-4 py-2" href="#">Book A Consulation</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-4">
                                            <div>
                                                <div className="img-hover-zoom overflow-hidden position-relative rounded mb-3">
                                                    <img className="img-fluid" src="/img/work-img1 1.png" alt="" />
                                                </div>
                                                <div className="p-3">
                                                    <h3 className="text-color-1">Watt Works Discover Operations</h3>
                                                    <p className="text-secondary mb-4">
                                                        Our process begins with a thorough assessment of energy needs and goals. Once we understand your requirements, we work closely with you to develop.
                                                    </p>
                                                    <a className="btn btn-primary px-4 py-2" href="#">Book A Consulation</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="py-5">
                        <div className="container">

                            <div className="row row-cols-1 row-cols-md-4 g-4">
                                <div className="col">
                                    <div className="card border-0 rounded-3 overflow-hidden home-card h-100" data-aos="fade-zoom" data-aos-duration="1500" data-aos-delay="200">
                                        <div className="card-header border-0 bg-transparent position-absolute top-0 start-0 w-100 p-3 z-1">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <span className="text-white">All New Rush</span>
                                                </div>
                                                <div>
                                                    <i className="fa-regular fa-heart text-white"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <img className="img-fluid object-fit-cover" src="/img/excavator-action-scaled-1 1.png" alt="" />
                                        <div className="card-footer border-0 position-absolute bottom-0 start-0 w-100 bg-color-2 p-3 z-1">
                                            <a className="text-white text-center" href="#">AYAANSH ELECTRO CONSTRUCTION</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card border-0 rounded-3 overflow-hidden home-card h-100" data-aos="fade-zoom" data-aos-duration="1500" data-aos-delay="400">
                                        <div className="card-header border-0 bg-transparent position-absolute top-0 start-0 w-100 p-3 z-1">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <span className="text-white">All New Rush</span>
                                                </div>
                                                <div>
                                                    <i className="fa-regular fa-heart text-white"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <img className="img-fluid object-fit-cover" src="/img/shutterstock_345538211-scaled-1 2.png" alt="" />
                                        <div className="card-footer border-0 position-absolute bottom-0 start-0 w-100 bg-color-2 p-3 z-1">
                                            <a className="text-white text-center" href="#">AYAANSH ELECTRO CONSTRUCTION</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card border-0 rounded-3 overflow-hidden home-card h-100" data-aos="fade-zoom" data-aos-duration="1500" data-aos-delay="600">
                                        <div className="card-header border-0 bg-transparent position-absolute top-0 start-0 w-100 p-3 z-1">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <span className="text-white">All New Rush</span>
                                                </div>
                                                <div>
                                                    <i className="fa-regular fa-heart text-white"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <img className="img-fluid object-fit-cover" src="/img/Layer-20-n 1.png" alt="" />
                                        <div className="card-footer border-0 position-absolute bottom-0 start-0 w-100 bg-color-2 p-3 z-1">
                                            <a className="text-white text-center" href="#">AYAANSH ELECTRO CONSTRUCTION</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card border-0 rounded-3 overflow-hidden home-card h-100" data-aos="fade-zoom" data-aos-duration="1500" data-aos-delay="800">
                                        <div className="card-header border-0 bg-transparent position-absolute top-0 start-0 w-100 p-3 z-1">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <span className="text-white">All New Rush</span>
                                                </div>
                                                <div>
                                                    <i className="fa-regular fa-heart text-white"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <img className="img-fluid object-fit-cover" src="/img/Layer-11-n-scaled-1 1.png" alt="" />
                                        <div className="card-footer border-0 position-absolute bottom-0 start-0 w-100 bg-color-2 p-3 z-1">
                                            <a className="text-white text-center" href="#">AYAANSH ELECTRO CONSTRUCTION</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card border-0 rounded-3 overflow-hidden home-card h-100" data-aos="fade-zoom" data-aos-duration="1500" data-aos-delay="1000">
                                        <div className="card-header border-0 bg-transparent position-absolute top-0 start-0 w-100 p-3 z-1">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <span className="text-white">All New Rush</span>
                                                </div>
                                                <div>
                                                    <i className="fa-regular fa-heart text-white"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <img className="img-fluid object-fit-cover" src="/img/excavator-action-scaled-1 1.png" alt="" />
                                        <div className="card-footer border-0 position-absolute bottom-0 start-0 w-100 bg-color-2 p-3 z-1">
                                            <a className="text-white text-center" href="#">AYAANSH ELECTRO CONSTRUCTION</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card border-0 rounded-3 overflow-hidden home-card h-100" data-aos="fade-zoom" data-aos-duration="1500" data-aos-delay="1200">
                                        <div className="card-header border-0 bg-transparent position-absolute top-0 start-0 w-100 p-3 z-1">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <span className="text-white">All New Rush</span>
                                                </div>
                                                <div>
                                                    <i className="fa-regular fa-heart text-white"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <img className="img-fluid object-fit-cover" src="/img/shutterstock_345538211-scaled-1 2.png" alt="" />
                                        <div className="card-footer border-0 position-absolute bottom-0 start-0 w-100 bg-color-2 p-3 z-1">
                                            <a className="text-white text-center" href="#">AYAANSH ELECTRO CONSTRUCTION</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card border-0 rounded-3 overflow-hidden home-card h-100" data-aos="fade-zoom" data-aos-duration="1500" data-aos-delay="1400">
                                        <div className="card-header border-0 bg-transparent position-absolute top-0 start-0 w-100 p-3 z-1">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <span className="text-white">All New Rush</span>
                                                </div>
                                                <div>
                                                    <i className="fa-regular fa-heart text-white"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <img className="img-fluid object-fit-cover" src="/img/Layer-20-n 1.png" alt="" />
                                        <div className="card-footer border-0 position-absolute bottom-0 start-0 w-100 bg-color-2 p-3 z-1">
                                            <a className="text-white text-center" href="#">AYAANSH ELECTRO CONSTRUCTION</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card border-0 rounded-3 overflow-hidden home-card h-100" data-aos="fade-zoom" data-aos-duration="1500" data-aos-delay="1600">
                                        <div className="card-header border-0 bg-transparent position-absolute top-0 start-0 w-100 p-3 z-1">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <span className="text-white">All New Rush</span>
                                                </div>
                                                <div>
                                                    <i className="fa-regular fa-heart text-white"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <img className="img-fluid object-fit-cover" src="/img/Layer-11-n-scaled-1 1.png" alt="" />
                                        <div className="card-footer border-0 position-absolute bottom-0 start-0 w-100 bg-color-2 p-3 z-1">
                                            <a className="text-white text-center" href="#">AYAANSH ELECTRO CONSTRUCTION</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="products-section">
                        <div className="container">
                            <h2 className="section-title line-after mb-5 text-center">Our Products</h2>
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                <div className="col">
                                    <div className="card h-100 product-card">
                                        <div className="card-body py-4 border border-dark border-opacity-50 text-center overflow-hidden">
                                            <img className="img-fluid" src="/img/pngegg (19) 1.png" alt="" />
                                        </div>
                                        <div className="card-footer bg-color-2 text-center text-white py-2 rounded-0 border-0">
                                            <span className="text-capitalize">volt meter</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card h-100 product-card">
                                        <div className="card-body py-4 border border-dark border-opacity-50 text-center overflow-hidden">
                                            <img className="img-fluid" src="/img/pngegg (18) 1.png" alt="" />
                                        </div>
                                        <div className="card-footer bg-color-2 text-center text-white py-2 rounded-0 border-0">
                                            <span className="text-capitalize">Transformers</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card h-100 product-card">
                                        <div className="card-body py-4 border border-dark border-opacity-50 text-center overflow-hidden">
                                            <img className="img-fluid" src="/img/pngegg (21) 1.png" alt="" />
                                        </div>
                                        <div className="card-footer bg-color-2 text-center text-white py-2 rounded-0 border-0">
                                            <span className="text-capitalize">harmonic filter panel</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card h-100 product-card">
                                        <div className="card-body py-4 border border-dark border-opacity-50 text-center overflow-hidden">
                                            <img className="img-fluid" src="/img/pngegg (20) 1.png" alt="" />
                                        </div>
                                        <div className="card-footer bg-color-2 text-center text-white py-2 rounded-0 border-0">
                                            <span className="text-capitalize">UPS system</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card h-100 product-card">
                                        <div className="card-body py-4 border border-dark border-opacity-50 text-center overflow-hidden">
                                            <img className="img-fluid" src="/img/AMF-Panel 1.png" alt="" />
                                        </div>
                                        <div className="card-footer bg-color-2 text-center text-white py-2 rounded-0 border-0">
                                            <span className="text-capitalize">AMF panel</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card h-100 product-card">
                                        <div className="card-body py-4 border border-dark border-opacity-50 text-center overflow-hidden">
                                            <img className="img-fluid" src="/img/pngwing.com (25) 1.png" alt="" />
                                        </div>
                                        <div className="card-footer bg-color-2 text-center text-white py-2 rounded-0 border-0">
                                            <span className="text-capitalize">Solar System</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="py-5 home-slider-section" style={{
                        backgroundImage: `linear-gradient(to right, rgba(0, 102, 181, 0.5), rgba(0, 102, 181, 0.5)), url('img/iz 1.png')`
                    }}>
                        <div className="container">
                            <div className="swiper-container position-relative" data-loop data-gap="30" data-slider-cols="base-1 xl-2 lg-2 md-2 sm-2">
                                <div className="swiper mySwiper">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="">
                                                <img src="/img/pexels-sevenstormphotography-443376 1.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="">
                                                <img src="/img/pexels-pixabay-236089 1.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-button-next text-white bg-primary rounded-circle"></div>
                                <div className="swiper-button-prev text-white bg-primary rounded-circle"></div>
                            </div>
                        </div>
                    </section>

                    <section className="py-5">
                        <div className="container">
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                <div className="col">
                                    <a href="img/Modern Architectural Masterpiece 2.png" data-lightbox="photos">
                                        <div className="gallery-img-box rounded-3 h-100 overflow-hidden position-relative">
                                            <img className="img-fluid rounded h-100 w-100" src="/img/Modern Architectural Masterpiece 2.png" alt="" />
                                            <span className="icon position-absolute top-50 start-50 translate-middle rounded-circle bg-color-2">
                                                <i className="fa-solid fa-magnifying-glass text-white"></i>
                                            </span>
                                            <div className="caption position-absolute start-0 end-0 bottom-0 p-2">
                                                <div className="caption-title bg-dark text-white px-3 py-2 d-inline-block">
                                                    <span style={{ fontSize: '13px' }}>Construction Building Project</span>
                                                </div>
                                                <div className="caption-descr bg-white text-dark px-3">
                                                    <p className="mb-0 py-2" style={{ fontSize: '13px' }}>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="img/Modern Architectural Masterpiece 2.png" data-lightbox="photos">
                                        <div className="gallery-img-box rounded-3 h-100 overflow-hidden position-relative">
                                            <img className="img-fluid rounded h-100 w-100" src="/img/Modern Architectural Masterpiece 2.png" alt="" />
                                            <span className="icon position-absolute top-50 start-50 translate-middle rounded-circle bg-color-2">
                                                <i className="fa-solid fa-magnifying-glass text-white"></i>
                                            </span>
                                            <div className="caption position-absolute start-0 end-0 bottom-0 p-2">
                                                <div className="caption-title bg-dark text-white px-3 py-2 d-inline-block">
                                                    <span style={{ fontSize: '13px' }}>Construction Building Project</span>
                                                </div>
                                                <div className="caption-descr bg-white text-dark px-3">
                                                    <p className="mb-0 py-2" style={{ fontSize: '13px' }}>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="img/Modern Architectural Masterpiece 2.png" data-lightbox="photos">
                                        <div className="gallery-img-box rounded-3 h-100 overflow-hidden position-relative">
                                            <img className="img-fluid rounded h-100 w-100" src="/img/Modern Architectural Masterpiece 2.png" alt="" />
                                            <span className="icon position-absolute top-50 start-50 translate-middle rounded-circle bg-color-2">
                                                <i className="fa-solid fa-magnifying-glass text-white"></i>
                                            </span>
                                            <div className="caption position-absolute start-0 end-0 bottom-0 p-2">
                                                <div className="caption-title bg-dark text-white px-3 py-2 d-inline-block">
                                                    <span style={{ fontSize: '13px' }}>Construction Building Project</span>
                                                </div>
                                                <div className="caption-descr bg-white text-dark px-3">
                                                    <p className="mb-0 py-2" style={{ fontSize: '13px' }}>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="img/Modern Architectural Masterpiece 2.png" data-lightbox="photos">
                                        <div className="gallery-img-box rounded-3 h-100 overflow-hidden position-relative">
                                            <img className="img-fluid rounded h-100 w-100" src="/img/Modern Architectural Masterpiece 2.png" alt="" />
                                            <span className="icon position-absolute top-50 start-50 translate-middle rounded-circle bg-color-2">
                                                <i className="fa-solid fa-magnifying-glass text-white"></i>
                                            </span>
                                            <div className="caption position-absolute start-0 end-0 bottom-0 p-2">
                                                <div className="caption-title bg-dark text-white px-3 py-2 d-inline-block">
                                                    <span style={{ fontSize: '13px' }}>Construction Building Project</span>
                                                </div>
                                                <div className="caption-descr bg-white text-dark px-3">
                                                    <p className="mb-0 py-2" style={{ fontSize: '13px' }}>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="img/Modern Architectural Masterpiece 2.png" data-lightbox="photos">
                                        <div className="gallery-img-box rounded-3 h-100 overflow-hidden position-relative">
                                            <img className="img-fluid rounded h-100 w-100" src="/img/Modern Architectural Masterpiece 2.png" alt="" />
                                            <span className="icon position-absolute top-50 start-50 translate-middle rounded-circle bg-color-2">
                                                <i className="fa-solid fa-magnifying-glass text-white"></i>
                                            </span>
                                            <div className="caption position-absolute start-0 end-0 bottom-0 p-2">
                                                <div className="caption-title bg-dark text-white px-3 py-2 d-inline-block">
                                                    <span style={{ fontSize: '13px' }}>Construction Building Project</span>
                                                </div>
                                                <div className="caption-descr bg-white text-dark px-3">
                                                    <p className="mb-0 py-2" style={{ fontSize: '13px' }}>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="img/Modern Architectural Masterpiece 2.png" data-lightbox="photos">
                                        <div className="gallery-img-box rounded-3 h-100 overflow-hidden position-relative">
                                            <img className="img-fluid rounded h-100 w-100" src="/img/Modern Architectural Masterpiece 2.png" alt="" />
                                            <span className="icon position-absolute top-50 start-50 translate-middle rounded-circle bg-color-2">
                                                <i className="fa-solid fa-magnifying-glass text-white"></i>
                                            </span>
                                            <div className="caption position-absolute start-0 end-0 bottom-0 p-2">
                                                <div className="caption-title bg-dark text-white px-3 py-2 d-inline-block">
                                                    <span style={{ fontSize: '13px' }}>Construction Building Project</span>
                                                </div>
                                                <div className="caption-descr bg-white text-dark px-3">
                                                    <p className="mb-0 py-2" style={{ fontSize: '13px' }}>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                </main>
            </ClientLayCout>
        </>
    )
}


export default Page;


