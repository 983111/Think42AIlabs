import { SEO } from '../components/SEO';

const sections = [
  { title: 'Eligibility', body: 'Membership is subject to review and approval. You must be an active student at the university to apply for standard roles.' },
  { title: 'Accuracy of information', body: 'You agree to provide true, accurate, current, and complete information when applying for membership or filling out any form on our website.' },
  { title: 'Code of conduct', body: 'Members and applicants are expected to maintain respectful, professional behavior in all interactions. Harassment, discrimination, or academic misconduct results in immediate revocation of membership.' },
  { title: 'Intellectual property', body: 'The content on this website — logos, text, and structure — is the property of Think 42 AI Lab.' },
  { title: 'Admissions', body: 'The lab reserves the right to accept or reject applications based on internal evaluation criteria and current capacity.' },
  { title: 'Availability', body: 'We do not guarantee the website or any services will be continuously available or error-free.' },
  { title: 'Limitation of liability', body: 'Think 42 AI Lab is not liable for indirect, incidental, or consequential damages arising from use of the website or participation in the lab.' },
  { title: 'Updates', body: 'We may update these terms periodically. Continued use of the website constitutes acceptance of any changes.' },
];

export function Terms() {
  return (
    <div className="bg-paper px-6 py-24 sm:py-28 lg:px-8">
      <SEO title="Terms of Service" description="Terms of Service for Think 42 AI lab. Read our membership eligibility, code of conduct, and guidelines." />
      <div className="mx-auto max-w-2xl">
        <h1 className="font-serif text-4xl text-ink sm:text-5xl">Terms of service</h1>
        <p className="mt-6 text-sm text-ink-faint">Last updated: [date]</p>

        <div className="mt-10">
          {sections.map((s) => (
            <div key={s.title} className="py-7 border-t border-line last:border-b">
              <h2 className="font-serif text-xl text-ink">{s.title}</h2>
              <p className="mt-3 text-base leading-7 text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
