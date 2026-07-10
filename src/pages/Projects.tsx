import { SEO } from '../components/SEO';

export function Projects() {
  const projects = [
    {
      name: 'AI-Based Fertilizer Recommendation System',
      description: 'Developing a machine learning system that recommends the most suitable fertilizer based on soil conditions, crop type, and environmental factors.',
      features: ['Soil data preprocessing', 'Crop recommendation model', 'Fertilizer prediction', 'Model evaluation and optimization', 'Explainable AI outputs', 'REST API for inference'],
    },
    {
      name: 'AI for Precision Agriculture Research',
      description: 'Conducting novel research on AI applications in agriculture and publishing a complete research paper suitable for submission to a conference or journal.',
      features: ['Crop disease detection', 'Yield prediction', 'Fertilizer optimization', 'Remote sensing', 'Explainable AI', 'Computer Vision', 'LLMs for agriculture'],
    },
    {
      name: 'AI Research Workspace',
      description: 'Building a collaborative platform that enables researchers to manage papers, experiments, datasets, and AI-assisted workflows in one centralized environment.',
      features: ['User authentication', 'Research project management', 'Paper library & PDF annotation', 'Experiment tracking', 'Dataset versioning', 'AI-powered paper summarization'],
    },
    {
      name: 'AI Workflow Automation Platform',
      description: 'Creating an AI-powered automation platform that connects popular applications and automates repetitive workflows using natural language.',
      features: ['OAuth authentication', 'Workflow builder & AI generation', 'Trigger-action system', 'Webhooks', 'Task scheduling', 'API integrations & execution logs'],
    },
    {
      name: 'Kaelith Educational Platform',
      description: 'An AI workspace that works as a personal counsellor, designed to help students at crucial points like extracurricular activities (ECs), grades, and personalized college recommendations.',
      features: ['AI personal counselor', 'Extracurriculars tracking', 'Grade analysis', 'College recommendations', 'Interactive student workspace'],
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <SEO title="Projects" description="Explore the flagship engineering and research projects currently being developed by members of the NovaMind AI Society." />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Flagship Projects</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our teams are dedicated to designing, building, and presenting production-quality AI research and engineering projects. Explore our active projects below.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.name} className="flex flex-col items-start justify-between border border-gray-200 rounded-2xl p-8 bg-[#FAFAFA]">
              <div className="group relative w-full">
                <h3 className="text-xl font-bold leading-7 text-gray-900 group-hover:text-gray-600">
                  {project.name}
                </h3>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {project.description}
                </p>
                <div className="mt-6 border-t border-gray-200 pt-6">
                  <h4 className="text-sm font-semibold text-gray-900">Key Focus Areas</h4>
                  <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-xs text-gray-600">
                        <span className="mr-2 text-gray-400">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
