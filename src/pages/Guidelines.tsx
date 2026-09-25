import { SEO } from '../components/SEO';

const sections = [
  {
    title: '1. Commitment',
    items: [
      'Contribute consistently to your assigned project.',
      'Complete assigned tasks before deadlines.',
      'Attend scheduled meetings whenever possible.',
      'Inform your team lead in advance if you are unavailable.',
      'Stay active for the duration of the project.',
    ],
  },
  {
    title: '2. Professional communication',
    items: [
      'Communicate respectfully with all team members.',
      'Maintain a professional tone in messages and meetings.',
      'Respond to important messages within a reasonable timeframe.',
      'Support teammates and encourage constructive discussion.',
    ],
    note: 'Disrespectful behavior, harassment, or repeated unprofessional conduct will not be tolerated.',
  },
  {
    title: '3. Project responsibilities',
    items: [
      'Understand your assigned project.',
      'Complete weekly tasks and milestones.',
      'Test your work before submission.',
      'Maintain clean, readable code.',
      'Document your contributions when required.',
    ],
  },
  {
    title: '4. Meetings',
    items: [
      'Attend team meetings and review sessions.',
      'Participate actively during discussions.',
      'Come prepared with progress updates.',
      'Notify your team lead if you cannot attend.',
    ],
  },
  {
    title: '5. Collaboration',
    items: [
      'Work collaboratively with teammates.',
      'Review and give feedback when requested.',
      'Help solve technical challenges together.',
      'Respect different opinions and ideas.',
    ],
  },
  {
    title: '6. Communication platforms',
    items: [],
    note: 'The official communication platforms are Telegram and WhatsApp. Joining both groups is mandatory. Announcements, meeting links, task assignments, and deadlines are shared only through these channels.',
  },
  {
    title: '7. Code quality',
    items: [
      'Follow project coding standards.',
      'Use GitHub for version control.',
      'Write meaningful commit messages.',
      "Submit work through the team's workflow.",
      'Keep repositories organized and documented.',
    ],
  },
  {
    title: '8. Deadlines',
    items: [],
    note: 'Meeting deadlines is essential. If more time is needed, tell your team lead before the deadline, not after. Repeated missed deadlines without prior communication may affect continued participation.',
  },
  {
    title: '9. Integrity',
    items: [
      'Produce original work.',
      'Give proper credit when using external resources.',
      'Avoid plagiarism.',
      'Maintain honesty in reporting progress.',
    ],
  },
  {
    title: '10. Growth mindset',
    items: [
      'Ask questions.',
      'Learn new technologies.',
      'Share knowledge with teammates.',
      'Take initiative.',
      'Continuously improve your technical and collaborative skills.',
    ],
  },
  {
    title: 'Program timeline',
    items: [
      'Project onboarding and introductions — before July 15.',
      'Team introductions and orientation sessions — before July 15.',
      'Weekly workflow distribution — before July 15.',
      'Official project development begins — July 15.',
      'Weekly sprint meetings and progress reviews — ongoing.',
    ],
  },
];

export function Guidelines() {
  return (
    <div className="bg-paper px-6 py-24 sm:py-28 lg:px-8">
      <SEO title="Guidelines & Code of Conduct" description="Member guidelines and code of conduct for Think 42 AI lab." />
      <div className="mx-auto max-w-2xl">
        <h1 className="font-serif text-4xl text-ink sm:text-5xl">Member guidelines</h1>
        <p className="mt-6 text-xl leading-8 text-ink-soft">
          Our community is built around collaboration, research, and building technology with real impact. Every member is expected to contribute consistently and act professionally throughout the program.
        </p>

        <div className="mt-14">
          {sections.map((s) => (
            <div key={s.title} className="py-8 border-t border-line last:border-b">
              <h2 className="font-serif text-xl text-ink">{s.title}</h2>
              {s.items.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="text-sm leading-6 text-ink-soft pl-4 border-l border-line">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {s.note && <p className="mt-4 text-sm leading-6 text-ink-soft">{s.note}</p>}
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm leading-6 text-ink-soft">
          We look forward to building impactful projects together and fostering a community where everyone can learn, contribute, and grow.
        </p>
      </div>
    </div>
  );
}
