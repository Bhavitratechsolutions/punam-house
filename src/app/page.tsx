

'use client'; // Ensure this line is at the top

import '/public/css/custom-client.css';

import Testimonial from "@/component/testimonial";
import HomeSlider from "@/component/HomeSlider";
import ClientHeader from '@/component/ClientHeader';
import ClientFooter from '@/component/ClientFooter';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CustomerSupport from '@/component/CustomerSupport';
import Company from '@/component/Company';
import AboutSection from '@/component/AboutSection';
import Banner from '@/component/Banner';



interface HeaderApi {
    heading: string;
    description: string;
}

export default function HomePage() {
    const [headerApi, setHeaderApi] = useState<HeaderApi[]>([]);

    useEffect(() => {
        getHeaderData();
       
    }, []);



    const getHeaderData = async () => {
        try {
            const response = await axios.get(`/api/section`);
            setHeaderApi(response.data);
        } catch (error) {
            console.error('Error fetching header data:', error);
        }
    };

    const aboutHeading = headerApi[0]?.heading || '';
    const aboutDesc = headerApi[0]?.description || '';


    const customerHeading = headerApi[2]?.heading || '';
    const customerDesc = headerApi[2]?.description || '';

    const testoHeading = headerApi[3]?.heading || '';
    const testoDesc = headerApi[3]?.description || '';

    return (
        <>
            <ClientHeader />

            <main className="overflow-hidden">
                <Banner />

                {/* Start AboutSection */}
                <AboutSection aboutHeading={aboutHeading} aboutDesc={aboutDesc} />
                {/* Close AboutSection */}

                {/* Start Company support */}
                <Company />
                {/* Close Company support */}

                {/* Start customer support */}
                <CustomerSupport customerHeading={customerHeading} customerDesc={customerDesc} />
                {/* Close customer support */}

                {/* Home Slider start */}
                <HomeSlider />
                {/* Home Slider close */}

                {/* Testimonial start */}
                <Testimonial testoHeading={testoHeading} testoDesc={testoDesc} />
                {/* Close testimonial */}
            </main>

            <ClientFooter />
        </>
    );
}
