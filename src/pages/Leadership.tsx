import { SEO } from '../components/SEO';

export function Leadership() {
  const members = [
    { name: 'Muhammad Safwan Ahmad Saffi', role: 'Member - AI Research Team' },
    { name: 'harshit', role: 'Member - AI Research Team' },
    { name: 'Salim Suleiman Sani', role: 'Operations Lead - Whole Organization' },
    { name: 'Abdoul Aziz Taro', role: 'Engineering Lead - Whole Organization' },
    { name: 'Lamar Ahmed Al-Labban', role: 'Member - AI Research Team' },
    { name: 'James Chan', role: 'Member - Web Development Team' },
    { name: 'Muhammad Abdullah', role: 'Member - AI Research Team' },
    { name: 'Alnoor Ismail', role: 'Member - Machine Learning Team' },
    { name: 'Vieira Isimbi Ntwali', role: 'Vice President of Organization - Software Engineering Team' },
    { name: 'Owojori Oluwajuwonlo Emmanuel', role: 'Member - Machine Learning Team' },
    { name: 'Thisum Samarasinghe', role: 'Member - Machine Learning Team' },
    { name: 'Rahul Singh', role: 'Member - Web Development Team' },
    { name: 'Rihal Ahmed', role: 'Design Lead - Web Development Team' },
    { name: 'Anuj kumar', role: 'Team Leader - Machine Learning Team' },
    { name: 'Syrin Alabrach', role: 'Team Leader / Design Lead - Software Engineering Team' },
    { name: 'Schalom GANDONOU', role: 'Member - Machine Learning Team' },
    { name: 'Tanishka Arora', role: 'Member - Machine Learning Team' },
    { name: 'Kundan Kumar', role: 'Member - Software Engineering Team' },
    { name: 'Habib Bashir Lawal', role: 'Member - Machine Learning Team' },
    { name: 'Chukwuma Pascal Onuoha', role: 'Member - Software Engineering Team' },
    { name: 'Ishimwe bonheur', role: 'Member - Software Engineering Team' },
    { name: 'Ishimwe Sibomana Bienvenu', role: 'Member - Web Development Team' },
    { name: 'Iragena Aime Divin', role: 'Member - Software Engineering Team' },
    { name: 'Habimana Happy Ntaganira', role: 'Member - Web Development Team' },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <SEO title="Members" description="Meet the core team driving the vision and operations of the NovaMind AI Society." />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Members</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Meet the core team driving the vision and operations of the NovaMind AI Society.
          </p>
        </div>
        <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 text-center">
          {members.map((member) => (
            <li key={member.name} className="flex flex-col items-center border border-gray-100 rounded-2xl p-6 bg-[#FAFAFA]">
              <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                 <span className="text-gray-500 font-medium text-xl">{member.name.charAt(0).toUpperCase()}</span>
              </div>
              <h3 className="mt-2 text-base font-semibold leading-7 tracking-tight text-gray-900">{member.name}</h3>
              <p className="text-sm leading-6 text-blue-600 mt-1">{member.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
