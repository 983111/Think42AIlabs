import { SEO } from '../components/SEO';

export function Guidelines() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <SEO title="Guidelines & Code of Conduct" description="Member guidelines and code of conduct for Think 42 AI lab." />
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Member Guidelines & Code of Conduct</h1>
        <p className="mt-6 text-xl leading-8 text-gray-700">
          Welcome to Think 42 AI lab. Our community is built around collaboration, innovation, research, and building technology that creates real-world impact. Every member is expected to maintain professionalism and contribute consistently throughout the program.
        </p>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">1. Commitment</h2>
        <ul role="list" className="mt-4 list-disc space-y-2 pl-6">
          <li>Contribute consistently to their assigned project.</li>
          <li>Complete assigned tasks before deadlines.</li>
          <li>Attend scheduled meetings whenever possible.</li>
          <li>Inform their Team Lead in advance if they are unavailable.</li>
          <li>Stay active throughout the duration of the project.</li>
        </ul>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">2. Professional Communication</h2>
        <ul role="list" className="mt-4 list-disc space-y-2 pl-6">
          <li>Communicate respectfully with all team members.</li>
          <li>Maintain a professional tone in all messages and meetings.</li>
          <li>Respond to important messages within a reasonable timeframe.</li>
          <li>Support teammates and encourage constructive discussions.</li>
        </ul>
        <p className="mt-4">Disrespectful behavior, harassment, or repeated unprofessional conduct will not be tolerated.</p>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">3. Project Responsibilities</h2>
        <ul role="list" className="mt-4 list-disc space-y-2 pl-6">
          <li>Understanding their assigned project.</li>
          <li>Completing weekly tasks and milestones.</li>
          <li>Testing their work before submission.</li>
          <li>Maintaining clean and readable code.</li>
          <li>Documenting their contributions when required.</li>
        </ul>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">4. Meetings</h2>
        <ul role="list" className="mt-4 list-disc space-y-2 pl-6">
          <li>Attend team meetings and review sessions.</li>
          <li>Participate actively during discussions.</li>
          <li>Come prepared with progress updates.</li>
          <li>Notify their Team Lead if they cannot attend.</li>
        </ul>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">5. Collaboration</h2>
        <ul role="list" className="mt-4 list-disc space-y-2 pl-6">
          <li>Work collaboratively with teammates.</li>
          <li>Review and provide feedback when requested.</li>
          <li>Help solve technical challenges together.</li>
          <li>Respect different opinions and ideas.</li>
        </ul>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">6. Communication Platforms</h2>
        <p className="mt-4">The official communication platforms are Telegram and WhatsApp. Joining both groups is mandatory. Important announcements, meeting links, task assignments, deadlines, and updates will only be shared through these channels.</p>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">7. Code Quality</h2>
        <ul role="list" className="mt-4 list-disc space-y-2 pl-6">
          <li>Follow project coding standards.</li>
          <li>Use GitHub for version control.</li>
          <li>Write meaningful commit messages.</li>
          <li>Submit work through the team's workflow.</li>
          <li>Keep repositories organized and documented.</li>
        </ul>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">8. Deadlines</h2>
        <p className="mt-4">Meeting deadlines is essential. If additional time is required, members should inform their Team Lead before the deadline rather than after it has passed. Repeated missed deadlines without prior communication may affect continued participation.</p>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">9. Integrity</h2>
        <ul role="list" className="mt-4 list-disc space-y-2 pl-6">
          <li>Produce original work.</li>
          <li>Give proper credit when using external resources.</li>
          <li>Avoid plagiarism.</li>
          <li>Maintain honesty in reporting progress.</li>
        </ul>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">10. Growth Mindset</h2>
        <p className="mt-4">Think 42 AI lab values learning. Members are encouraged to:</p>
        <ul role="list" className="mt-4 list-disc space-y-2 pl-6">
          <li>Ask questions.</li>
          <li>Learn new technologies.</li>
          <li>Share knowledge with teammates.</li>
          <li>Take initiative.</li>
          <li>Continuously improve their technical and collaborative skills.</li>
        </ul>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Program Timeline</h2>
        <ul role="list" className="mt-4 list-disc space-y-2 pl-6">
          <li>Project onboarding and introductions: Before 15 July</li>
          <li>Team introductions and orientation sessions: Before 15 July</li>
          <li>Weekly workflow distribution: Before 15 July</li>
          <li>Official project development begins: 15 July</li>
          <li>Weekly sprint meetings and progress reviews: Ongoing throughout the program.</li>
        </ul>
        <p className="mt-4 pb-12">
          We look forward to building impactful projects together and fostering a collaborative environment where everyone can learn, contribute, and grow.
        </p>
      </div>
    </div>
  );
}
