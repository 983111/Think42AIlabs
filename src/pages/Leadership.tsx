import React from 'react';
import { SEO } from '../components/SEO';

interface Member {
  name: string;
  role: string;
  image?: string; // path to photo, e.g. '/images/team/first-last.jpg'. Leave undefined to show initials.
}

interface Team {
  id: string;
  name: string;
  description: string;
  icon: (props: { className?: string }) => React.JSX.Element;
  colorClass: {
    badge: string;
    avatar: string;
    text: string;
    border: string;
    hoverBorder: string;
  };
  members: Member[];
}

// Custom high-end premium geometric emblems to replace generic basic icons
function LeadershipLogo({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={`${className} transition-all duration-300`} fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="50,15 82,32 82,68 50,85 18,68 18,32" strokeLinecap="round" strokeLinejoin="round" />
      <polygon points="50,22 76,37 76,63 50,78 24,63 24,37" strokeLinecap="round" strokeLinejoin="round" className="opacity-40" />
      <path d="M50,36 L53,46 L63,49 L53,52 L50,62 L47,52 L37,49 L47,46 Z" fill="currentColor" />
    </svg>
  );
}

function ResearchLogo({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={`${className} transition-all duration-300`} fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="50" cy="50" r="36" className="opacity-20" />
      <ellipse cx="50" cy="50" rx="36" ry="12" transform="rotate(35 50 50)" />
      <ellipse cx="50" cy="50" rx="36" ry="12" transform="rotate(-35 50 50)" />
      <circle cx="50" cy="50" r="8" fill="currentColor" />
      <circle cx="19" cy="30" r="4.5" fill="currentColor" />
      <circle cx="81" cy="70" r="4.5" fill="currentColor" />
    </svg>
  );
}

function MLLogo({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={`${className} transition-all duration-300`} fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="30" cy="30" r="5" fill="currentColor" />
      <circle cx="30" cy="50" r="5" fill="currentColor" />
      <circle cx="30" cy="70" r="5" fill="currentColor" />
      
      <circle cx="70" cy="40" r="5" fill="currentColor" />
      <circle cx="70" cy="60" r="5" fill="currentColor" />
      
      <line x1="35" y1="30" x2="65" y2="40" strokeLinecap="round" className="opacity-60" />
      <line x1="35" y1="50" x2="65" y2="40" strokeLinecap="round" />
      <line x1="35" y1="70" x2="65" y2="40" strokeLinecap="round" className="opacity-40" />
      <line x1="35" y1="30" x2="65" y2="60" strokeLinecap="round" className="opacity-40" />
      <line x1="35" y1="50" x2="65" y2="60" strokeLinecap="round" />
      <line x1="35" y1="70" x2="65" y2="60" strokeLinecap="round" className="opacity-60" />
    </svg>
  );
}

function SWELogo({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={`${className} transition-all duration-300`} fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="50,16 84,35 84,65 50,84 16,65 16,35" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16,35 L50,54 L84,35" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M50,54 V84" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="50" cy="34" r="3.5" fill="currentColor" />
      <circle cx="33" cy="62" r="3.5" fill="currentColor" />
      <circle cx="67" cy="62" r="3.5" fill="currentColor" />
    </svg>
  );
}

function WebLogo({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={`${className} transition-all duration-300`} fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="50" cy="50" r="35" />
      <circle cx="50" cy="50" r="18" strokeDasharray="3 3" />
      <line x1="15" y1="50" x2="85" y2="50" />
      <line x1="50" y1="15" x2="50" y2="85" />
      <path d="M25,25 C35,35 65,35 75,25" strokeLinecap="round" className="opacity-60" />
      <path d="M25,75 C35,65 65,65 75,75" strokeLinecap="round" className="opacity-60" />
    </svg>
  );
}

