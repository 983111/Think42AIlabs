import React from 'react';
import { SEO } from '../components/SEO';
import { Users, Cpu, Shield, Code, Globe } from 'lucide-react';

interface Member {
  name: string;
  role: string;
}

interface Team {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  colorClass: {
    badge: string;
    avatar: string;
    text: string;
    border: string;
    hoverBorder: string;
  };
  members: Member[];
}

export function Leadership() {
  const teams: Team[] = [
    {
      id: 'leadership',
      name: 'Core Leadership & Operations',
      description: 'Steering the overall vision, operational alignment, and strategic growth of the organization.',
      icon: Shield,
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
      icon: Cpu,
      colorClass: {
        badge: 'bg-purple-50 text-purple-700 border-purple-200',
        avatar: 'bg-purple-50 border-purple-100 text-purple-600',
        text: 'text-purple-600',
        border: 'border-gray-100',
        hoverBorder: 'hover:border-purple-200',
      },
      members: [
        { name: 'Muhammad Safwan Ahmad Saffi', role: 'Research Member' },
        { name: 'harshit', role: 'Research Member' },
        { name: 'Lamar Ahmed Al-Labban', role: 'Research Member' },
        { name: 'Muhammad Abdullah', role: 'Research Member' }
      ]
    },
    {
      id: 'ml',
      name: 'Machine Learning Team',
      description: 'Developing and training sophisticated machine learning algorithms and deep neural networks to solve complex problems.',
      icon: Users,
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
        { name: 'Owojori Oluwajuwonlo Emmanuel', role: 'Team Member' },
        { name: 'Thisum Samarasinghe', role: 'Team Member' },
        { name: 'Schalom GANDONOU', role: 'Team Member' },
        { name: 'Tanishka Arora', role: 'Team Member' },
        { name: 'Habib Bashir Lawal', role: 'Team Member' }
      ]
    },
    {
      id: 'swe',
      name: 'Software Engineering Team',
      description: 'Building reliable, scalable, and production-quality software architectures and system-level applications.',
      icon: Code,
      colorClass: {
        badge: 'bg-amber-50 text-amber-700 border-amber-200',
        avatar: 'bg-amber-50 border-amber-100 text-amber-600',
        text: 'text-amber-600',
        border: 'border-gray-100',
        hoverBorder: 'hover:border-amber-200',
      },
      members: [
        { name: 'Vieira Isimbi Ntwali', role: 'Vice President of Organization' },
        { name: 'Syrin Alabrach', role: 'Team Leader & Design Lead' },
        { name: 'Kundan Kumar', role: 'Team Member' },
        { name: 'Chukwuma Pascal Onuoha', role: 'Team Member' },
        { name: 'Ishimwe bonheur', role: 'Team Member' },
        { name: 'Iragena Aime Divin', role: 'Team Member' }
      ]
    },
    {
      id: 'web',
      name: 'Web Development Team',
      description: 'Crafting highly polished, accessible, and user-centric web platforms and interactive applications.',
      icon: Globe,
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
                  className="flex flex-col items-center justify-between rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm hover:shadow-md hover:border-gray-300 transition-all cursor-pointer group"
                >
                  <div className={`rounded-lg p-2 ${team.colorClass.avatar} mb-3 group-hover:scale-110 transition-transform`}>
                    <team.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-bold text-gray-900 line-clamp-1">{team.name.replace(' Team', '')}</span>
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
                  <div className={`rounded-xl p-3 border ${team.colorClass.avatar}`}>
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
                      <div className={`h-12 w-12 rounded-full border flex items-center justify-center font-bold text-base flex-shrink-0 select-none ${team.colorClass.avatar}`}>
                        {member.name.charAt(0).toUpperCase()}
                      </div>
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
