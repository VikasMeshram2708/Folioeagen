import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faqs() {
  const faqs = [
    {
      question: "How does the LinkedIn integration work?",
      answer: "Simply provide your LinkedIn profile URL, and we'll securely extract your professional data to populate your portfolio.",
    },
    {
      question: "Can I customize the generated portfolio?",
      answer: "Absolutely! After generation, you can edit all content, rearrange sections, and choose from multiple design themes.",
    },
    {
      question: "What file formats can I upload?",
      answer: "We support PDF resumes, Word documents (.doc, .docx), and plain text files (.txt).",
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! You can generate and preview your portfolio for free. Only pay when you're ready to export or publish.",
    },
  ];
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Frequently asked questions
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Everything you need to know about Folioeagen
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-lg text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-lg">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
