

import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  // Ensure the URL is absolute, not relative
//   const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/seo`);
  let response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/seo`, { cache: 'no-store' })
  const data = await response.json();

  return {
    title: `${data[2].title} - Gallery`,
    description: `${data[2].description}`,
    keywords: data[2].keywords, // Add keywords from your API response
  };
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
