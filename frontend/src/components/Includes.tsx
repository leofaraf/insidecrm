import Wrappers from "@/components/common/Wrappers";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, CircleX } from "lucide-react";

type IncludesProps = {
  title: string;
  items: string[];
  problems?: string[];
};

const defaultProblems = [
  "Лиды теряются между этапами и менеджерами",
  "Нет прозрачной картины по воронке и конверсии",
  "Клиентам отвечают медленно и не по стандарту",
  "Руководитель не видит реальную нагрузку отдела",
];

function Includes({ title, items, problems = defaultProblems }: IncludesProps) {
  if (!items.length) {
    return null;
  }

  const visibleProblems = problems.slice(0, 4);
  const solutionItems = items.slice(0, 4);

  return (
    <section className="w-full py-12">
      <Wrappers className="w-full">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Проблемы</p>
          <h2 className="text-2xl font-bold sm:text-3xl">Мы знаем ваши проблемы</h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Посмотрите, как меняется отдел, когда в нем появляется структура, цифры и системный контроль.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {visibleProblems.map((item, index) => (
            <li
              key={`${item}-${index}`}
              className="flex items-start gap-2 rounded-lg border border-red-200/90 bg-red-50/70 px-4 py-3 text-base"
            >
              <CircleX className="mt-0.5 size-4 shrink-0 text-red-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <Card className="my-6 border-zinc-200/80 bg-white shadow-sm">
          <CardHeader className="pb-2">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Решение</p>
            <CardTitle className="text-2xl sm:text-3xl">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {solutionItems.map((item, index) => (
                <li
                  key={`${item}-${index}`}
                  className="flex items-start gap-2 rounded-lg border border-emerald-200/80 bg-emerald-50/60 px-4 py-3 text-base"
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </Wrappers>
    </section>
  );
}

export default Includes;
