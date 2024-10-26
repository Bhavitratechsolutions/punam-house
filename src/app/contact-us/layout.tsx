

import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  // Ensure the URL is absolute, not relative
//   const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/seo`);
  let response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/seo`, { cache: 'no-store' })
  const data = await response.json();

  return {
    title: `${data[0].title} - Contact Us`,
    description: `${data[0].description} is here to help you. Reach us for support.`,
    keywords: data[0].keywords, // Add keywords from your API response
  };
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}




// import { Metadata } from 'next';

// export async function generateMetadata(): Promise<Metadata> {
//   try {
//     // Fetch SEO data from the API
//     const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/seo`, {
//       next: { revalidate: 60 }, // This setting determines how often to re-fetch the data (in seconds)
//     });

//     if (!response.ok) {
//       throw new Error('Failed to fetch SEO data');
//     }

//     const data = await response.json();

//     return {
//       title: `${data[0].title} - Contact Us`,
//       description: `${data[0].description} is here to help you. Reach us for support.`,
//       keywords: data[0].keywords.join(', '), // Join keywords into a single string if it's an array
//     };
//   } catch (error) {
//     console.error('Error fetching SEO data:', error);
//     return {
//       title: 'Contact Us - [Fallback Title]', // Fallback title
//       description: 'We are here to assist you. Contact us for support.',
//       keywords: 'contact, support, assistance', // Fallback keywords
//     };
//   }
// }

// export default function ContactLayout({ children }: { children: React.ReactNode }) {
//   return <>{children}</>;
// }
