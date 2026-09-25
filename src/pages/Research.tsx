import { SEO } from '../components/SEO';

const sections = [
  { title: 'Reading groups', body: 'Weekly sessions where members work through foundational and state-of-the-art papers. Topics rotate monthly across transformers, diffusion models, reinforcement learning, and optimization.' },
  { title: 'Paper discussions', body: 'Deep dives into methodology, proofs, and experimental setup, with an eye toward replicating or improving on existing work.' },
  { title: 'Research opportunities', body: 'Members join ongoing projects or pitch their own. We provide mentorship, compute where available, and a group of people to work through problems with.' },
  { title: 'Publication guide', body: 'We help members structure findings, write in LaTeX, and submit to student conferences and workshops.' },
  { title: 'Open problems', body: 'A maintained set of AI problems tractable for undergraduate research — from dataset curation to algorithmic optimization.' },
  { title: 'Faculty collaboration', body: 'We connect students with university faculty for lab placements and guided independent study.' },
];

export function Research() {
  return (
    <div className="bg-paper px-6 py-24 sm:py-28 lg:px-8">
      <SEO title="Research" description="Discover our reading groups, paper discussions, and active research opportunities at Think 42 AI lab." />
      <div className="mx-auto max-w-2xl">
        <h1 className="font-serif text-4xl text-ink sm:text-5xl">Research</h1>
        <p className="mt-6 text-xl leading-8 text-ink-soft">
          Research sits at the center of the lab. Most of what we build starts as a question worth answering carefully.
        </p>

        <div className="mt-14">
          {sections.map((s) => (
            <div key={s.title} className="py-8 border-t border-line last:border-b">
              <h2 className="font-serif text-2xl text-ink">{s.title}</h2>
              <p className="mt-3 text-base leading-7 text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
