import { SEO } from '../components/SEO';

export function Privacy() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <SEO title="Privacy Policy" description="Privacy Policy for Think 42 AI lab. Learn how we collect, store, and protect your data." />
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Privacy Policy</h1>
        <p className="mt-6 text-xl leading-8 text-gray-700">
          Last updated: [Date]
        </p>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Information Collected</h2>
        <p className="mt-6">
          We collect information you provide directly to us, including contact details (name, email, phone number), application data (department, year, CGPA, skills, motivation), and uploaded CVs.
        </p>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Purpose of Collection</h2>
        <p className="mt-6">
          The information collected is used solely for membership evaluation, society administration, and communicating with you regarding your application or society activities.
        </p>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Storage</h2>
        <p className="mt-6">
          Your data is securely stored using Firebase services (Firestore for data, Firebase Storage for files). 
        </p>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Data Retention and Deletion</h2>
        <p className="mt-6">
          We retain your data for as long as you are a member or for the duration of the recruitment cycle. You may request the deletion of your data at any time.
        </p>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Your Rights</h2>
        <p className="mt-6">
          You have the right to access, correct, or request the deletion of your personal information held by the society.
        </p>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Security</h2>
        <p className="mt-6">
          We implement appropriate technical and organizational measures to protect your personal data against unauthorized access or disclosure.
        </p>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Contact</h2>
        <p className="mt-6">
          For any privacy-related questions, please contact us at think42ailabs@gmail.com.
        </p>
      </div>
    </div>
  );
}
