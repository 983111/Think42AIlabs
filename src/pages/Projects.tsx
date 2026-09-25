import { SEO } from '../components/SEO';

const projects = [
  {
    name: 'Styfi — AI-powered fashion & virtual try-on platform',
    description: 'A modern, responsive e-commerce marketplace combining generative AI styling tools with a full digital storefront, built with React, TypeScript, Vite, and Gemini API integration.',
    features: ['Virtual try-on experience', 'AI outfit composer', 'Fashion trend detector', 'AI image enhancer', 'Integrated marketplace catalog', 'Vercel-ready deployment'],
    images: ['/images/projects/styfi/screenshot-1.png', '/images/projects/styfi/screenshot-2.png'],
    link: 'https://styfi-website.vercel.app/',
    hiring: 'This project needs a leader and a strong technical and cross-functional team. We\u2019ll be handing this project off to run with the right people — if you\u2019re interested in any position, email think42ailabs@gmail.com.',
  },
  {
    name: 'Scholira — AI-driven global scholarship & course discovery platform',
    description: 'A fast, responsive web application that matches learners with global scholarships and educational programs through conversational AI and structured academic directories.',
    features: ['Global scholarship discovery', 'Academic program directory', 'Conversational AI advisor', 'Granular search & filtering', 'User profiles & saved listings', 'Modern editorial UI'],
    images: ['/images/projects/scholira/screenshot-1.png', '/images/projects/scholira/screenshot-2.png', '/images/projects/scholira/screenshot-3.png'],
  },
  {
    name: 'AI-based fertilizer recommendation system',
    description: 'A machine learning system that recommends the most suitable fertilizer based on soil conditions, crop type, and environmental factors.',
    features: ['Soil data preprocessing', 'Crop recommendation model', 'Fertilizer prediction', 'Model evaluation and optimization', 'Explainable AI outputs', 'REST API for inference'],
  },
  {
    name: 'AI for precision agriculture research',
    description: 'Original research on AI applications in agriculture, written up as a full paper for conference or journal submission.',
    features: ['Crop disease detection', 'Yield prediction', 'Fertilizer optimization', 'Remote sensing', 'Explainable AI', 'Computer vision', 'LLMs for agriculture'],
  },
  {
    name: 'AI research workspace',
    description: 'A collaborative platform for managing papers, experiments, datasets, and AI-assisted workflows in one place.',
    features: ['User authentication', 'Research project management', 'Paper library & PDF annotation', 'Experiment tracking', 'Dataset versioning', 'AI-powered paper summarization'],
  },
  {
    name: 'AI workflow automation platform',
    description: 'An automation platform that connects common applications and automates repetitive workflows using natural language.',
    features: ['OAuth authentication', 'Workflow builder & AI generation', 'Trigger-action system', 'Webhooks', 'Task scheduling', 'API integrations & execution logs'],
  },
  {
    name: 'Think 42 educational platform',
    description: 'An AI workspace acting as a personal counselor, helping students with extracurriculars, grades, and college recommendations.',
    features: ['AI personal counselor', 'Extracurriculars tracking', 'Grade analysis', 'College recommendations', 'Interactive student workspace'],
  },
];

export function Projects() {
  return (
    <div className="bg-paper py-24 sm:py-28">
      <SEO title="Projects" description="Explore the flagship engineering and research projects currently being developed by members of Think 42 AI lab." />
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="max-w-xl">
          <h1 className="font-serif text-4xl text-ink sm:text-5xl">Flagship projects</h1>
          <p className="mt-6 text-lg leading-8 text-ink-soft">
            Teams designing, building, and presenting production-quality AI research and engineering work.
          </p>
        </div>

        <div className="mt-16">
          {projects.map((project, i) => (
            <article key={project.name} className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 py-10 border-t border-line last:border-b">
              <div className="lg:col-span-1">
                <p className="index-mark">{String(i + 1).padStart(2, '0')}</p>
              </div>
              <div className="lg:col-span-4">
                <h2 className="font-serif text-xl text-ink leading-tight">{project.name}</h2>
                <p className="mt-3 text-sm leading-6 text-ink-soft">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm text-ink border-b border-ink hover:text-ink-soft hover:border-ink-soft"
                  >
                    Visit site ↗
                  </a>
                )}
              </div>
              <div className="lg:col-span-7">
                <p className="text-sm text-ink-faint mb-3">Key focus areas</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="text-sm text-ink-soft border-l border-line pl-3">
                      {feature}
                    </li>
                  ))}
                </ul>

                {project.images && project.images.length > 0 && (
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {project.images.map((image) => (
                      <div key={image} className="aspect-video w-full border border-line overflow-hidden bg-accent-soft/40">
                        <img src={image} alt={`${project.name} screenshot`} className="h-full w-full object-cover" />
                      </div>
                    ))}
                  </div>
                )}

                {project.hiring && (
                  <div className="mt-6 border border-line bg-accent-soft/40 px-5 py-4">
                    <p className="text-sm leading-6 text-ink-soft">{project.hiring}</p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
