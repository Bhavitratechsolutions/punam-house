import { Metadata } from 'next';

interface Params {
  slug: string; // Define the expected type for params
}

// This function generates metadata for a page based on the slug
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = params; // Destructure slug from params

  // Fetch SEO data using the slug
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/company/slug/${slug}`, { cache: 'no-store' });


  // Handle response
  if (!response.ok) {
    throw new Error('Failed to fetch SEO data');
  }

  const data = await response.json();

  return {
    title: `${data.metaTitle} - Company`, // Assuming data has a title field
    description: data.metaDesc, // Assuming data has a description field
    keywords: data.metaKeyword // Assuming data has a keywords array
  };
}

// Default export for the Gallery layout
export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
