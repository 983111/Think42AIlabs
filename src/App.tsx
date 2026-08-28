import React, { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase/config';
import { cn } from './lib/utils';
import { LogoHeader } from './components/Logo';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Leadership } from './pages/Leadership';
import { Guidelines } from './pages/Guidelines';
import { Projects } from './pages/Projects';
import { Research } from './pages/Research';
import { Blogs } from './pages/Blogs';
import { Join } from './pages/Join';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Admin } from './pages/Admin';
import { ScrollToTop } from './components/ScrollToTop';

function Navigation() {
  const location = useLocation();
  const links = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Research', path: '/research' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Join Us', path: '/join' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <LogoHeader />
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-black',
                  location.pathname === link.path ? 'text-black' : 'text-gray-500'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc20sMqe1_0s0vcYX6DzaokctBi1ZHL1GJ2n63FozV5QtQI7A/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 md:block"
          >
            Apply Now
          </a>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('submitting');
    try {
      await addDoc(collection(db, 'subscribers'), {
        email: email,
        subscribedAt: serverTimestamp()
      });
      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setStatus('idle');
      const errInfo = {
        error: error instanceof Error ? error.message : String(error),
        authInfo: {
          userId: null,
          email: null,
          emailVerified: null,
          isAnonymous: null,
          tenantId: null,
          providerInfo: []
        },
        operationType: 'write',
        path: 'subscribers'
      };
      console.error('Firestore Error: ', JSON.stringify(errInfo));
      alert('Subscription failed. Please try again.');
    }
  };

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link to="/" className="flex items-center">
              <LogoHeader />
            </Link>
            <p className="text-sm leading-6 text-gray-500">
              A student-driven AI research and innovation community building the future through knowledge, collaboration, and impact.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-3 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Explore</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link to="/about" className="text-sm leading-6 text-gray-600 hover:text-gray-900">About</Link></li>
                  <li><Link to="/projects" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Projects</Link></li>
                  <li><Link to="/research" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Research</Link></li>
                  <li><Link to="/blogs" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Blogs</Link></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Community</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link to="/join" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Join Us</Link></li>
                  <li><Link to="/leadership" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Members</Link></li>
                  <li><Link to="/guidelines" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Guidelines</Link></li>
                  <li><Link to="/contact" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Connect</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="mailto:hello@think42ai.com" className="text-sm leading-6 text-gray-600 hover:text-gray-900">hello@think42ai.com</a></li>
                </ul>
                <div className="mt-8">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">Subscribe to our newsletter</h3>
                  {status === 'success' ? (
                    <div className="mt-4 rounded-md bg-green-50 p-4 border border-green-200 sm:max-w-md">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-green-500 animate-bounce" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-green-800">
                            Thanks for subscribing! Check your inbox soon.
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <form className="mt-4 sm:flex sm:max-w-md" onSubmit={handleSubmit}>
                      <label htmlFor="email-address" className="sr-only">Email address</label>
                      <input 
                        type="email" 
                        name="email-address" 
                        id="email-address" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={status === 'submitting'}
                        className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:w-64 sm:text-sm sm:leading-6 xl:w-full" 
                        placeholder="Enter your email" 
                      />
                      <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                        <button 
                          type="submit" 
                          disabled={status === 'submitting'}
                          className="flex w-full items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:bg-gray-400"
                        >
                          {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24 flex items-center justify-between">
          <p className="text-xs leading-5 text-gray-500">&copy; {new Date().getFullYear()} Think 42 AI lab. All rights reserved.</p>
          <div className="flex space-x-6 text-xs leading-5 text-gray-500">
             <Link to="/privacy" className="hover:text-gray-900">Privacy Policy</Link>
             <Link to="/terms" className="hover:text-gray-900">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col bg-[#FAFAFA]">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/research" element={<Research />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/join" element={<Join />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/guidelines" element={<Guidelines />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}
