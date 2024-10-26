

'use client';  // Ensure this is at the top

import ClientLayout from "@/component/ClientLayout";
import { useParams } from "next/navigation";
import CompanyBanner from "../CompanyBanner";
import CompanyAbout from "../CompanyAbout";
import CompanyService from "../CompanyService";

import CompanyProduct from "../CompanyProduct";
import CompanySlider from "../CompanySlider";
import CompanyGallery from "../CompanyGallery";
import CompanyServiceList from "../CompanyServiceList";

const CompanyDetail = () => {
  const { slug } = useParams() as { slug: string }; // Type assertion to avoid type errors

  return (
    <ClientLayout>
      <main className="overflow-hidden">
        <CompanyBanner slug={slug} /> {/* Pass slugData correctly */}
        <CompanyAbout slug={slug} />
        <CompanyService  slug={slug} />
         <CompanyServiceList slug={slug} />
        <CompanyProduct slug={slug} />
        <CompanySlider slug={slug} />
        <CompanyGallery slug={slug} />
      </main>
    </ClientLayout>
  );
};

export default CompanyDetail;

