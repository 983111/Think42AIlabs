import { SEO } from '../components/SEO';

export function Leadership() {
  const leaders = [
    { name: 'Your profile', role: 'President', status: 'Active' },
    { name: 'Applications Open', role: 'Vice President', status: 'Recruiting' },
    { name: 'Applications Open', role: 'Research Lead', status: 'Recruiting' },
    { name: 'Applications Open', role: 'Engineering Lead', status: 'Recruiting' },
    { name: 'Applications Open', role: 'Community Lead', status: 'Recruiting' },
    { name: 'Applications Open', role: 'Operations Lead', status: 'Recruiting' },
    { name: 'Applications Open', role: 'Design Lead', status: 'Recruiting' },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <SEO title="Leadership" description="Meet the core team driving the vision and operations of the NovaMind AI Society." />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Leadership</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Meet the core team driving the vision and operations of the NovaMind AI Society. We are currently recruiting passionate individuals for several leadership positions.
          </p>
        </div>
        <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {leaders.map((leader) => (
            <li key={leader.role}>
              <div className="h-48 w-full rounded-2xl bg-gray-100 flex items-center justify-center border border-gray-200">
                 <span className="text-gray-400 font-medium">{leader.status === 'Recruiting' ? 'Join Us' : 'Profile Image'}</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{leader.name}</h3>
              <p className="text-base leading-7 text-blue-600">{leader.role}</p>
              {leader.status === 'Recruiting' && (
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  We are actively looking for a dedicated student to take on this role.
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
