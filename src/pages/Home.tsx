import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';

const focusAreas = [
  { name: 'Research', description: 'Reading groups, paper replications, and original research carried through to publication.' },
  { name: 'Build', description: 'Production-quality tools and open-source infrastructure, shipped and maintained by members.' },
  { name: 'Collaborate', description: 'Cross-disciplinary teams pairing research members with engineers on shared projects.' },
  { name: 'Learn', description: 'Workshops and hands-on sessions covering the methods a project actually needs.' },
  { name: 'Lead', description: 'Members run teams, own timelines, and set the direction of their own work.' },
];

const stats = [
  { value: 'Growing', label: 'Members' },
  { value: 'Growing', label: 'Active projects' },
  { value: 'Growing', label: 'Research papers' },
  { value: '3', label: 'Working teams' },
];

const blogs = [
  { slug: 'start-ai-research', title: 'How students can start AI research without prior experience', date: 'May 12, 2026', read: '8 min', snippet: "An actionable guide for undergrads looking to get their hands dirty with deep learning, from reading your first paper to writing your first training loop." },
  { slug: 'ai-engineering-vs-research', title: 'AI engineering vs AI research: the key differences', date: 'May 05, 2026', read: '10 min', snippet: "Understanding the diverging skill trees in the AI industry and how to position yourself depending on your long-term goals." },
  { slug: 'roadmap-to-ai-engineer', title: 'A roadmap to becoming an AI engineer in college', date: 'Apr 28, 2026', read: '12 min', snippet: "A comprehensive curriculum to move from basic Python scripting to deploying production-grade LLM applications." },
];

const projects = [
  { title: 'Student Counselor Platform', category: 'LLM Application', description: 'A natural language interface to help students navigate course requirements, prerequisites, and graduation paths. Built with RAG over the university course catalog.' },
  { title: 'Crop Disease Diagnostics', category: 'Computer Vision', description: 'Lightweight convolutional models deployed on edge devices to identify common crop blights from smartphone photos, designed for low-bandwidth environments.' },
  { title: 'Automated Literature Reviewer', category: 'Agent Workflow', description: 'An orchestration system that aggregates, summarizes, and synthesizes recent ArXiv papers based on custom research queries.' }
];

export function Home() {
  return (
    <div className="bg-paper font-sans">
      <SEO
        title="Home"
        description="Think 42 AI Lab is a student-run research lab working on artificial intelligence — research, engineering, and open-source, together."
      />

      {/* Hero Section */}
      <section className="bg-paper py-32 md:py-48">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h1 className="font-serif text-5xl leading-tight tracking-tight text-ink md:text-7xl lg:text-[5.5rem] lg:leading-[1.05] max-w-4xl">
            Building the future with intelligence.
          </h1>
          <p className="mt-10 text-xl leading-relaxed text-ink-soft max-w-2xl">
            Think 42 AI Lab is a student-run community advancing artificial intelligence through research, engineering, and work that leaves the lab. We don't just study AI; we build it, break it, and deploy it.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-8">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc20sMqe1_0s0vcYX6DzaokctBi1ZHL1GJ2n63FozV5QtQI7A/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="btn text-base px-8 py-4">
              Apply now <ArrowRight className="h-5 w-5" />
            </a>
            <Link to="/projects" className="text-lg font-medium text-ink underline underline-offset-8 hover:text-accent transition-colors">
              Explore our work
            </Link>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="bg-[#F8F7F5] py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-24">
            <h2 className="font-serif text-4xl text-ink md:text-5xl">What we do</h2>
            <p className="mt-6 text-xl text-ink-soft max-w-2xl">
              Five threads members move between over the course of a project, from first read to shipped work. No artificial boundaries between research and engineering.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">
            {focusAreas.map((item) => (
              <div key={item.name} className="flex flex-col">
                <h3 className="font-serif text-2xl text-ink mb-6">{item.name}</h3>
                <p className="text-lg leading-relaxed text-ink-soft">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Projects Section */}
      <section className="bg-paper py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <p className="index-mark mb-6">OUR WORK</p>
              <h2 className="font-serif text-4xl text-ink md:text-5xl">Flagship Projects</h2>
              <p className="mt-6 text-xl text-ink-soft">
                We design, build, and deploy production-quality tools alongside our research. Here is a look at what our teams are building right now.
              </p>
            </div>
            <Link to="/projects" className="inline-flex items-center gap-3 text-lg text-ink font-medium hover:text-accent transition-colors">
              See all projects <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {projects.map((project) => (
              <div key={project.title}>
                <p className="index-mark mb-4">{project.category}</p>
                <h3 className="font-serif text-2xl text-ink mb-6">{project.title}</h3>
                <p className="text-lg leading-relaxed text-ink-soft">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-ink py-32 text-paper">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <p className="font-serif text-5xl md:text-6xl mb-4">{stat.value}</p>
                <p className="text-lg text-ink-faint">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-accent-soft py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl text-ink md:text-5xl">From the blog</h2>
              <p className="mt-6 text-xl text-ink-soft">
                Insights, tutorials, and thoughts from our members on navigating the rapidly changing field of artificial intelligence.
              </p>
            </div>
            <Link to="/blogs" className="inline-flex items-center gap-3 text-lg text-ink font-medium hover:text-accent transition-colors">
              View all posts <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-20">
            {blogs.map((blog) => (
              <div key={blog.slug} className="group max-w-3xl">
                <p className="index-mark mb-4">{blog.date} · {blog.read}</p>
                <Link to={`/blogs?post=${blog.slug}`} className="block">
                  <h3 className="font-serif text-3xl text-ink group-hover:text-accent transition-colors mb-6">
                    {blog.title}
                  </h3>
                </Link>
                <p className="text-lg leading-relaxed text-ink-soft">
                  {blog.snippet}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
