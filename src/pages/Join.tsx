import { useEffect } from 'react';
import { SEO } from '../components/SEO';
import { ArrowRight } from 'lucide-react';

export function Join() {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc20sMqe1_0s0vcYX6DzaokctBi1ZHL1GJ2n63FozV5QtQI7A/viewform?usp=dialog";

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = formUrl;
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-paper min-h-[60vh] flex items-center justify-center px-6 py-24">
      <SEO title="Apply Now" description="Apply to join Think 42 AI lab. Submit your application via our Google Form." />

      <div className="mx-auto max-w-md w-full border border-line p-10 text-center">
        <h1 className="font-serif text-2xl text-ink">Redirecting to the application</h1>
        <p className="mt-4 text-sm leading-6 text-ink-soft">
          We're opening the application form in a new tab. If it doesn't open within a few seconds, use the link below.
        </p>

        <a
          href={formUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn mt-8 w-full"
        >
          Open application form <ArrowRight className="h-4 w-4" />
        </a>

        <p className="mt-6 text-xs text-ink-faint">Think 42 AI Lab · Application 2026</p>
      </div>
    </div>
  );
}
