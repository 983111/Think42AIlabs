import React, { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase/config';
import { cn } from './lib/utils';
import { LogoHeader, LogoMark } from './components/Logo';
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

const APPLY_URL = "https://docs.google.com/forms/d/e/1FAIpQLSc20sMqe1_0s0vcYX6DzaokctBi1ZHL1GJ2n63FozV5QtQI7A/viewform?usp=dialog";

function Navigation() {
  const location = useLocation();
  const links = [
    { name: 'About', path: '/about' },
    { name: 'Research', path: '/research' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Members', path: '/leadership' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-paper border-b border-line">
      <div className="mx-auto flex h-[76px] max-w-6xl items-center justify-between px-6 lg:px-8">
        <Link to="/" className="flex items-center">
          <LogoHeader />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-[0.9rem] transition-colors border-b border-transparent pb-0.5',
                location.pathname === link.path
                  ? 'text-ink border-ink'
                  : 'text-ink-soft hover:text-ink'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <a
          href={APPLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center text-sm text-ink border-b border-ink pb-0.5 hover:text-accent hover:border-accent transition-colors"
        >
          Apply
        </a>
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
      alert('Subscription failed. Please try again.');
    }
  };

  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 text-ink">
              <LogoMark className="h-8 w-8" />
              <span className="font-serif text-base font-semibold">Think 42 AI Lab</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-ink-soft max-w-xs">
              A student-run research lab advancing artificial intelligence through study, engineering, and shared work.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm text-ink mb-4">Lab</h3>
            <ul className="space-y-3 text-sm text-ink-soft">
              <li><Link to="/about" className="hover:text-ink">About</Link></li>
              <li><Link to="/research" className="hover:text-ink">Research</Link></li>
              <li><Link to="/projects" className="hover:text-ink">Projects</Link></li>
              <li><Link to="/blogs" className="hover:text-ink">Blogs</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm text-ink mb-4">Community</h3>
            <ul className="space-y-3 text-sm text-ink-soft">
              <li><Link to="/join" className="hover:text-ink">Join</Link></li>
              <li><Link to="/leadership" className="hover:text-ink">Members</Link></li>
              <li><Link to="/guidelines" className="hover:text-ink">Guidelines</Link></li>
              <li><Link to="/contact" className="hover:text-ink">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm text-ink mb-4">Stay informed</h3>
            {status === 'success' ? (
              <p className="text-sm text-ink-soft">Thanks — check your inbox soon.</p>
            ) : (
              <form className="flex gap-2" onSubmit={handleSubmit}>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  type="email"
                  id="email-address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'submitting'}
                  className="w-full min-w-0 border border-line bg-paper px-3 py-2 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-ink"
                  placeholder="you@university.edu"
                />
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-outline whitespace-nowrap px-4"
                >
                  {status === 'submitting' ? 'Sending' : 'Subscribe'}
                </button>
              </form>
            )}
            <p className="mt-4 text-sm text-ink-soft">
              <a href="mailto:think42ailabs@gmail.com" className="hover:text-ink">think42ailabs@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-ink-faint">&copy; {new Date().getFullYear()} Think 42 AI Lab.</p>
          <div className="flex gap-6 text-xs text-ink-faint">
            <Link to="/privacy" className="hover:text-ink">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-ink">Terms of Service</Link>
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
        <div className="flex min-h-screen flex-col bg-paper text-ink font-sans">
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
