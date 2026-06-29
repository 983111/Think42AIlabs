import { useState } from 'react';
import { SEO } from '../components/SEO';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <SEO title="Contact Us" description="Have questions? Reach out to NovaMind AI Society via email or our social channels." />
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Have questions? Reach out to us via email or our social channels.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-xl sm:mt-20 text-center">
         <div className="flex flex-col gap-6 text-lg">
            <p className="text-gray-900 font-medium">Email: <a href="mailto:hello@novamindai.org" className="text-blue-600 hover:underline">hello@novamindai.org</a></p>
            <p className="text-gray-900 font-medium">LinkedIn: <a href="#" className="text-blue-600 hover:underline">NovaMind AI Society</a></p>
            <p className="text-gray-900 font-medium">GitHub: <a href="#" className="text-blue-600 hover:underline">novamind-ai</a></p>
         </div>
      </div>
    </div>
  );
}