export function Leadership() {
  const teams: Team[] = [
    {
      id: 'leadership',
      name: 'Core Leadership & Operations',
      description: 'Steering the overall vision, operational alignment, and strategic growth of the organization.',
      icon: LeadershipLogo,
      colorClass: {
        badge: 'bg-indigo-50 text-indigo-700 border-indigo-200',
        avatar: 'bg-indigo-50 border-indigo-100 text-indigo-600',
        text: 'text-indigo-600',
        border: 'border-gray-100',
        hoverBorder: 'hover:border-indigo-200',
      },
      members: [
        { name: 'Salim Suleiman Sani', role: 'Operations Lead' },
        { name: 'Abdoul Aziz Taro', role: 'Engineering Lead' }
      ]
    },
    {
      id: 'research',
      name: 'AI Research Team',
      description: 'Advancing the frontiers of artificial intelligence through scholarly publications, paper replications, and foundational research.',
      icon: ResearchLogo,
      colorClass: {
        badge: 'bg-purple-50 text-purple-700 border-purple-200',
        avatar: 'bg-purple-50 border-purple-100 text-purple-600',
        text: 'text-purple-600',
        border: 'border-gray-100',
        hoverBorder: 'hover:border-purple-200',
      },
      members: [
        { name: 'Muhammad Safwan Ahmad Saffi', role: 'Research Member', image: '/images/team/muhammad-safwan-ahmad-saffi.jpg' },
        { name: 'Harshit', role: 'Research Member' },
        { name: 'Lamar Ahmed Al-Labban', role: 'Research Member' },
        { name: 'Muhammad Abdullah', role: 'Research Member' },
        { name: 'Mutuyimana Eugene', role: 'Research Member', image: '/images/team/Eugene Mutuyimana.jpg' },
        // --- Added from interest-form responses ---
        { name: 'Anirudh Nallajarla', role: 'Research Member' },
        { name: 'Om Mahadik', role: 'Research Member', image: '/images/team/Om Mahadik.jpg' }
      ]
    },
    {
      id: 'ml',
      name: 'Machine Learning Team',
      description: 'Developing and training sophisticated machine learning algorithms and deep neural networks to solve complex problems.',
      icon: MLLogo,
      colorClass: {
        badge: 'bg-rose-50 text-rose-700 border-rose-200',
        avatar: 'bg-rose-50 border-rose-100 text-rose-600',
        text: 'text-rose-600',
        border: 'border-gray-100',
        hoverBorder: 'hover:border-rose-200',
      },
      members: [
        { name: 'Anuj kumar', role: 'Team Leader' },
        { name: 'Alnoor Ismail', role: 'Team Member' },
        { name: 'Owojori Oluwajuwonlo Emmanuel', role: 'Team Member', image: '/images/team/Owojori Oluwajuwonlo Emmanuel.jpg' },
        { name: 'Thisum Samarasinghe', role: 'Team Member' },
        { name: 'Schalom GANDONOU', role: 'Team Member' },
        { name: 'Tanishka Arora', role: 'Team Member' },
        { name: 'Habib Bashir Lawal', role: 'Team Member', image: '/images/team/Habib Bashir Lawal.jpg' },
        // --- Added from interest-form responses ---
        { name: 'Sagid Abdulla MohammedAli', role: 'Team Member' }
      ]
    },
    {
      id: 'swe',
      name: 'Software Engineering Team',
      description: 'Building reliable, scalable, and production-quality software architectures and system-level applications.',
      icon: SWELogo,
      colorClass: {
        badge: 'bg-amber-50 text-amber-700 border-amber-200',
        avatar: 'bg-amber-50 border-amber-100 text-amber-600',
        text: 'text-amber-600',
        border: 'border-gray-100',
        hoverBorder: 'hover:border-amber-200',
      },
      members: [
        { name: 'Vieira Isimbi Ntwali', role: 'Vice President of Organization' },
        { name: 'Syrin Alabrach', role: 'Team Leader & Design Lead', image: '/images/team/Syrin Alabrach.jpg' },
        { name: 'Kundan Kumar', role: 'Team Member', image: '/images/team/Kundan Kumar.jpg' },
        { name: 'Chukwuma Pascal Onuoha', role: 'Team Member' },
        { name: 'Ishimwe Bonheur', role: 'Team Member' },
        { name: 'Iragena Aime Divin', role: 'Team Member' },
        { name: 'Nyampundu Belyse', role: 'Team Member' },
        // --- Added from interest-form responses ---
        { name: 'KALIZA Esther', role: 'Team Member', image: '/images/team/KALIZA Esther.jpg' },
        { name: 'Jean Pierre Hitayezu', role: 'Team Member', image: '/images/team/Jean Pierre Hitayezu.jpg' },
        { name: 'Jackson NSANZIMANA', role: 'Team Member', image: '/images/team/Jackson NSANZIMANA.jpg' }
      ]
    },
    {
      id: 'web',
      name: 'Web Development Team',
      description: 'Crafting highly polished, accessible, and user-centric web platforms and interactive applications.',
      icon: WebLogo,
      colorClass: {
        badge: 'bg-teal-50 text-teal-700 border-teal-200',
        avatar: 'bg-teal-50 border-teal-100 text-teal-600',
        text: 'text-teal-600',
        border: 'border-gray-100',
        hoverBorder: 'hover:border-teal-200',
      },
      members: [
        { name: 'Rihal Ahmed', role: 'Design Lead' },
        { name: 'James Chan', role: 'Team Member' },
        { name: 'Rahul Singh', role: 'Team Member' },
        { name: 'Ishimwe Sibomana Bienvenu', role: 'Team Member' },
        { name: 'Habimana Happy Ntaganira', role: 'Team Member' }
      ]
    }
  ];

  const totalMembers = teams.reduce((acc, t) => acc + t.members.length, 0);

  const scrollToTeam = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO title="Members" description="Meet the core team driving the vision and operations of the NovaMind AI Society." />
      
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Society Members
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Meet the collaborative teams of builders, researchers, and innovators driving the vision and operations of the NovaMind AI Society.
            </p>
          </div>

          {/* Quick Stats & Navigation Row */}
          <div className="mx-auto mt-12 max-w-5xl">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest text-center mb-6">
              Track Team Composition &bull; {totalMembers} Core Contributors
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {teams.map((team) => (
                <button
                  key={team.id}
                  onClick={() => scrollToTeam(team.id)}
                  className="flex flex-col items-center justify-between rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm hover:shadow-md hover:border-gray-300 transition-all cursor-pointer group text-left"
                >
                  <div className={`rounded-lg p-2.5 ${team.colorClass.avatar} mb-3 group-hover:scale-110 transition-all duration-300 flex items-center justify-center`}>
                    <team.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-bold text-gray-900 line-clamp-1 text-center">{team.name.replace(' Team', '')}</span>
                  <span className={`mt-2 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold border ${team.colorClass.badge}`}>
                    {team.members.length} {team.members.length === 1 ? 'member' : 'members'}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Structured Team Sections */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 space-y-24">
        {teams.map((team) => (
          <section 
            key={team.id} 
            id={team.id} 
            className="scroll-mt-24 border-t border-gray-100 pt-16 first:border-t-0 first:pt-0"
          >
            <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-3 lg:gap-x-12">
              
              {/* Left Column: Team Identity & Description */}
              <div className="lg:pr-8">
                <div className="flex items-center gap-3">
                  <div className={`rounded-xl p-3 border ${team.colorClass.avatar} flex items-center justify-center`}>
                    <team.icon className="h-6 w-6" />
                  </div>
                  <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold border ${team.colorClass.badge}`}>
                    {team.members.length} Active {team.members.length === 1 ? 'Contributor' : 'Contributors'}
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {team.name}
                </h3>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  {team.description}
                </p>
              </div>

              {/* Right Column: Grid of Members */}
              <div className="lg:col-span-2">
                <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {team.members.map((member) => (
                    <li 
                      key={member.name} 
                      className={`flex items-center gap-x-4 rounded-2xl border ${team.colorClass.border} ${team.colorClass.hoverBorder} bg-[#FAFAFA] p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:bg-white`}
                    >
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className={`h-12 w-12 rounded-full border object-cover flex-shrink-0 ${team.colorClass.avatar}`}
                        />
                      ) : (
                        <div className={`h-12 w-12 rounded-full border flex items-center justify-center font-bold text-base flex-shrink-0 select-none ${team.colorClass.avatar}`}>
                          {member.name.charAt(0).toUpperCase()}
                        </div>
                      )}
                      <div className="min-w-0">
                        <h4 className="text-base font-bold tracking-tight text-gray-900 truncate">
                          {member.name}
                        </h4>
                        <p className={`text-xs font-semibold mt-0.5 ${team.colorClass.text}`}>
                          {member.role}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
