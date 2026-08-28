import { SEO } from '../components/SEO';

export function About() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <SEO title="About Us" description="Learn about the Think 42 AI lab mission, vision, and the impact we are making in the field of AI." />
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Think 42 AI lab</h1>
        <p className="mt-6 text-xl leading-8 text-gray-700">
          We are a student-led artificial intelligence community dedicated to advancing research, building open-source tools, and cultivating the next generation of AI engineers and researchers.
        </p>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Mission</h2>
        <p className="mt-6">
          To democratize access to high-quality artificial intelligence education and provide a collaborative platform where students can actively contribute to impactful AI research and open-source engineering projects.
        </p>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Vision</h2>
        <p className="mt-6">
          To become a globally recognized student hub for AI innovation, producing research publications, pioneering open-source solutions, and equipping our members with the skills necessary to lead the tech industry.
        </p>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">What We Do</h2>
        <ul role="list" className="mt-8 space-y-8 text-gray-600">
          <li className="flex gap-x-3">
            <span><strong className="font-semibold text-gray-900">Research.</strong> We conduct reading groups, discuss foundational papers, and collaborate on novel research projects.</span>
          </li>
          <li className="flex gap-x-3">
            <span><strong className="font-semibold text-gray-900">Engineering.</strong> We build real-world applications, fine-tune models, and develop open-source infrastructure.</span>
          </li>
          <li className="flex gap-x-3">
            <span><strong className="font-semibold text-gray-900">Hackathons.</strong> We regularly participate in and host AI hackathons to solve problems under constraints.</span>
          </li>
          <li className="flex gap-x-3">
            <span><strong className="font-semibold text-gray-900">Guest Talks.</strong> We invite industry experts and academic researchers to share their insights and experiences.</span>
          </li>
        </ul>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Our Impact</h2>
        <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="border-t border-gray-200 pt-4">
            <dt className="text-sm font-medium text-gray-500">Members</dt>
            <dd className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Growing</dd>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <dt className="text-sm font-medium text-gray-500">Projects</dt>
            <dd className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Growing</dd>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <dt className="text-sm font-medium text-gray-500">Research Papers</dt>
            <dd className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Growing</dd>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <dt className="text-sm font-medium text-gray-500">Events</dt>
            <dd className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Growing</dd>
          </div>
        </div>
      </div>
    </div>
  );
}
