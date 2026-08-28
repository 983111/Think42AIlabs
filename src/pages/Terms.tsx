import { SEO } from '../components/SEO';

export function Terms() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <SEO title="Terms of Service" description="Terms of Service for Think 42 AI lab. Read our membership eligibility, code of conduct, and guidelines." />
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Terms of Service</h1>
        <p className="mt-6 text-xl leading-8 text-gray-700">
          Last updated: [Date]
        </p>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Eligibility</h2>
        <p className="mt-6">
          Membership in Think 42 AI lab is subject to review and approval. You must be an active student at the university to apply for standard roles.
        </p>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Accuracy of Information</h2>
        <p className="mt-6">
          You agree to provide true, accurate, current, and complete information when applying for membership or filling out any forms on our website.
        </p>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Code of Conduct</h2>
        <p className="mt-6">
          Members and applicants are expected to maintain respectful, professional behavior in all interactions. Harassment, discrimination, or academic misconduct will result in immediate revocation of membership.
        </p>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Intellectual Property</h2>
        <p className="mt-6">
          The content on this website, including logos, text, and structure, is the property of Think 42 AI lab.
        </p>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Admissions</h2>
        <p className="mt-6">
          The society reserves the right to accept or reject applications based on its internal evaluation criteria and current capacity limits.
        </p>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Availability</h2>
        <p className="mt-6">
          We do not guarantee that the website or any services will be continuously available or error-free.
        </p>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Limitation of Liability</h2>
        <p className="mt-6">
          Think 42 AI lab shall not be liable for any indirect, incidental, or consequential damages arising from your use of the website or participation in the lab.
        </p>
        
        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Updates</h2>
        <p className="mt-6">
          We may update these terms periodically. Continued use of the website constitutes acceptance of those changes.
        </p>
      </div>
    </div>
  );
}
