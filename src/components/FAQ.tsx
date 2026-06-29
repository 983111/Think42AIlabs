import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

export function FAQ({ faqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="mx-auto max-w-3xl mt-16 border-t border-gray-200 pt-16">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">Frequently Asked Questions</h2>
      <dl className="space-y-6 divide-y divide-gray-200">
        {faqs.map((faq, index) => (
          <div key={index} className="pt-6">
            <dt>
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-start justify-between text-left text-gray-900 focus:outline-none"
              >
                <span className="text-base font-semibold leading-7">{faq.question}</span>
                <span className="ml-6 flex h-7 items-center">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-600" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  )}
                </span>
              </button>
            </dt>
            {openIndex === index && (
              <dd className="mt-2 pr-12">
                <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
              </dd>
            )}
          </div>
        ))}
      </dl>
    </div>
  );
}
