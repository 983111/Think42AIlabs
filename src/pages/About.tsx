import { SEO } from '../components/SEO';

const impact = [
  { label: 'Members', value: 'Growing' },
  { label: 'Projects', value: 'Growing' },
  { label: 'Research papers', value: 'Growing' },
  { label: 'Events', value: 'Growing' },
];

const activities = [
  { name: 'Research', description: 'We hold reading groups, discuss foundational papers, and collaborate on original research projects.' },
  { name: 'Engineering', description: 'We build real-world applications, fine-tune models, and maintain open-source infrastructure.' },
  { name: 'Hackathons', description: 'We take part in and host AI hackathons, working under real constraints and deadlines.' },
  { name: 'Guest talks', description: 'We invite industry practitioners and academic researchers to share their work with members.' },
];

export function About() {
  return (
    <div className="bg-paper px-6 py-24 sm:py-28 lg:px-8">
      <SEO title="About Us" description="Learn about the Think 42 AI lab mission, vision, and the impact we are making in the field of AI." />
      <div className="mx-auto max-w-2xl">
        <h1 className="font-serif text-4xl text-ink sm:text-5xl">About Think 42</h1>
        <p className="mt-6 text-xl leading-8 text-ink-soft">
          We are a student-led artificial intelligence lab dedicated to research, open-source engineering, and preparing the next generation of AI researchers and engineers.
        </p>

        <h2 className="mt-16 font-serif text-2xl text-ink">Mission</h2>
        <p className="mt-4 text-base leading-7 text-ink-soft">
          To open up access to serious AI education, and give students a real platform to contribute to research and engineering that matters beyond the classroom.
        </p>

        <h2 className="mt-14 font-serif text-2xl text-ink">Vision</h2>
        <p className="mt-4 text-base leading-7 text-ink-soft">
          To be a recognized student hub for AI work — producing publications, useful open-source tools, and members equipped to lead in the field.
        </p>

        <h2 className="mt-14 font-serif text-2xl text-ink">What we do</h2>
        <dl className="mt-6">
          {activities.map((a) => (
            <div key={a.name} className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-8 py-5 border-t border-line last:border-b">
              <dt className="text-ink font-medium sm:col-span-1">{a.name}</dt>
              <dd className="text-sm leading-6 text-ink-soft sm:col-span-3">{a.description}</dd>
            </div>
          ))}
        </dl>

        <h2 className="mt-14 font-serif text-2xl text-ink">Our impact</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4">
          {impact.map((item, i) => (
            <div key={item.label} className={`py-2 pr-4 ${i % 2 === 1 ? '' : 'sm:border-r'} border-line`}>
              <dt className="text-sm text-ink-soft">{item.label}</dt>
              <dd className="mt-2 font-serif text-2xl text-ink">{item.value}</dd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
