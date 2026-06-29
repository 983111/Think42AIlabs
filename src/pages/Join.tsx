import React, { useState } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { SEO } from '../components/SEO';
import { FAQ, FAQItem } from '../components/FAQ';

const joinFAQs: FAQItem[] = [
  {
    question: "Do I need prior AI experience to join?",
    answer: "No prior AI experience is required for entry-level member positions! We have teams for all skill levels, and our reading groups are designed to get you up to speed. For leadership roles, specific experience may be preferred."
  },
  {
    question: "What is the expected weekly time commitment?",
    answer: "Members typically spend 5-10 hours per week attending meetings, working on projects, and reading research papers. Leadership roles may require 10-15 hours per week."
  },
  {
    question: "Can non-Computer Science majors apply?",
    answer: "Absolutely! AI is highly interdisciplinary. We welcome students from mathematics, physics, biology, economics, and other fields who have an interest in applying AI to their domain."
  },
  {
    question: "How long does the application process take?",
    answer: "Once you submit your application, our team will review it within 1-2 weeks. If selected to move forward, you will be invited for a brief conversational interview."
  }
];

export function Join() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', universityId: '', department: '', year: '', cgpa: '',
    linkedin: '', github: '', portfolio: '', position: 'Member', team: '', experience: '',
    availability: '', motivation: '', cvURL: ''
  });
  
  const [skills, setSkills] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const availableSkills = ['Python', 'C++', 'Java', 'JavaScript', 'TensorFlow', 'PyTorch', 'React', 'Node', 'Firebase', 'Cloud', 'Linux', 'Git', 'Research', 'Prompt Engineering', 'Other'];

  const handleSkillChange = (skill: string) => {
    setSkills(prev => 
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.motivation.length < 300) {
      alert("Motivation must be at least 300 characters.");
      return;
    }
    setIsSubmitting(true);
    
    // Simulate File Upload
    let uploadedURL = "https://example.com/mock-cv.pdf"; 
    
    try {
      await addDoc(collection(db, 'applications'), {
        ...formData,
        skills,
        cvURL: uploadedURL,
        submittedAt: serverTimestamp(),
        status: 'Pending'
      });
      setSuccess(true);
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("There was an error submitting your application. Please try again.");
    }
    setIsSubmitting(false);
  };

  if (success) {
    return (
      <div className="bg-white px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Application Submitted!</h2>
          <p className="mt-4 text-lg text-gray-600">Thank you for applying. We will review your application and get back to you soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <SEO title="Join Us" description="Apply to join the NovaMind AI Society. We are recruiting researchers, engineers, and AI enthusiasts." />
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-12">Join NovaMind AI</h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
              <input required type="text" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-3" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <input required type="email" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-3" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">Phone</label>
              <input required type="tel" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-3" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">University ID</label>
              <input required type="text" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-3" value={formData.universityId} onChange={e => setFormData({...formData, universityId: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">Department</label>
              <input required type="text" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-3" value={formData.department} onChange={e => setFormData({...formData, department: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">Year of Study</label>
              <input required type="text" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-3" value={formData.year} onChange={e => setFormData({...formData, year: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">CGPA</label>
              <input required type="text" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-3" value={formData.cgpa} onChange={e => setFormData({...formData, cgpa: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">LinkedIn URL</label>
              <input type="url" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-3" value={formData.linkedin} onChange={e => setFormData({...formData, linkedin: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">GitHub URL</label>
              <input type="url" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-3" value={formData.github} onChange={e => setFormData({...formData, github: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">Portfolio URL</label>
              <input type="url" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-3" value={formData.portfolio} onChange={e => setFormData({...formData, portfolio: e.target.value})} />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">Position</label>
            <select className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-3" value={formData.position} onChange={e => setFormData({...formData, position: e.target.value})}>
              <option value="Member">Member</option>
              <option value="Vice President">Vice President</option>
              <option value="Research Lead">Research Lead</option>
              <option value="Engineering Lead">Engineering Lead</option>
              <option value="Operations Lead">Operations Lead</option>
              <option value="Community Lead">Community Lead</option>
              <option value="Design Lead">Design Lead</option>
            </select>
          </div>

          {formData.position === 'Member' && (
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">Preferred Team</label>
              <select className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-3" value={formData.team} onChange={e => setFormData({...formData, team: e.target.value})}>
                <option value="">Select a team</option>
                <option value="AI Research Team">AI Research Team</option>
                <option value="Software Development Team">Software Development Team</option>
                <option value="Computer Vision Team">Computer Vision Team</option>
                <option value="Machine Learning Team">Machine Learning Team</option>
                <option value="Web Development Team">Web Development Team</option>
                <option value="Cybersecurity & AI Safety Team">Cybersecurity & AI Safety Team</option>
                <option value="Community & Events Team">Community & Events Team</option>
                <option value="Documentation Team">Documentation Team</option>
              </select>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">Experience</label>
            <textarea rows={4} className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-3" value={formData.experience} onChange={e => setFormData({...formData, experience: e.target.value})} />
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900 mb-2">Skills</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {availableSkills.map((skill) => (
                <div key={skill} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={skills.includes(skill)}
                    onChange={() => handleSkillChange(skill)}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                  />
                  <label className="ml-2 text-sm text-gray-900">{skill}</label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">Availability (Hours per week)</label>
            <input required type="number" min="0" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-3" value={formData.availability} onChange={e => setFormData({...formData, availability: e.target.value})} />
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">Motivation (Minimum 300 characters)</label>
            <textarea required rows={6} className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-3" value={formData.motivation} onChange={e => setFormData({...formData, motivation: e.target.value})} />
            <p className="mt-2 text-sm text-gray-500">{formData.motivation.length} characters</p>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">Upload CV (PDF, DOCX. Max 10MB)</label>
            <input required type="file" accept=".pdf,.docx" className="mt-2 block w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" onChange={e => e.target.files && setFile(e.target.files[0])} />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
        <FAQ faqs={joinFAQs} />
      </div>
    </div>
  );
}
