import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Is my family's data private and secure?",
      answer: "Absolutely. We never sell your data to third parties. All profiles are private by default and only shared when you choose to connect with another family. We use bank-level encryption, and you can delete your account and all data at any time. Our servers are located in South Africa and comply with POPIA regulations."
    },
    {
      question: "Is this app only for autistic children?",
      answer: "Our primary focus is supporting families with autistic children and those who value sensory-aware, inclusive play environments. However, neurotypical siblings and friends are absolutely welcome. Many families use our platform to arrange mixed playdates that work for all children involved."
    },
    {
      question: "How does the matching system work?",
      answer: "Our algorithm considers multiple factors: your child's age, interests, sensory preferences, communication style, and your family's values. You can filter by proximity, preferred activities, and accommodation needs. The system learns from your feedback to improve future matches."
    },
    {
      question: "What age ranges do you support?",
      answer: "We're designed for families with children ages 3-12 years old. Our matching system takes developmental stages into account, so a 4-year-old won't be matched with a 10-year-old unless specifically requested by both families."
    },
    {
      question: "How do you ensure family safety?",
      answer: "Every family completes identity verification including photo ID and phone confirmation. We manually review all profiles before approval. Our platform includes built-in reporting tools, blocking features, and 24/7 safety monitoring. All communication happens within our secure platform."
    },
    {
      question: "Which areas of South Africa do you cover?",
      answer: "We're launching in major metropolitan areas including Cape Town, Johannesburg, Pretoria, Durban, and Port Elizabeth first. We'll expand to smaller cities based on demand. Rural areas can still join—we're working on solutions for lower-density regions."
    },
    {
      question: "Will this cost money?",
      answer: "Basic matching and messaging will always be free. We're considering premium features like enhanced filters, priority support, and exclusive events. Any paid features will be optional and affordable for South African families."
    },
    {
      question: "What if a playdate doesn't go well?",
      answer: "That's completely normal and okay! You can provide feedback (visible only to us) to improve future matches. If there are safety concerns, use our report feature. If it's just a personality mismatch, you can politely decline future meetups. There's no obligation to continue any connection."
    },
    {
      question: "Do you support different communication styles?",
      answer: "Yes! Our profiles include options for verbal/non-verbal communication, sign language, picture communication systems, and other accommodation needs. We match families with compatible communication preferences to ensure comfortable interactions."
    },
    {
      question: "How do I know if venues are truly sensory-friendly?",
      answer: "We partner with autism organisations to verify venue information. Each location includes details about noise levels, lighting, crowd sizes, and available accommodations. Families can also share real-time updates and reviews."
    },
    {
      question: "Can I arrange group playdates?",
      answer: "Absolutely! Once you've connected with families, you can coordinate group activities. Our system suggests optimal group sizes based on the children's profiles and venue capacity. We recommend starting small and growing groups gradually."
    },
    {
      question: "What support resources do you provide?",
      answer: "Beyond matching, we offer a resource library with articles, expert tips, and local service directories. Our community forum allows parents to share experiences and advice. We're partnering with South African autism organisations for additional support."
    }
  ];

  return (
    <section id="faq" className="py-16">
      <div className="container-tight">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We understand you may have concerns. Here are honest answers to the questions families ask most often.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <article 
                key={index}
                className="border border-border rounded-lg bg-card shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                  aria-expanded={openItems.includes(index)}
                >
                  <h3 className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform ${
                      openItems.includes(index) ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <div className="border-t pt-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:hello@playconnectspectrum.co.za" 
                className="text-primary hover:underline"
              >
                hello@playconnectspectrum.co.za
              </a>
              <span className="text-muted-foreground">•</span>
              <a 
                href="tel:+27123456789" 
                className="text-primary hover:underline"
              >
                +27 12 345 6789
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;