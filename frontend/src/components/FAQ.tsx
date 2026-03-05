import Wrappers from "@/components/common/Wrappers";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

export type FAQItem = {
  q: string;
  a: string;
};

type FAQProps = {
  items: FAQItem[];
};

function FAQ({ items }: FAQProps) {
  if (!items.length) {
    return null;
  }

  return (
    <section className="faq-enter w-full py-10">
      <Wrappers className="w-full">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">FAQ</p>
          <h2 className="text-3xl font-bold">Часто задаваемые вопросы</h2>
        </div>

        <Card className="overflow-hidden border-zinc-200/80 shadow-sm">
          <ul className="divide-y divide-border">
            {items.map((item, index) => (
              <li
                key={`${item.q}-${index}`}
                className="faq-item-enter py-2"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <details className="faq-row group px-5 py-1">
                  <summary className="flex  cursor-pointer list-none items-start justify-between gap-3 text-left font-medium">
                    <span>{item.q}</span>
                    <ChevronDown className="mt-1 size-4 shrink-0 transition-transform duration-300 group-open:rotate-180" />
                  </summary>

                  <div className="faq-answer-wrap">
                    <div className="faq-answer-inner py-2">
                      <p className="faq-answer text-sm leading-relaxed text-muted-foreground">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </Card>
      </Wrappers>
    </section>
  );
}

export default FAQ;
