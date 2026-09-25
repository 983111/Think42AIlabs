import React from 'react';
import { SEO } from '../components/SEO';

interface Member {
  name: string;
  role: string;
  image?: string;
}

interface Team {
  id: string;
  name: string;
  description: string;
  icon: (props: { className?: string }) => React.JSX.Element;
  members: Member[];
}

function ResearchLogo({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
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
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
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
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
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
      description: 'Advancing the frontiers of artificial intelligence through papers, replications, and foundational research.',
      icon: ResearchLogo,
      members: [
        { name: 'Muhammad Safwan Ahmad Saffi', role: 'Research Member', image: '/images/team/muhammad-safwan-ahmad-saffi.jpg' },
        { name: 'Habib Bashir Lawal', role: 'Research Member', image: '/images/team/Habib Bashir Lawal.jpg' },
        { name: 'Anirudh Nallajarla', role: 'Research Member' },
        { name: 'Schalom GANDONOU', role: 'Team Leader' },
        { name: 'Lamar Ahmed Al-Labban', role: 'Research Member' },
        { name: 'Thisum Samarasinghe', role: 'Research Member' },
        { name: 'Om Mahadik', role: 'Research Member', image: '/images/team/Om Mahadik.jpg' },
        { name: 'Eugene Mutuyimana', role: 'Research Member', image: '/images/team/Eugene Mutuyimana.jpg' },
        { name: 'Owojori Oluwajuwonlo Emmanuel', role: 'Research Member', image: '/images/team/Owojori Oluwajuwonlo Emmanuel.jpg' },
      ],
    },
    {
      id: 'ml',
      name: 'Machine Learning Team',
      description: 'Developing and training machine learning algorithms and neural networks to solve applied problems.',
      icon: MLLogo,
      members: [
        { name: 'Sagid Abdulla MohammedAli', role: 'Team Member' },
      ],
    },
    {
      id: 'swe',
      name: 'Software Engineering Team',
      description: 'Building reliable, scalable, production-quality software and system-level applications.',
      icon: SWELogo,
      members: [
        { name: 'KALIZA Esther', role: 'Team Member', image: '/images/team/KALIZA Esther.jpg' },
        { name: 'Ishimwe Bonheur', role: 'Team Leader' },
        { name: 'Vieira Isimbi Ntwali', role: 'Team Member' },
        { name: 'Syrin Alabrach', role: 'Team Leader', image: '/images/team/Syrin Alabrach.jpg' },
        { name: 'Kundan Kumar', role: 'Team Member', image: '/images/team/Kundan Kumar.jpg' },
        { name: 'Jean Pierre Hitayezu', role: 'Team Member', image: '/images/team/Jean Pierre Hitayezu.jpg' },
        { name: 'Jackson NSANZIMANA', role: 'Team Member', image: '/images/team/Jackson NSANZIMANA.jpg' },
      ],
    },
  ];

  const totalMembers = teams.reduce((acc, t) => acc + t.members.length, 0);

  const scrollToTeam = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-paper min-h-screen">
      <SEO title="Members" description="Meet the core team driving the vision and operations of Think 42 AI lab." />

      {/* Header */}
      <div className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-xl">
            <h1 className="font-serif text-4xl text-ink sm:text-5xl">Members</h1>
            <p className="mt-5 text-lg leading-8 text-ink-soft">
              {totalMembers} people across three teams building and researching together.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 border-t border-line">
            {teams.map((team) => (
              <button
                key={team.id}
                onClick={() => scrollToTeam(team.id)}
                className="group flex items-center gap-4 py-5 sm:px-6 text-left border-b sm:border-b-0 sm:border-r last:border-r-0 border-line hover:bg-accent-soft/40 transition-colors"
              >
                <team.icon className="h-6 w-6 text-ink flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm text-ink truncate">{team.name.replace(' Team', '')}</p>
                  <p className="text-xs text-ink-faint mt-0.5">{team.members.length} {team.members.length === 1 ? 'member' : 'members'}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Teams */}
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        {teams.map((team, ti) => (
          <section key={team.id} id={team.id} className={`scroll-mt-24 grid grid-cols-1 lg:grid-cols-4 gap-y-8 gap-x-12 py-14 ${ti !== 0 ? 'border-t border-line' : ''}`}>
            <div className="lg:col-span-1">
              <team.icon className="h-8 w-8 text-ink" />
              <h2 className="mt-4 font-serif text-2xl text-ink">{team.name}</h2>
              <p className="mt-3 text-sm leading-6 text-ink-soft">{team.description}</p>
              <p className="mt-4 text-xs text-ink-faint">{team.members.length} {team.members.length === 1 ? 'contributor' : 'contributors'}</p>
            </div>

            <div className="lg:col-span-3">
              <ul className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8">
                {team.members.map((member) => (
                  <li key={member.name}>
                    <div className="aspect-square w-full border border-line overflow-hidden bg-accent-soft/40">
                      {member.image ? (
                        <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <span className="font-serif text-3xl text-ink/70">{member.name.charAt(0).toUpperCase()}</span>
                        </div>
                      )}
                    </div>
                    <h3 className="mt-2.5 text-sm text-ink leading-tight">{member.name}</h3>
                    <p className="mt-0.5 text-xs text-ink-faint">{member.role}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
