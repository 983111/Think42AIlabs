import { SEO } from '../components/SEO';

export function Projects() {
  const areas = [
    { name: 'AI for Agriculture', status: 'Looking for Members', description: 'Developing computer vision models to detect crop diseases early and optimize yield predictions using satellite imagery.' },
    { name: 'Large Language Models', status: 'Research', description: 'Investigating parameter-efficient fine-tuning methods (PEFT) and retrieval-augmented generation (RAG) architectures for domain-specific tasks.' },
    { name: 'Computer Vision', status: 'Prototype', description: 'Building real-time object tracking systems and semantic segmentation models for autonomous navigation and robotics applications.' },
    { name: 'Healthcare AI', status: 'Looking for Members', description: 'Exploring predictive modeling for patient outcomes and automated medical image analysis using deep learning.' },
    { name: 'Educational AI', status: 'Completed', description: 'An AI-powered tutoring system that personalizes learning paths based on student performance and engagement metrics.' },
    { name: 'AI Agents', status: 'Research', description: 'Designing autonomous agents capable of complex multi-step reasoning and tool use for software engineering tasks.' },
    { name: 'Robotics', status: 'Looking for Members', description: 'Implementing reinforcement learning algorithms for robotic arm manipulation and sim-to-real transfer.' },
    { name: 'Edge AI', status: 'Prototype', description: 'Optimizing and quantizing deep neural networks for deployment on resource-constrained microcontrollers and edge devices.' },
    { name: 'Explainable AI', status: 'Research', description: 'Developing techniques to interpret and explain the decision-making processes of black-box machine learning models.' },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <SEO title="Projects & Research Areas" description="Explore the active AI research and engineering projects currently being developed by members of the NovaMind AI Society." />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Current Research Areas</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our members actively contribute to various AI domains. We focus on impactful engineering and applied research. Explore our active areas below.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {areas.map((area) => (
            <article key={area.name} className="flex flex-col items-start justify-between border border-gray-200 rounded-2xl p-8">
              <div className="flex items-center gap-x-4 text-xs">
                <span className={`rounded-full px-3 py-1.5 font-medium ${
                  area.status === 'Completed' ? 'bg-green-50 text-green-600' :
                  area.status === 'Looking for Members' ? 'bg-blue-50 text-blue-600' :
                  'bg-gray-50 text-gray-600'
                }`}>
                  {area.status}
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-5 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  {area.name}
                </h3>
                <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600">
                  {area.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
