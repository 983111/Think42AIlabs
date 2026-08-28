import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, Calendar, User, Share2, ChevronRight, Bookmark } from 'lucide-react';
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
        <div className="prose prose-blue max-w-none text-gray-700">
          <p className="text-lg leading-8 text-gray-600 mb-8 font-light italic">
            "Scientific research is not reserved for elite doctoral candidates. As an undergraduate student, you possess the most valuable assets in the scientific ecosystem: raw curiosity, unscheduled creative blocks of time, and the willingness to learn from failure."
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Demystifying AI Research</h3>
          <p className="mb-4">
            Many students believe that entering artificial intelligence research requires advanced mathematics degrees or millions of dollars in compute budget. In reality, the most impactful research often begins with a simple question: <em>"Why does this model fail on this specific edge case?"</em> or <em>"Can we make this inference pipeline 10% more efficient?"</em>
          </p>
          <p className="mb-6">
            In this guide, we break down an actionable, step-by-step framework for undergraduate students to bootstrap their research skills from absolute scratch.
          </p>

          <div className="my-8 p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
            <h4 className="font-bold text-gray-900 mb-2">The Golden Rule of Research</h4>
            <p className="text-sm text-gray-700">
              Do not start by trying to invent a brand-new neural network architecture. Start by deeply understanding and replicating why existing architectures work. Replications are the gateway to original research.
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Step 1: Cultivating the Prerequisites</h3>
          <p className="mb-4">
            You do not need to master entire textbooks before starting. Instead, target your math and programming fundamentals:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Linear Algebra:</strong> Vectors, matrices, matrix multiplication, and eigenvalues (the literal gears of neural networks).</li>
            <li><strong>Calculus:</strong> Partial derivatives, the chain rule, and gradient descent (how models learn).</li>
            <li><strong>Programming:</strong> Clean Python, and the basics of PyTorch or JAX.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Step 2: Mastering the Art of Reading Papers</h3>
          <p className="mb-4">
            Do not read papers chronologically like a novel. Instead, adopt a multi-pass approach:
          </p>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li><strong>First Pass:</strong> Read the Abstract, Introduction, and examine the figures. Understand the "Why" and the "What".</li>
            <li><strong>Second Pass:</strong> Read the Conclusion and Section Headers. Skip the heavy mathematical proofs for now.</li>
            <li><strong>Third Pass:</strong> Dive into the Methodology and Experiments. Analyze what baselines they compared against.</li>
          </ol>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Step 3: Replicating State-of-the-Art (SOTA) Results</h3>
          <p className="mb-4">
            Go to <a href="https://paperswithcode.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Papers with Code</a>, find an interesting paper in a domain you like (e.g., Image Segmentation or Sentence Embeddings), clone their repository, and try to replicate the accuracy reported in their tables. 
          </p>
          <p className="mb-4">
            You will quickly learn that model replication is highly non-trivial. Tuning random seeds, learning rate schedules, and data pipelines is where true research intuition is earned.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Step 4: Reach Out to Mentors</h3>
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
        <div className="prose prose-blue max-w-none text-gray-700">
          <p className="text-lg leading-8 text-gray-600 mb-8 font-light italic">
            "The AI revolution requires both the scientists who map out physical laws and the engineers who design the supersonic aircraft. One discovers, the other delivers."
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">The Great Divide in Artificial Intelligence</h3>
          <p className="mb-4">
            As AI matures from academic curiosities into robust industrial applications, a clear division of labor has emerged. Many students enter the field unsure of whether they want to be an <strong>AI Researcher</strong> or an <strong>AI Engineer</strong>. Understanding this distinction is crucial to tailoring your studies and portfolio.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. AI Researchers: Pushing the Scientific Frontier</h3>
          <p className="mb-4">
            AI Researchers focus on expanding human knowledge. They ask fundamental questions: Can we train a network with 90% fewer parameters? Can we mathematically prove that a model generalizes to unseen domains?
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Primary Goal:</strong> Inventing novel algorithms, architectures, and theoretical frameworks.</li>
            <li><strong>Output:</strong> Academic publications (at venues like NeurIPS, ICML, CVPR, ACL), patents, and open-source models.</li>
            <li><strong>Daily Routine:</strong> Mathematical derivations, running multi-day experiment pipelines on computing clusters, analyzing model weights, and drafting papers in LaTeX.</li>
            <li><strong>Core Stack:</strong> PyTorch, JAX, NumPy, LaTeX, High-Performance GPU Environments.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. AI Engineers: Turning Science into Scale</h3>
          <p className="mb-4">
            AI Engineers focus on creating reliable, fast, and scalable applications using models. They take raw weights and integrate them into enterprise software.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Primary Goal:</strong> Speed, cost-efficiency, integration, and user-facing value.</li>
            <li><strong>Output:</strong> High-performance APIs, real-time RAG (Retrieval-Augmented Generation) systems, optimized models running on edge devices, and production inference engines.</li>
            <li><strong>Daily Routine:</strong> Constructing data pipelines, optimizing inference latency, hosting models on cloud servers, prompt engineering, and designing user interfaces.</li>
            <li><strong>Core Stack:</strong> Python, TypeScript, Docker, FastAPI, Vector Databases (Pinecone, PGVector), LangChain, Hugging Face, AWS/GCP.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">A Comparative Summary</h3>
          <div className="overflow-x-auto my-8 border border-gray-200 rounded-2xl">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Dimension</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">AI Researcher</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">AI Engineer</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 text-sm">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Primary Objective</td>
                  <td className="px-6 py-4">Discovery of new principles / architectures</td>
                  <td className="px-6 py-4">Delivery of functional, scalable applications</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Success Metric</td>
                  <td className="px-6 py-4">Academic citations, paper acceptance</td>
                  <td className="px-6 py-4">User satisfaction, system uptime, cost/latency</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Typical Degree</td>
                  <td className="px-6 py-4">PhD or Research Masters</td>
                  <td className="px-6 py-4">Bachelors in Computer Science / Engineering</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Key Focus</td>
                  <td className="px-6 py-4">Model performance, mathematical bounds</td>
                  <td className="px-6 py-4">API stability, fine-tuning, system safety</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Conclusion: Which One Should You Choose?</h3>
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
        <div className="prose prose-blue max-w-none text-gray-700">
          <p className="text-lg leading-8 text-gray-600 mb-8 font-light italic">
            "You don't need a PhD to build remarkable AI systems. You need solid software engineering habits, a fundamental grasp of model behavior, and a portfolio that proves you can build real things."
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">The Golden Age of the Builder</h3>
          <p className="mb-4">
            There has never been a better time to study software engineering. The rise of pre-trained Foundation Models (LLMs, vision models) means that single developers can now construct features that previously required entire research departments.
          </p>
          <p className="mb-4">
            This guide outlines an exhaustive, term-by-term roadmap to becoming a highly competitive, production-ready AI Engineer before you even graduate.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Phase 1: Deep Software Engineering Fundamentals</h3>
          <p className="mb-4">
            Before adding "AI" to your title, you must be a competent software engineer. Write clean, modular, and maintainable code.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Master the Languages:</strong> Learn Python for model pipelines and TypeScript for robust application code.</li>
            <li><strong>Version Control:</strong> Master Git, branching strategies, and collaborative pull requests.</li>
            <li><strong>API Paradigms:</strong> Learn how to build and consume RESTful APIs and handle asynchronous operations perfectly.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Phase 2: Applied Machine Learning & NLP Stack</h3>
          <p className="mb-4">
            Learn the basics of training and manipulating models. Avoid treated models as black boxes:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Classical ML:</strong> Scikit-Learn for tabular data, clustering, and regressions.</li>
            <li><strong>Deep Learning:</strong> PyTorch fundamentals (Tensors, backward passes, loss calculations).</li>
            <li><strong>Transformers & Embeddings:</strong> Dive deep into the Hugging Face ecosystem. Understand how tokenizers map text to high-dimensional space.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Phase 3: Building AI Apps at Scale</h3>
          <p className="mb-4">
            This is where you differentiate yourself. Anyone can write a prompt; AI Engineers build robust, resilient systems:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Retrieval-Augmented Generation (RAG):</strong> Set up vector databases (like Milvus or Qdrant), write intelligent chunking algorithms, and manage prompt context.</li>
            <li><strong>Fine-Tuning:</strong> Learn Parameter-Efficient Fine-Tuning (PEFT/LoRA) to adapt open-source models (like Llama) to custom tasks.</li>
            <li><strong>Agentic Workflows:</strong> Study multi-agent paradigms, tool usage (function calling), and stateful conversation managers.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Your Next Move</h3>
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
        <article className="py-24 sm:py-32 bg-white">
          <SEO title={`${activePost.title} | Blog`} description={activePost.description} />
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            
            {/* Back Navigation */}
            <button 
              onClick={handleBack}
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-blue-600 mb-8 transition-colors group cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to society blog
            </button>

            {/* Category & Read Time badge */}
            <div className="flex items-center gap-x-4 text-xs mb-6">
              <span className="rounded-full bg-blue-50 px-3 py-1.5 font-semibold text-blue-600 border border-blue-100">
                {activePost.category}
              </span>
              <span className="flex items-center gap-1.5 text-gray-500">
                <Clock className="h-3.5 w-3.5" />
                {activePost.readTime}
              </span>
            </div>

            {/* Article Titles */}
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl leading-tight">
              {activePost.title}
            </h1>
            <p className="mt-4 text-xl text-gray-500 font-light leading-8">
              {activePost.subtitle}
            </p>

            {/* Author Profile Card */}
            <div className="mt-8 flex items-center gap-4 border-y border-gray-100 py-6 my-10">
              <div className="h-12 w-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center font-bold text-blue-600 text-lg">
                {activePost.author.charAt(0)}
              </div>
              <div>
                <span className="block font-semibold text-gray-900">{activePost.author}</span>
                <span className="block text-xs text-gray-500">{activePost.role}</span>
              </div>
              <div className="ml-auto flex gap-4 text-gray-400">
                <Calendar className="h-5 w-5" />
                <span className="text-sm text-gray-500">{activePost.date}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden mb-12 bg-gray-100 border border-gray-100">
              <img 
                src={activePost.img} 
                alt={activePost.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Article Core HTML/React Content */}
            <div className="mt-8">
              {activePost.content}
            </div>

            {/* Bottom Sharing Action */}
            <div className="mt-16 border-t border-gray-100 pt-8 flex items-center justify-between">
              <button 
                onClick={handleToggleBookmark}
                className="flex items-center gap-2 group cursor-pointer focus:outline-none select-none"
              >
                <Bookmark 
                  className={`h-5 w-5 transition-all duration-300 ${
                    isBookmarked 
                      ? 'text-yellow-500 fill-yellow-500 scale-110' 
                      : 'text-gray-400 group-hover:text-gray-900 group-hover:scale-110'
                  }`} 
                />
                <span className={`text-xs font-medium transition-colors ${isBookmarked ? 'text-yellow-600' : 'text-gray-500 group-hover:text-gray-900'}`}>
                  {isBookmarked ? 'Bookmarked for later!' : 'Bookmark for later'}
                </span>
              </button>
              <button 
                onClick={handleShare}
                className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${
                  isCopied 
                    ? 'text-green-600 scale-105' 
                    : 'text-gray-900 hover:text-blue-600'
                }`}
              >
                <Share2 className={`h-4 w-4 ${isCopied ? 'text-green-600' : ''}`} />
                {isCopied ? 'Link Copied!' : 'Share this article'}
              </button>
            </div>

          </div>
        </article>
      ) : (
        // Standard Blog Roll view
        <div className="py-24 sm:py-32">
          <SEO title="Blogs & Insights" description="Read insights, tutorials, and career advice written by the members of Think 42 AI lab." />
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Society Blog</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Insights, structured tutorials, and professional career advice authored directly by our members and development teams.
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
                <article 
                  key={post.slug} 
                  className="flex flex-col items-start justify-between border border-gray-100 rounded-2xl p-6 bg-[#FAFAFA] hover:shadow-md transition-all duration-300 group cursor-pointer"
                  onClick={() => handlePostClick(post.slug)}
                >
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-6 bg-gray-100">
                    <img 
                      src={post.img} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-blue-600 border border-blue-50 shadow-sm">
                      {post.category}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.date} className="text-gray-500">
                      {post.date}
                    </time>
                    <span className="relative z-10 rounded-full bg-white px-2.5 py-1 font-medium text-gray-600 border border-gray-100">
                      {post.readTime}
                    </span>
                  </div>
                  
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-bold leading-6 text-gray-900 group-hover:text-blue-600 transition-colors">
                      <span className="absolute inset-0" />
                      {post.title}
                    </h3>
                    <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600">
                      {post.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-gray-100 pt-4 w-full flex items-center justify-between text-xs text-gray-500">
                    <span className="font-medium text-gray-700">By {post.author}</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-700 group-hover:translate-x-1 transition-transform">
                      Read Article <ChevronRight className="h-3.5 w-3.5" />
                    </span>
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
