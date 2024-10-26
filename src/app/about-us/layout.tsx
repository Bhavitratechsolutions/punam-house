

import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  // Ensure the URL is absolute, not relative
//   const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/seo`);
  let response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/seo`, { cache: 'no-store' })
  const data = await response.json();

  return {
    title: `${data[1].title} - About Us`,
    description: `${data[1].description}`,
    keywords: data[1].keywords, // Add keywords from your API response
  };
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
