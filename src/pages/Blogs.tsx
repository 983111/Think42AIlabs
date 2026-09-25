import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Share2, ChevronRight, Bookmark } from 'lucide-react';
import { SEO } from '../components/SEO';

interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  readTime: string;
  author: string;
  role: string;
  img: string;
  category: string;
  content: React.ReactNode;
}

export function Blogs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeSlug = searchParams.get('post');

  // Smooth scroll to top when changing active blog post
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSlug]);

  const posts: BlogPost[] = [
    {
      slug: 'start-ai-research',
      title: 'How Students Can Start AI Research Without Prior Experience',
      subtitle: 'A beginner-friendly playbook for undergraduates to transition from consumers of AI to active contributors in scientific research labs.',
      description: 'Actionable steps for undergraduates to read papers, replicate results, and contribute to research labs even if they are just starting out.',
      date: 'May 12, 2026',
      readTime: '8 min read',
      author: 'Muhammad Safwan',
      role: 'AI Research Team Member',
      img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      category: 'Research',
      content: (
        <div className="prose-page max-w-none text-ink-soft">
          <p className="text-lg leading-8 text-ink-soft mb-8 italic">
            "Scientific research is not reserved for elite doctoral candidates. As an undergraduate student, you possess the most valuable assets in the scientific ecosystem: raw curiosity, unscheduled creative blocks of time, and the willingness to learn from failure."
          </p>

          <h3 className="font-serif text-xl text-ink mt-8 mb-4">Demystifying AI Research</h3>
          <p className="mb-4">
            Many students believe that entering artificial intelligence research requires advanced mathematics degrees or millions of dollars in compute budget. In reality, the most impactful research often begins with a simple question: <em>"Why does this model fail on this specific edge case?"</em> or <em>"Can we make this inference pipeline 10% more efficient?"</em>
          </p>
          <p className="mb-6">
            In this guide, we break down an actionable, step-by-step framework for undergraduate students to bootstrap their research skills from absolute scratch.
          </p>

          <div className="my-8 p-6 border-l-2 border-accent bg-accent-soft/40">
            <h4 className="font-bold text-ink mb-2">The Golden Rule of Research</h4>
            <p className="text-sm text-ink-soft">
              Do not start by trying to invent a brand-new neural network architecture. Start by deeply understanding and replicating why existing architectures work. Replications are the gateway to original research.
            </p>
          </div>

          <h3 className="font-serif text-xl text-ink mt-8 mb-4">Step 1: Cultivating the Prerequisites</h3>
          <p className="mb-4">
            You do not need to master entire textbooks before starting. Instead, target your math and programming fundamentals:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Linear Algebra:</strong> Vectors, matrices, matrix multiplication, and eigenvalues (the literal gears of neural networks).</li>
            <li><strong>Calculus:</strong> Partial derivatives, the chain rule, and gradient descent (how models learn).</li>
            <li><strong>Programming:</strong> Clean Python, and the basics of PyTorch or JAX.</li>
          </ul>

          <h3 className="font-serif text-xl text-ink mt-8 mb-4">Step 2: Mastering the Art of Reading Papers</h3>
          <p className="mb-4">
            Do not read papers chronologically like a novel. Instead, adopt a multi-pass approach:
          </p>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li><strong>First Pass:</strong> Read the Abstract, Introduction, and examine the figures. Understand the "Why" and the "What".</li>
            <li><strong>Second Pass:</strong> Read the Conclusion and Section Headers. Skip the heavy mathematical proofs for now.</li>
            <li><strong>Third Pass:</strong> Dive into the Methodology and Experiments. Analyze what baselines they compared against.</li>
          </ol>

          <h3 className="font-serif text-xl text-ink mt-8 mb-4">Step 3: Replicating State-of-the-Art (SOTA) Results</h3>
          <p className="mb-4">
            Go to <a href="https://paperswithcode.com" target="_blank" rel="noopener noreferrer" className="link-accent">Papers with Code</a>, find an interesting paper in a domain you like (e.g., Image Segmentation or Sentence Embeddings), clone their repository, and try to replicate the accuracy reported in their tables. 
          </p>
          <p className="mb-4">
            You will quickly learn that model replication is highly non-trivial. Tuning random seeds, learning rate schedules, and data pipelines is where true research intuition is earned.
          </p>

          <h3 className="font-serif text-xl text-ink mt-8 mb-4">Step 4: Reach Out to Mentors</h3>
          <p className="mb-4">
            Once you have successfully replicated a paper's results, write a short, highly professional 1-page summary of your replication, along with 2 suggestions for potential extensions. Send this to researchers and local student groups like <strong>Think 42 AI lab</strong>. You will be shocked by how eager researchers are to collaborate with students who take proactive, self-directed initiative!
          </p>
        </div>
      )
    },
    {
      slug: 'ai-engineering-vs-research',
      title: 'Difference Between AI Engineering and AI Research',
      subtitle: 'Understanding the distinct career paths, required skill sets, and daily responsibilities of engineers versus researchers in the AI industry.',
      description: 'Understanding the distinct career paths, required skill sets, and daily responsibilities of engineers versus researchers in the AI industry.',
      date: 'May 05, 2026',
      readTime: '10 min read',
      author: 'Lamar Ahmed',
      role: 'AI Research Team Member',
      img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80',
      category: 'Careers',
      content: (
        <div className="prose-page max-w-none text-ink-soft">
          <p className="text-lg leading-8 text-ink-soft mb-8 italic">
            "The AI revolution requires both the scientists who map out physical laws and the engineers who design the supersonic aircraft. One discovers, the other delivers."
          </p>

          <h3 className="font-serif text-xl text-ink mt-8 mb-4">The Great Divide in Artificial Intelligence</h3>
          <p className="mb-4">
            As AI matures from academic curiosities into robust industrial applications, a clear division of labor has emerged. Many students enter the field unsure of whether they want to be an <strong>AI Researcher</strong> or an <strong>AI Engineer</strong>. Understanding this distinction is crucial to tailoring your studies and portfolio.
          </p>

          <h3 className="font-serif text-xl text-ink mt-8 mb-4">1. AI Researchers: Pushing the Scientific Frontier</h3>
          <p className="mb-4">
            AI Researchers focus on expanding human knowledge. They ask fundamental questions: Can we train a network with 90% fewer parameters? Can we mathematically prove that a model generalizes to unseen domains?
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Primary Goal:</strong> Inventing novel algorithms, architectures, and theoretical frameworks.</li>
            <li><strong>Output:</strong> Academic publications (at venues like NeurIPS, ICML, CVPR, ACL), patents, and open-source models.</li>
            <li><strong>Daily Routine:</strong> Mathematical derivations, running multi-day experiment pipelines on computing clusters, analyzing model weights, and drafting papers in LaTeX.</li>
            <li><strong>Core Stack:</strong> PyTorch, JAX, NumPy, LaTeX, High-Performance GPU Environments.</li>
          </ul>

          <h3 className="font-serif text-xl text-ink mt-8 mb-4">2. AI Engineers: Turning Science into Scale</h3>
          <p className="mb-4">
            AI Engineers focus on creating reliable, fast, and scalable applications using models. They take raw weights and integrate them into enterprise software.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Primary Goal:</strong> Speed, cost-efficiency, integration, and user-facing value.</li>
            <li><strong>Output:</strong> High-performance APIs, real-time RAG (Retrieval-Augmented Generation) systems, optimized models running on edge devices, and production inference engines.</li>
            <li><strong>Daily Routine:</strong> Constructing data pipelines, optimizing inference latency, hosting models on cloud servers, prompt engineering, and designing user interfaces.</li>
            <li><strong>Core Stack:</strong> Python, TypeScript, Docker, FastAPI, Vector Databases (Pinecone, PGVector), LangChain, Hugging Face, AWS/GCP.</li>
          </ul>

          <h3 className="font-serif text-xl text-ink mt-8 mb-4">A Comparative Summary</h3>
          <div className="overflow-x-auto my-8 border border-line">
            <table className="min-w-full divide-y divide-line">
              <thead className="bg-paper">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-ink-faint">Dimension</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-ink-faint">AI Researcher</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-ink-faint">AI Engineer</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-line text-sm">
                <tr>
                  <td className="px-6 py-4 font-medium text-ink">Primary Objective</td>
                  <td className="px-6 py-4">Discovery of new principles / architectures</td>
                  <td className="px-6 py-4">Delivery of functional, scalable applications</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-ink">Success Metric</td>
                  <td className="px-6 py-4">Academic citations, paper acceptance</td>
                  <td className="px-6 py-4">User satisfaction, system uptime, cost/latency</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-ink">Typical Degree</td>
                  <td className="px-6 py-4">PhD or Research Masters</td>
                  <td className="px-6 py-4">Bachelors in Computer Science / Engineering</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-ink">Key Focus</td>
                  <td className="px-6 py-4">Model performance, mathematical bounds</td>
                  <td className="px-6 py-4">API stability, fine-tuning, system safety</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-serif text-xl text-ink mt-8 mb-4">Conclusion: Which One Should You Choose?</h3>
          <p className="mb-4">
            If you are deeply motivated by abstract problem solving, reading research papers, and writing proofs, you will love <strong>AI Research</strong>. If you are a builder who gets excited about deploying real products, watching users interact with your software, and making code run faster, <strong>AI Engineering</strong> is your calling.
          </p>
        </div>
      )
    },
    {
      slug: 'roadmap-to-ai-engineer',
      title: 'Roadmap to Becoming an AI Engineer During College',
      subtitle: 'The step-by-step masterplan to building a world-class portfolio, mastering core machine learning workflows, and landing high-impact AI Engineering roles.',
      description: 'A comprehensive guide on what mathematics to learn, which frameworks to master, and how to build a portfolio that stands out.',
      date: 'Apr 28, 2026',
      readTime: '12 min read',
      author: 'James Chan',
      role: 'Web Development Team Member',
      img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80',
      category: 'Education',
      content: (
        <div className="prose-page max-w-none text-ink-soft">
          <p className="text-lg leading-8 text-ink-soft mb-8 italic">
            "You don't need a PhD to build remarkable AI systems. You need solid software engineering habits, a fundamental grasp of model behavior, and a portfolio that proves you can build real things."
          </p>

          <h3 className="font-serif text-xl text-ink mt-8 mb-4">The Golden Age of the Builder</h3>
          <p className="mb-4">
            There has never been a better time to study software engineering. The rise of pre-trained Foundation Models (LLMs, vision models) means that single developers can now construct features that previously required entire research departments.
          </p>
          <p className="mb-4">
            This guide outlines an exhaustive, term-by-term roadmap to becoming a highly competitive, production-ready AI Engineer before you even graduate.
          </p>

          <h3 className="font-serif text-xl text-ink mt-8 mb-4">Phase 1: Deep Software Engineering Fundamentals</h3>
          <p className="mb-4">
            Before adding "AI" to your title, you must be a competent software engineer. Write clean, modular, and maintainable code.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Master the Languages:</strong> Learn Python for model pipelines and TypeScript for robust application code.</li>
            <li><strong>Version Control:</strong> Master Git, branching strategies, and collaborative pull requests.</li>
            <li><strong>API Paradigms:</strong> Learn how to build and consume RESTful APIs and handle asynchronous operations perfectly.</li>
          </ul>

          <h3 className="font-serif text-xl text-ink mt-8 mb-4">Phase 2: Applied Machine Learning & NLP Stack</h3>
          <p className="mb-4">
            Learn the basics of training and manipulating models. Avoid treated models as black boxes:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Classical ML:</strong> Scikit-Learn for tabular data, clustering, and regressions.</li>
            <li><strong>Deep Learning:</strong> PyTorch fundamentals (Tensors, backward passes, loss calculations).</li>
            <li><strong>Transformers & Embeddings:</strong> Dive deep into the Hugging Face ecosystem. Understand how tokenizers map text to high-dimensional space.</li>
          </ul>

          <h3 className="font-serif text-xl text-ink mt-8 mb-4">Phase 3: Building AI Apps at Scale</h3>
          <p className="mb-4">
            This is where you differentiate yourself. Anyone can write a prompt; AI Engineers build robust, resilient systems:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Retrieval-Augmented Generation (RAG):</strong> Set up vector databases (like Milvus or Qdrant), write intelligent chunking algorithms, and manage prompt context.</li>
            <li><strong>Fine-Tuning:</strong> Learn Parameter-Efficient Fine-Tuning (PEFT/LoRA) to adapt open-source models (like Llama) to custom tasks.</li>
            <li><strong>Agentic Workflows:</strong> Study multi-agent paradigms, tool usage (function calling), and stateful conversation managers.</li>
          </ul>

          <h3 className="font-serif text-xl text-ink mt-8 mb-4">Your Next Move</h3>
          <p className="mb-4">
            Do not learn in isolation. The fastest way to level up is to work with others on multi-disciplinary platforms. Apply your skills today by joining our teams at <strong>Think 42 AI lab</strong>!
          </p>
        </div>
      )
    }
  ];

  const handlePostClick = (slug: string) => {
    setSearchParams({ post: slug });
  };

  const handleBack = () => {
    setSearchParams({});
  };

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (activeSlug) {
      setIsBookmarked(localStorage.getItem(`bookmark_${activeSlug}`) === 'true');
      setIsCopied(false);
    }
  }, [activeSlug]);

  const handleToggleBookmark = () => {
    if (!activeSlug) return;
    const nextState = !isBookmarked;
    localStorage.setItem(`bookmark_${activeSlug}`, String(nextState));
    setIsBookmarked(nextState);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const activePost = posts.find(p => p.slug === activeSlug);

  return (
    <div className="bg-white min-h-screen">
      {activePost ? (
        // Detailed Article View
        <article className="py-24 sm:py-28 bg-paper">
          <SEO title={`${activePost.title} | Blog`} description={activePost.description} />
          <div className="mx-auto max-w-2xl px-6 lg:px-8">
            
            {/* Back Navigation */}
            <button 
              onClick={handleBack}
              className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink mb-10 transition-colors group cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to blog
            </button>

            {/* Category & Read Time */}
            <p className="index-mark mb-4">{activePost.category} · {activePost.readTime}</p>

            {/* Article Titles */}
            <h1 className="font-serif text-3xl text-ink sm:text-4xl leading-tight">
              {activePost.title}
            </h1>
            <p className="mt-4 text-lg text-ink-soft leading-8">
              {activePost.subtitle}
            </p>

            {/* Author */}
            <div className="mt-8 flex items-center gap-4 border-y border-line py-5 my-10">
              <div>
                <span className="block text-sm text-ink">{activePost.author}</span>
                <span className="block text-xs text-ink-faint">{activePost.role}</span>
              </div>
              <div className="ml-auto flex items-center gap-2 text-ink-faint">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">{activePost.date}</span>
              </div>
            </div>

            {/* Article Core Content */}
            <div className="mt-8">
              {activePost.content}
            </div>

            {/* Bottom Sharing Action */}
            <div className="mt-16 border-t border-line pt-8 flex items-center justify-between">
              <button 
                onClick={handleToggleBookmark}
                className="flex items-center gap-2 group cursor-pointer focus:outline-none select-none"
              >
                <Bookmark 
                  className={`h-4 w-4 transition-colors ${
                    isBookmarked ? 'text-accent fill-accent' : 'text-ink-faint group-hover:text-ink'
                  }`} 
                />
                <span className={`text-xs transition-colors ${isBookmarked ? 'text-accent' : 'text-ink-faint group-hover:text-ink'}`}>
                  {isBookmarked ? 'Bookmarked' : 'Bookmark'}
                </span>
              </button>
              <button 
                onClick={handleShare}
                className={`inline-flex items-center gap-2 text-sm transition-colors ${
                  isCopied ? 'text-accent' : 'text-ink hover:text-accent'
                }`}
              >
                <Share2 className="h-4 w-4" />
                {isCopied ? 'Link copied' : 'Share this article'}
              </button>
            </div>

          </div>
        </article>
      ) : (
        // Standard Blog Roll view
        <div className="py-24 sm:py-28">
          <SEO title="Blogs & Insights" description="Read insights, tutorials, and career advice written by the members of Think 42 AI lab." />
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="max-w-xl">
              <h1 className="font-serif text-4xl text-ink sm:text-5xl">Blog</h1>
              <p className="mt-6 text-lg leading-8 text-ink-soft">
                Notes, tutorials, and career advice written by lab members.
              </p>
            </div>

            <div className="mt-16">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-8 py-8 border-t border-line last:border-b cursor-pointer"
                  onClick={() => handlePostClick(post.slug)}
                >
                  <div className="sm:col-span-3">
                    <p className="index-mark">{post.date}</p>
                    <p className="index-mark mt-1">{post.category} · {post.readTime}</p>
                  </div>
                  <div className="sm:col-span-9">
                    <h3 className="font-serif text-xl text-ink group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-ink-soft max-w-xl">
                      {post.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-xs text-ink-faint">
                      <span>By {post.author}</span>
                      <span className="inline-flex items-center gap-1 text-ink group-hover:text-accent group-hover:translate-x-1 transition-transform">
                        Read <ChevronRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
