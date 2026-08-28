import { useState } from 'react';
import { SEO } from '../components/SEO';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <SEO title="Contact Us" description="Have questions? Reach out to Think 42 AI lab by email." />
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Have questions? Reach out to us by email.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-xl sm:mt-20 text-center">
         <div className="flex flex-col gap-6 text-lg">

            <p className="text-gray-900 font-medium">Email: <a href="mailto:think42ailabs@gmail.com" className="text-blue-600 hover:underline">think42ailabs@gmail.com</a></p>

            <p className="text-gray-900 font-medium">Email: <a href="mailto:hello@think42ai.com" className="text-blue-600 hover:underline">hello@think42ai.com</a></p>

         </div>
      </div>
    </div>
  );
}
