import React from 'react';
import { SEO } from '../components/SEO';

interface Member {
  name: string;
  role: string;
  image?: string; // path to photo, e.g. '/images/team/first-last.jpg'. Leave undefined to show the monogram tile.
}

interface Team {
  id: string;
  name: string;
  description: string;
  icon: (props: { className?: string }) => React.JSX.Element;
  colorClass: {
    badge: string;
    text: string;
    border: string;
    hoverBorder: string;
    ring: string;
    gradient: string;
    iconWrap: string;
  };
  members: Member[];
}

// Custom high-end premium geometric emblems to replace generic basic icons
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

export function Leadership() {
  const teams: Team[] = [
    {
      id: 'research',
      name: 'AI Research Team',
      description: 'Advancing the frontiers of artificial intelligence through scholarly publications, paper replications, and foundational research.',
      icon: ResearchLogo,
      colorClass: {
        badge: 'bg-purple-50 text-purple-700 border-purple-200',
        text: 'text-purple-700',
        border: 'border-gray-100',
        hoverBorder: 'hover:border-purple-300',
        ring: 'ring-purple-100 group-hover:ring-purple-300',
        gradient: 'from-purple-500 via-purple-600 to-indigo-700',
        iconWrap: 'bg-purple-50 border-purple-100 text-purple-600',
      },
      members: [
        { name: 'Muhammad Safwan Ahmad Saffi', role: 'Research Member', image: '/images/team/muhammad-safwan-ahmad-saffi.jpg' },
        { name: 'Habib Bashir Lawal', role: 'Research Member', image: '/images/team/Habib Bashir Lawal.jpg' },
        { name: 'Anirudh Nallajarla', role: 'Research Member' },
        { name: 'Schalom GANDONOU', role: 'Team Leader' },
        { name: 'Lamar Ahmed Al-Labban', role: 'Research Member' },
        { name: 'Thisum Samarasinghe', role: 'Research Member' },
        { name: 'Om Mahadik', role: 'Research Member', image: '/images/team/Om Mahadik.jpg' },
        { name: 'Eugene Mutuyimana', role: 'Research Member', image: '/images/team/Eugene Mutuyimana.jpg' },
        { name: 'Owojori Oluwajuwonlo Emmanuel', role: 'Research Member', image: '/images/team/Owojori Oluwajuwonlo Emmanuel.jpg' }
      ]
    },
    {
      id: 'ml',
      name: 'Machine Learning Team',
      description: 'Developing and training sophisticated machine learning algorithms and deep neural networks to solve complex problems.',
      icon: MLLogo,
      colorClass: {
        badge: 'bg-rose-50 text-rose-700 border-rose-200',
        text: 'text-rose-700',
        border: 'border-gray-100',
        hoverBorder: 'hover:border-rose-300',
        ring: 'ring-rose-100 group-hover:ring-rose-300',
        gradient: 'from-rose-500 via-rose-600 to-orange-600',
        iconWrap: 'bg-rose-50 border-rose-100 text-rose-600',
      },
      members: [
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
        text: 'text-amber-700',
        border: 'border-gray-100',
        hoverBorder: 'hover:border-amber-300',
        ring: 'ring-amber-100 group-hover:ring-amber-300',
        gradient: 'from-amber-500 via-amber-600 to-yellow-600',
        iconWrap: 'bg-amber-50 border-amber-100 text-amber-600',
      },
      members: [
        { name: 'KALIZA Esther', role: 'Team Member', image: '/images/team/KALIZA Esther.jpg' },
        { name: 'Ishimwe Bonheur', role: 'Team Leader' },
        { name: 'Vieira Isimbi Ntwali', role: 'Team Member' },
        { name: 'Syrin Alabrach', role: 'Team Leader', image: '/images/team/Syrin Alabrach.jpg' },
        { name: 'Kundan Kumar', role: 'Team Member', image: '/images/team/Kundan Kumar.jpg' },
        { name: 'Jean Pierre Hitayezu', role: 'Team Member', image: '/images/team/Jean Pierre Hitayezu.jpg' },
        { name: 'Jackson NSANZIMANA', role: 'Team Member', image: '/images/team/Jackson NSANZIMANA.jpg' }
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
      <SEO title="Members" description="Meet the core team driving the vision and operations of Think 42 AI lab." />

      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24 border-b border-gray-100">
        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-200/40 via-rose-200/30 to-amber-200/40 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gray-500 shadow-sm">
              The People Behind Think 42
            </span>
            <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Society Members
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Meet the collaborative teams of builders, researchers, and innovators driving the vision and operations of Think 42 AI lab.
            </p>
          </div>

          {/* Quick Stats & Navigation Row */}
          <div className="mx-auto mt-12 max-w-4xl">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest text-center mb-6">
              Track Team Composition &bull; {totalMembers} Core Contributors
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {teams.map((team) => (
                <button
                  key={team.id}
                  onClick={() => scrollToTeam(team.id)}
                  className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 text-left shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-gray-300"
                >
                  <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border ${team.colorClass.iconWrap} transition-transform duration-300 group-hover:scale-110`}>
                    <team.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-gray-900">{team.name.replace(' Team', '')}</p>
                    <span className={`mt-1 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold border ${team.colorClass.badge}`}>
                      {team.members.length} {team.members.length === 1 ? 'member' : 'members'}
                    </span>
                  </div>
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
            <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-4 lg:gap-x-12">

              {/* Left Column: Team Identity & Description */}
              <div className="lg:col-span-1 lg:pr-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl border ${team.colorClass.iconWrap}`}>
                  <team.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-2xl font-bold tracking-tight text-gray-900">
                  {team.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {team.description}
                </p>
                <span className={`mt-5 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold border ${team.colorClass.badge}`}>
                  {team.members.length} Active {team.members.length === 1 ? 'Contributor' : 'Contributors'}
                </span>
              </div>

              {/* Right Column: Grid of Members */}
              <div className="lg:col-span-3">
                <ul role="list" className="grid grid-cols-2 gap-5 sm:grid-cols-3 xl:grid-cols-4">
                  {team.members.map((member) => (
                    <li
                      key={member.name}
                      className={`group relative overflow-hidden rounded-2xl border ${team.colorClass.border} ${team.colorClass.hoverBorder} bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                    >
                      <div className={`relative aspect-square w-full overflow-hidden ring-1 ring-inset ${team.colorClass.ring} transition-all duration-300`}>
                        {member.image ? (
                          <img
                            src={member.image}
                            alt={member.name}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${team.colorClass.gradient}`}>
                            <span className="font-serif text-4xl font-semibold text-white/90">
                              {member.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-3.5">
                        <h4 className="text-sm font-bold leading-tight tracking-tight text-gray-900 line-clamp-2">
                          {member.name}
                        </h4>
                        <p className={`mt-1 text-[11px] font-semibold uppercase tracking-wide ${team.colorClass.text}`}>
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
