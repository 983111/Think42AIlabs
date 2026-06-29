import { SEO } from '../components/SEO';

export function Research() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <SEO title="Research" description="Discover our reading groups, paper discussions, and active research opportunities at NovaMind AI Society." />
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Research Operations</h1>
        <p className="mt-6 text-xl leading-8 text-gray-700">
          At NovaMind, research is at the core of what we do. We aim to bridge the gap between theoretical understanding and practical implementation.
        </p>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Reading Groups</h2>
        <p className="mt-6">
          We host weekly reading groups where members dissect foundational and state-of-the-art research papers. Topics rotate monthly, covering areas like Transformers, Diffusion Models, Reinforcement Learning, and Optimization.
        </p>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Paper Discussions</h2>
        <p className="mt-6">
          Deep dives into methodology, mathematical proofs, and experimental setups. We encourage critical thinking and look for ways to replicate or improve upon existing work.
        </p>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Research Opportunities</h2>
        <p className="mt-6">
          Members can join ongoing projects or pitch their own ideas. We provide mentorship, computational resources (when available), and a collaborative environment to turn ideas into experiments.
        </p>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Publication Guide</h2>
        <p className="mt-6">
          We assist members in structuring their findings, writing academic papers in LaTeX, and submitting to student conferences and workshops.
        </p>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Open Problems</h2>
        <p className="mt-6">
          We maintain a repository of open problems in AI that are tractable for undergraduate research, ranging from dataset curation to algorithmic optimizations.
        </p>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Faculty Collaboration</h2>
        <p className="mt-6">
          We actively seek to bridge students with university faculty, facilitating lab placements and guided independent study projects.
        </p>
      </div>
    </div>
  );
}
