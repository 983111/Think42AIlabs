import { SEO } from '../components/SEO';

export function Contact() {
  return (
    <div className="bg-paper px-6 py-28 sm:py-36 lg:px-8">
      <SEO title="Contact Us" description="Have questions? Reach out to Think 42 AI lab by email." />
      <div className="mx-auto max-w-lg text-center">
        <h1 className="font-serif text-4xl text-ink sm:text-5xl">Get in touch</h1>
        <p className="mt-4 text-lg leading-8 text-ink-soft">
          Have a question? Write to us and we'll get back to you.
        </p>
        <a
          href="mailto:think42ailabs@gmail.com"
          className="mt-10 inline-block font-serif text-xl text-ink border-b border-ink pb-1 hover:text-accent hover:border-accent transition-colors"
        >
          think42ailabs@gmail.com
        </a>
      </div>
    </div>
  );
}
