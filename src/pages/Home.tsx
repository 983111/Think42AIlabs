import { Link } from 'react-router-dom';
import { Users, FileText, Trophy, BookOpen, Code, Lightbulb, Flag, ArrowRight, Cog, Camera, HeartPulse, ShieldAlert, Cpu } from 'lucide-react';
import { SEO } from '../components/SEO';

export function Home() {
  return (
    <div className="bg-[#FAFAFA]">
      <SEO 
        title="Home" 
        description="Welcome to NovaMind AI Society. Building AI. Conducting Research. Creating Open Source. Learning Together." 
      />
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-5 lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              Building the future with intelligence.
            </h1>
            <p className="mt-6 text-base text-gray-500 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0">
              NovaMind AI Society is a student-driven community advancing artificial intelligence through research, innovation, and real-world impact.
            </p>
            <div className="mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc20sMqe1_0s0vcYX6DzaokctBi1ZHL1GJ2n63FozV5QtQI7A/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-lg bg-black px-6 py-3 text-base font-medium text-white hover:bg-gray-800"
              >
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <Link
                to="/projects"
                className="mt-3 flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0"
              >
                Explore Projects
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
               <div className="flex -space-x-2">
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
               </div>
               <p className="text-sm text-gray-500 text-left">
                 Join a community of<br/>passionate builders and researchers.
               </p>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-7 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-2xl shadow-lg lg:max-w-md xl:max-w-xl overflow-hidden aspect-[4/3] bg-gray-100">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Students collaborating"
              />
              <div className="absolute inset-0 bg-gray-900/5 mix-blend-multiply"></div>
              <div className="absolute top-8 right-8 text-right bg-white/80 backdrop-blur-sm p-4 rounded-xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                  Research.<br/>Build.<br/>Solve.<br/>Together.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-y border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
           <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
             <div className="flex flex-col items-center">
               <Users className="h-6 w-6 text-gray-900 mb-3" />
               <span className="font-bold text-gray-900">Growing</span>
               <span className="text-sm text-gray-500 mt-1">Members</span>
             </div>
             <div className="flex flex-col items-center">
               <BookOpen className="h-6 w-6 text-gray-900 mb-3" />
               <span className="font-bold text-gray-900">Growing</span>
               <span className="text-sm text-gray-500 mt-1">Projects</span>
             </div>
             <div className="flex flex-col items-center">
               <FileText className="h-6 w-6 text-gray-900 mb-3" />
               <span className="font-bold text-gray-900">Growing</span>
               <span className="text-sm text-gray-500 mt-1">Research Papers</span>
             </div>
             <div className="flex flex-col items-center">
               <Trophy className="h-6 w-6 text-gray-900 mb-3" />
               <span className="font-bold text-gray-900">Growing</span>
               <span className="text-sm text-gray-500 mt-1">Achievements</span>
             </div>
           </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="bg-[#FAFAFA] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What We Do</h2>
            <p className="mt-4 text-base leading-7 text-gray-600 max-w-lg mx-auto">
              We bring together curious minds to learn, research, build, and share knowledge in AI and emerging technologies.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {[
                { name: 'Research', icon: Lightbulb, description: 'Explore cutting-edge AI research through reading groups, discussions, and original projects.' },
                { name: 'Build', icon: Code, description: 'Build real-world AI solutions and open-source tools that create meaningful impact.' },
                { name: 'Collaborate', icon: Users, description: 'Collaborate with peers, mentors, and experts from diverse backgrounds and disciplines.' },
                { name: 'Learn', icon: BookOpen, description: 'Learn through workshops, talks, hands-on sessions, and practical experience.' },
                { name: 'Lead', icon: Flag, description: 'Take initiative, lead teams, organize events, and contribute to the community.' },
              ].map((item) => (
                <div key={item.name} className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-gray-100 bg-gray-50">
                    <item.icon className="h-6 w-6 text-gray-700" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-semibold leading-7 text-gray-900">{item.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600 flex-auto">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#FAFAFA] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 border-t border-gray-200 pt-16">
            
            {/* Focus Areas */}
            <div>
               <h3 className="text-lg font-bold text-gray-900 mb-6">Current Focus Areas</h3>
               <ul className="space-y-4 divide-y divide-gray-100 border-t border-gray-100">
                  {[
                    { name: 'Machine Learning', icon: Cog },
                    { name: 'Natural Language Processing', icon: FileText },
                    { name: 'Computer Vision', icon: Camera },
                    { name: 'AI for Healthcare', icon: HeartPulse },
                    { name: 'Robotics & Automation', icon: Cpu },
                    { name: 'AI Safety & Ethics', icon: ShieldAlert }
                  ].map(area => (
                    <Link to="/projects" key={area.name} className="pt-4 flex items-center justify-between group cursor-pointer">
                      <div className="flex items-center gap-3">
                         <div className="flex items-center justify-center">
                           <area.icon className="h-5 w-5 text-gray-400 group-hover:text-gray-900 transition-colors" />
                         </div>
                         <span className="text-sm font-medium text-gray-900">{area.name}</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-gray-900 transition-colors" />
                    </Link>
                  ))}
               </ul>
               <Link to="/projects" className="mt-8 inline-flex items-center text-sm font-semibold text-gray-900 hover:text-gray-600">
                 View all research areas <ArrowRight className="ml-1 h-4 w-4" />
               </Link>
            </div>

            {/* Latest Blog */}
            <div>
               <h3 className="text-lg font-bold text-gray-900 mb-6">Latest from the Blog</h3>
               <div className="space-y-6 border-t border-gray-100 pt-4">
                 {[
                   { title: 'How Students Can Start AI Research Without Prior Experience', date: 'May 12, 2026', read: '8 min read', img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=200&q=80' },
                   { title: 'AI Engineering vs AI Research: Key Differences Explained', date: 'May 05, 2026', read: '10 min read', img: 'https://images.unsplash.com/photo-1555949963-aa79dcee57d5?auto=format&fit=crop&w=200&q=80' },
                   { title: 'Roadmap to Becoming an AI Engineer in College', date: 'Apr 28, 2026', read: '12 min read', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=200&q=80' },
                 ].map(blog => (
                   <Link to="/blogs" key={blog.title} className="flex items-center gap-6 group cursor-pointer">
                      <img src={blog.img} alt="" className="h-20 w-24 sm:w-32 rounded-lg object-cover bg-gray-100" />
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 group-hover:text-gray-600 line-clamp-2">{blog.title}</h4>
                        <div className="mt-2 flex items-center text-xs text-gray-500 gap-2">
                           <span>{blog.date}</span>
                           <span>•</span>
                           <span>{blog.read}</span>
                        </div>
                      </div>
                   </Link>
                 ))}
               </div>
               <Link to="/blogs" className="mt-8 inline-flex items-center text-sm font-semibold text-gray-900 hover:text-gray-600">
                 View all blogs <ArrowRight className="ml-1 h-4 w-4" />
               </Link>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

