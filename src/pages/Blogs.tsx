import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export function Blogs() {
  const posts = [
    {
      title: 'Roadmap to Becoming an AI Engineer During College',
      description: 'A comprehensive guide on what mathematics to learn, which frameworks to master, and how to build a portfolio that stands out.',
      date: 'Latest',
      readTime: '15 min read',
    },
    {
      title: 'Difference Between AI Engineering and AI Research',
      description: 'Understanding the distinct career paths, required skill sets, and daily responsibilities of engineers versus researchers in the AI industry.',
      date: 'Recent',
      readTime: '12 min read',
    },
    {
      title: 'How Students Can Start AI Research Without Prior Experience',
      description: 'Actionable steps for undergraduates to read papers, replicate results, and contribute to research labs even if they are just starting out.',
      date: 'Archive',
      readTime: '10 min read',
    }
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <SEO title="Blogs" description="Read insights, tutorials, and career advice written by the members of the NovaMind AI Society." />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Society Blog</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Insights, tutorials, and career advice written by our members and leadership team.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="flex flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.date} className="text-gray-500">
                  {post.date}
                </time>
                <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                  {post.readTime}
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link to="#">
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
