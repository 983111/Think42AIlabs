import { SEO } from '../components/SEO';

const sections = [
  { title: 'Information collected', body: 'We collect information you provide directly, including contact details (name, email, phone), application data (department, year, CGPA, skills, motivation), and uploaded CVs.' },
  { title: 'Purpose of collection', body: 'Information is used solely for membership evaluation, lab administration, and communicating with you about your application or lab activities.' },
  { title: 'Storage', body: 'Data is stored securely using Firebase services — Firestore for data, Firebase Storage for files.' },
  { title: 'Data retention and deletion', body: 'We retain your data for as long as you are a member, or for the duration of the recruitment cycle. You may request deletion at any time.' },
  { title: 'Your rights', body: 'You have the right to access, correct, or request deletion of your personal information held by the lab.' },
  { title: 'Security', body: 'We apply appropriate technical and organizational measures to protect your data against unauthorized access or disclosure.' },
  { title: 'Contact', body: 'For privacy-related questions, contact us at think42ailabs@gmail.com.' },
];

export function Privacy() {
  return (
    <div className="bg-paper px-6 py-24 sm:py-28 lg:px-8">
      <SEO title="Privacy Policy" description="Privacy Policy for Think 42 AI lab. Learn how we collect, store, and protect your data." />
      <div className="mx-auto max-w-2xl">
        <h1 className="font-serif text-4xl text-ink sm:text-5xl">Privacy policy</h1>
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
