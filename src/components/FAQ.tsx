import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Who can participate in the DSA Olympiad?",
      answer: "The event is open to all college students interested in data structures and algorithms. No prior competitive programming experience is required for Round 1 and 2.",
    },
    {
      question: "Is there a registration fee?",
      answer: "Yes, participation requires a ₹200 registration fee.",
    },
    {
      question: "What programming languages are allowed?",
      answer: "For Round 3 (Problem Solving), you can use any language supported by the platform (Unstop), including C++, Java, Python, JavaScript and more.",
    },
    {
      question: "Do I need to participate in all rounds?",
      answer: "Yes, to be eligible for prizes, you must participate in all three rounds. Your cumulative score across all rounds will determine the final rankings.",
    },
    {
      question: "How will the winners be selected?",
      answer: "Winners and Runner-up for each round will be determined based on the points earned in that round. In case of a tie, the time taken to complete the challenges will be considered.",
    },
    {
      question: "Will there be certificates?",
      answer: "Yes, all participants will receive digital certificates. Top 2 performers from each round will receive special achievement certificates.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--neon-purple)/0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-primary/20 rounded-2xl px-6 bg-glass/30 backdrop-blur-md hover:border-primary/40 transition-all duration-300 animate-slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary transition-colors py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
