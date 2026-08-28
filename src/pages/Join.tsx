import React, { useEffect } from 'react';
import { SEO } from '../components/SEO';
import { ArrowRight, ExternalLink } from 'lucide-react';

export function Join() {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc20sMqe1_0s0vcYX6DzaokctBi1ZHL1GJ2n63FozV5QtQI7A/viewform?usp=dialog";

  useEffect(() => {
    // Attempt automatic redirect
    const timer = setTimeout(() => {
      window.location.href = formUrl;
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#FAFAFA] min-h-[60vh] flex items-center justify-center px-6 py-24">
      <SEO title="Apply Now" description="Apply to join Think 42 AI lab. Submit your application via our Google Form." />
      
      <div className="mx-auto max-w-md w-full bg-white border border-gray-200 rounded-2xl p-8 shadow-sm text-center">
        <div className="flex justify-center mb-6">
          <div className="h-12 w-12 rounded-xl bg-black text-white flex items-center justify-center">
            <ExternalLink className="h-6 w-6" />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-2">Redirecting to Application</h2>
        <p className="text-gray-500 mb-8 text-sm">
          We are opening the application form in a new tab. If it doesn't open automatically within a few seconds, click the button below.
        </p>

        <a
          href={formUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-xl bg-black px-6 py-3.5 text-base font-semibold text-white hover:bg-gray-800 transition-colors shadow-sm"
        >
          Open Application Form <ArrowRight className="ml-2 h-5 w-5" />
        </a>

        <div className="mt-6 text-xs text-gray-400">
          Think 42 AI lab • Application Form 2026
        </div>
      </div>
    </div>
  );
}
